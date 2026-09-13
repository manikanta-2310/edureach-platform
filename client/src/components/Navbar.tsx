import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, GraduationCap, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { navLinks } from "../data/content";
import "./SiteStyles.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="site-container navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <GraduationCap className="navbar-logo-icon" />
          <span className="navbar-logo-text">EduReach</span>
        </Link>

        {/* Desktop links */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href}
              className="navbar-link">
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop auth */}
        <div className="navbar-auth">
          {user ? (
            <div className="navbar-user">
              <span className="navbar-greeting">Hi, {user.name.split(" ")[0]}</span>
              <button onClick={handleLogout}
                className="navbar-logout">
                <LogOut size={16} /> Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="navbar-login">Login</Link>
              <Link to="/signup" className="navbar-signup">Sign Up</Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="navbar-toggle">
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="navbar-mobile">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)}
              className="navbar-mobile-link">{link.label}</a>
          ))}
          <div className="navbar-mobile-actions">
            {user ? (
              <button onClick={handleLogout} className="navbar-mobile-link">
                <LogOut size={16} /> Logout
              </button>
            ) : (
              <div className="navbar-mobile-actions">
                <Link to="/login" onClick={() => setMenuOpen(false)} className="navbar-login">Login</Link>
                <Link to="/signup" onClick={() => setMenuOpen(false)} className="navbar-signup">Sign Up</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}