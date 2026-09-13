import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import SignupPopup from "../components/SignupPopup";
import CallPopup from "../components/CallPopup";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import AchievementsSection from "../components/AchievementsSection";
import CoursesSection from "../components/CoursesSection";
import QuotesSection from "../components/QuotesSection";
import MentorsSection from "../components/MentorsSection";
import StudentLifeSection from "../components/StudentLifeSection";
import EventsGallery from "../components/EventsGallery";
import CounselorCTA from "../components/CounselorCTA";
import HiringStatsSection from "../components/HiringStatsSection";
import Footer from "../components/Footer";
import "../components/SiteStyles.css";

export default function HomePage() {
  const { user } = useAuth();
  const [showSignupPopup, setShowSignupPopup] = useState(false);
  const [showCallPopup, setShowCallPopup] = useState(false);

  // Scroll trigger — show signup popup when visitor reaches Mentors section
  const handleReachMentors = () => {
    if (!user && !sessionStorage.getItem("popupShown")) {
      setShowSignupPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  };

  return (
    <div>
      {/* Visible to everyone */}
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <CoursesSection />
      <QuotesSection />
      <MentorsSection onReachMentors={handleReachMentors} />

      {/* Content below Mentors — GATED */}
      {user ? (
        <>
          <StudentLifeSection />
          <EventsGallery />
          <CounselorCTA onOpenCall={() => setShowCallPopup(true)} />
          <HiringStatsSection />
          <Footer />
        </>
      ) : (
        <section className="unlock-section">
          <h2 className="unlock-title">Want to See More?</h2>
          <p className="unlock-description">
            Sign up to explore campus life, events, placement statistics,
            and talk to our AI counselor.
          </p>
          <button onClick={() => setShowSignupPopup(true)}
            className="unlock-button">
            Sign Up to Unlock
          </button>
          <Footer />
        </section>
      )}

      <SignupPopup show={showSignupPopup} onClose={() => setShowSignupPopup(false)} />
      <CallPopup open={showCallPopup} onClose={() => setShowCallPopup(false)} />
    </div>
  );
}