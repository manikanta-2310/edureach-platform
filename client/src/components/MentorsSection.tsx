import { useEffect, useRef } from "react";
import { mentorsContent } from "../data/content";
import "./SiteStyles.css";

interface MentorsSectionProps {
  onReachMentors?: () => void;
}

export default function MentorsSection({ onReachMentors }: MentorsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggered = useRef(false);

  // Simple scroll check - when section is in view, call the callback
  useEffect(() => {
    const handleScroll = () => {
      if (triggered.current || !sectionRef.current || !onReachMentors) return;

      const rect = sectionRef.current.getBoundingClientRect();
      // When the section top is within the viewport
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        triggered.current = true;
        onReachMentors();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [onReachMentors]);

  return (
    <section id="mentors" ref={sectionRef} className="mentors-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-eyebrow">
            Learn from the Best
          </p>
          <h2 className="section-title">
            Popular Mentors
          </h2>
        </div>

        <div className="mentor-list">
          {mentorsContent.map((mentor) => (
            <div
              key={mentor.name}
              className="mentor-card"
            >
              <img
                src={mentor.image}
                alt={mentor.name}
                className="mentor-image"
              />
              <div className="mentor-copy">
                <h3 className="mentor-name">{mentor.name}</h3>
                <p className="mentor-role">{mentor.role}</p>
                <p className="mentor-bio">{mentor.bio}</p>
                <p className="mentor-teaches">Teaches: {mentor.teaches}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}