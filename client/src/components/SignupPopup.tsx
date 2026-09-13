import { Link } from "react-router-dom";
import { X, GraduationCap } from "lucide-react";
import "./SiteStyles.css";

interface SignupPopupProps {
  show: boolean;
  onClose: () => void;
}

export default function SignupPopup({ show, onClose }: SignupPopupProps) {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-card signup-card">
        <button onClick={onClose} className="modal-close">
          <X size={20} />
        </button>
        <div className="signup-content">
          <div className="signup-icon">
            <GraduationCap size={28} />
          </div>
          <h3 className="signup-title">Unlock Full Access</h3>
          <p className="signup-description">
            Sign up to explore our mentors, campus life, placements, and get AI-powered counseling.
          </p>
          <Link to="/signup" onClick={onClose}
            className="signup-unlock-button">
            Create Free Account
          </Link>
          <p className="signup-link-copy">
            Already have an account?{" "}
            <Link to="/login" onClick={onClose}>Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}