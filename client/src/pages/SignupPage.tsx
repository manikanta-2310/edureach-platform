import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, User, Mail, Lock, Phone, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { registerUser } from "../services/auth.service";
import { useAuth } from "../context/AuthContext";
import { images } from "../data/content";
import "../components/SiteStyles.css";

interface ApiError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please fill in required fields");
      return;
    }

    setLoading(true);
    try {
      // registerUser now returns { token, user } directly
      const data = await registerUser({ name, email, password, phone: phone || undefined });
      login(data.token);
      toast.success("Account created! Welcome to EduReach.");
      navigate("/");
    } catch (error) {
      toast.error((error as ApiError).response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-panel">
        <div className="auth-content">
          <Link to="/" className="auth-back">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <h1 className="auth-title">Create Account</h1>
          <p className="auth-description">Join EduReach for unlimited access to AI chat & counseling calls</p>

          <form onSubmit={handleSubmit} className="auth-form auth-form--signup">
            <div className="form-field">
              <label>Full Name *</label>
              <div className="input-with-icon">
                <User className="input-icon" />
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe"
                  className="form-control" />
              </div>
            </div>
            <div className="form-field">
              <label>Email *</label>
              <div className="input-with-icon">
                <Mail className="input-icon" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                  className="form-control" />
              </div>
            </div>
            <div className="form-field">
              <label>Password *</label>
              <div className="input-with-icon">
                <Lock className="input-icon" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Min 6 characters"
                  className="form-control" />
              </div>
            </div>
            <div className="form-field">
              <label>Phone (optional)</label>
              <div className="input-with-icon">
                <Phone className="input-icon" />
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91-9876543210"
                  className="form-control" />
              </div>
            </div>
            <button type="submit" disabled={loading}
              className="auth-submit">
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="auth-footer">
            Already have an account?{" "}
            <Link to="/login">Sign In</Link>
          </p>
        </div>
      </div>

      <div className="auth-panel auth-panel--visual">
        <img src={images.moreStudents} alt="Students" className="auth-panel-image" />
        <div className="auth-panel-overlay">
          <div className="auth-brand">
            <GraduationCap className="auth-brand-icon" />
            <h2>Join EduReach</h2>
            <p>92% placement rate · Top recruiters · 25-acre campus</p>
          </div>
        </div>
      </div>
    </div>
  );
}
