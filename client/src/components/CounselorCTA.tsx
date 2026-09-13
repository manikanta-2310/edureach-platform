import { useNavigate } from "react-router-dom";
import { images } from "../data/content";
import { PhoneCall } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import "./SiteStyles.css";

interface CounselorCTAProps {
  onOpenCall: () => void;
}

export default function CounselorCTA({ onOpenCall }: CounselorCTAProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      onOpenCall();
    } else {
      navigate("/login");
    }
  };

  return (
    <section className="cta">
      <img src={images.moreStudents} alt="Students" className="cta-image" />
      <div className="cta-overlay" />

      <div className="cta-content">
        <p className="cta-kicker">
          Our Expert Counsellors Are Just a Click Away
        </p>
        <h2 className="cta-title">
          Need Help Choosing <br className="cta-break" />
          The Right University For You?
        </h2>
        <p className="cta-description">
          Get personalized guidance on courses, admissions, fees, scholarships, and career paths.
        </p>
        <button
          onClick={handleClick}
          className="cta-button"
        >
          <PhoneCall size={20} />
          Talk to Counsellor
        </button>
      </div>
    </section>
  );
}