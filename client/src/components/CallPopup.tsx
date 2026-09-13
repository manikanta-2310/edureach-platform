import { useState } from "react";
import { X, Phone, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
import { initiateCall } from "../services/vapi.service";
import { vapiFormContent } from "../data/content";
import "./SiteStyles.css";

interface CallPopupProps {
  open: boolean;
  onClose: () => void;
}

type CallStatus = "form" | "calling" | "done" | "error";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export default function CallPopup({ open, onClose }: CallPopupProps) {
  const { user } = useAuth();
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [topic, setTopic] = useState("");
  const [status, setStatus] = useState<CallStatus>("form");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!phone || !course || !topic) {
      toast.error("Please fill in all fields");
      return;
    }
    setStatus("calling");
    setErrorMessage("");
    try {
      await initiateCall({ phone, course, topic });
      setStatus("done");
      toast.success("Call initiated!");
    } catch (error) {
      const message = (error as ApiError).response?.data?.message || "Failed to initiate call.";
      setErrorMessage(message);
      setStatus("error");
      toast.error(message);
    }
  };

  const reset = () => {
    setStatus("form");
    setPhone("");
    setCourse("");
    setTopic("");
    setErrorMessage("");
  };

  const handleClose = () => {
    reset();
    onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-card call-card">
        <button onClick={handleClose} className="modal-close">
          <X size={20} />
        </button>
        <div className="call-header">
          <h3 className="call-title">Talk to Our AI Counselor</h3>
          <p className="call-subtitle">Get personalized guidance on courses, admissions & more</p>
        </div>

        <div className="call-body">
          {status === "form" && (
            <form onSubmit={handleSubmit} className="call-form">
              <div className="form-field">
                <label>Your Name</label>
                <input type="text" value={user?.name || ""} readOnly
                  className="form-control form-control--readonly" />
              </div>
              <div className="form-field">
                <label>Phone Number *</label>
                <div className="input-with-icon">
                  <Phone className="input-icon" />
                  <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="9876543210" required autoComplete="tel"
                    className="form-control" />
                </div>
              </div>
              <div className="form-field">
                <label>Interested Course *</label>
                <select value={course} onChange={(e) => setCourse(e.target.value)}
                  className="form-control">
                  <option value="">Select a course</option>
                  {vapiFormContent.courses.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="form-field">
                <label>What do you want to know? *</label>
                <select value={topic} onChange={(e) => setTopic(e.target.value)}
                  className="form-control">
                  <option value="">Select a topic</option>
                  {vapiFormContent.topics.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <button type="submit"
                className="site-button site-button--maroon">
                Call Me Now
              </button>
            </form>
          )}

          {status === "calling" && (
            <div className="call-state">
              <Loader2 className="call-state-icon call-state-icon--loading" />
              <h3>Calling you now...</h3>
              <p>Our AI counselor Ava is dialing {phone}</p>
            </div>
          )}

          {status === "done" && (
            <div className="call-state">
              <CheckCircle className="call-state-icon call-state-icon--success" />
              <h3>Call Initiated!</h3>
              <p>You'll receive a call shortly on {phone}.</p>
              <button onClick={reset} className="text-action">Request Another Call</button>
            </div>
          )}

          {status === "error" && (
            <div className="call-state">
              <AlertCircle className="call-state-icon call-state-icon--error" />
              <h3>Call Failed</h3>
              <p>{errorMessage || "Something went wrong. Please try again."}</p>
              <button onClick={reset} className="site-button site-button--maroon">Try Again</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
