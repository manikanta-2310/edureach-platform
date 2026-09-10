

import type { Request, Response, NextFunction } from "express";
import User from "../models/user.model.ts";
import { initiateOutboundCall } from "../services/vapi.service.ts";

const normalizeIndianPhoneNumber = (value: string): string | null => {
  const digits = value.replace(/\D/g, "");
  const nationalNumber = digits.startsWith("91") && digits.length === 12
    ? digits.slice(2)
    : digits.replace(/^0+/, "");

  return /^[6-9]\d{9}$/.test(nationalNumber) ? `+91${nationalNumber}` : null;
};

// POST /api/vapi/call
export const startCall = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { phoneNumber, preferredCourse, queryTopic } = req.body;
    const formattedPhoneNumber = typeof phoneNumber === "string"
      ? normalizeIndianPhoneNumber(phoneNumber)
      : null;

    if (!formattedPhoneNumber) {
      res.status(400).json({ success: false, message: "Enter a valid 10-digit Indian mobile number." });
      return;
    }

    if (!req.user) {
      res.status(401).json({ success: false, message: "Not authenticated." });
      return;
    }

    const user = await User.findById(req.user.userId).select("name email");

    if (!user) {
      res.status(404).json({ success: false, message: "User not found." });
      return;
    }

    const callPayload: Parameters<typeof initiateOutboundCall>[0] = {
      phoneNumber: formattedPhoneNumber,
      userName: user.name,
      userEmail: user.email,
    };

    if (typeof preferredCourse === "string" && preferredCourse.trim()) {
      callPayload.preferredCourse = preferredCourse.trim();
    }
    if (typeof queryTopic === "string" && queryTopic.trim()) {
      callPayload.queryTopic = queryTopic.trim();
    }

    const result = await initiateOutboundCall(callPayload);

    res.status(200).json({
      success: true,
      message: "Call initiated. You will receive a call shortly.",
      data: { callId: result.id, status: result.status },
    });
  } catch (error) {
    next(error);
  }
};
