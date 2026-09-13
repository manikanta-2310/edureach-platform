import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GraduationCap, Mail, Lock, ArrowLeft } from "lucide-react";
import toast from "react-hot-toast";
import { loginUser } from "../services/auth.service";
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

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      // loginUser now returns { token, user } directly
      const data = await loginUser({ email, password });
      login(data.token);
      toast.success("Welcome back!");
      navigate("/");
    } catch (error) {
      toast.error((error as ApiError).response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-panel auth-panel--visual">
        <img src={images.students} alt="Students" className="auth-panel-image" />
        <div className="auth-panel-overlay">
          <div className="auth-brand">
            <GraduationCap className="auth-brand-icon" />
            <h2>EduReach</h2>
            <p>Your Gateway to Smarter Education</p>
          </div>
        </div>
      </div>

      <div className="auth-panel">
        <div className="auth-content">
          <Link to="/" className="auth-back">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>

          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-description">Sign in to your EduReach account</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-field">
              <label>Email</label>
              <div className="input-with-icon">
                <Mail className="input-icon" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com"
                  className="form-control" />
              </div>
            </div>
            <div className="form-field">
              <label>Password</label>
              <div className="input-with-icon">
                <Lock className="input-icon" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••"
                  className="form-control" />
              </div>
            </div>
            <button type="submit" disabled={loading}
              className="auth-submit">
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="auth-footer">
            Don't have an account?{" "}
            <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
