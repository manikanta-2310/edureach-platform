import type { Request, Response, NextFunction } from "express";

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction): void => {
  console.error("Error:", err.message);
  const statusCode = "statusCode" in err && typeof err.statusCode === "number"
    ? err.statusCode
    : 500;

  res.status(statusCode).json({
    success: false,
    message: statusCode < 500 ? err.message : "Something went wrong. Please try again later.",
  });
};

export default errorHandler;
