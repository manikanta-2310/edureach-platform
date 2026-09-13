import { GraduationCap, Mail, Phone, MapPin } from "lucide-react";
import { contactInfo } from "../data/content";
import "./SiteStyles.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-columns">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <GraduationCap className="footer-brand-icon" />
              <span className="footer-brand-name">EduReach</span>
            </div>
            <p className="footer-copy">
              Premier engineering institution established in 2005. AICTE approved, JNTU Hyderabad affiliated.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <a href="#about">About Us</a>
              <a href="#courses">Programs</a>
              <a href="#mentors">Faculty</a>
              <a href="#campus">Campus Life</a>
              <a href="#placements">Placements</a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="footer-heading">Programs</h4>
            <div className="footer-programs">
              <p>B.Tech (6 specializations)</p>
              <p>M.Tech (3 specializations)</p>
              <p>MBA (Finance, Marketing, HR, IT)</p>
              <p>Admissions open: March 1st</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <div className="footer-contact">
              <p>
                <Mail size={16} />
                {contactInfo.email}
              </p>
              <p>
                <Phone size={16} />
                {contactInfo.phone}
              </p>
              <p>
                <MapPin size={16} />
                {contactInfo.address}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          © 2024 EduReach College, Hyderabad. All rights reserved.
        </div>
      </div>
    </footer>
  );
}