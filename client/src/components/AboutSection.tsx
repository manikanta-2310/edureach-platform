import { aboutContent, images } from "../data/content";
import "./AboutSection.css";

export default function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-content">
          {/* Left - Images */}
          <div className="about-images">
            <img
              src={images.collegeClassroom}
              alt="Classroom"
              className="about-main-image"
            />
            {/* Small overlay image */}
            <img
              src={images.tech1}
              alt="Technology"
              className="about-overlay-image"
            />
          </div>

          {/* Right - Content */}
          <div className="about-copy">
            <p className="about-eyebrow">
              {aboutContent.subtitle}
            </p>
            <h2 className="about-title">
              {aboutContent.title}
            </h2>
            <p className="about-description">
              {aboutContent.description}
            </p>

            {/* Stat grid */}
            <div className="about-highlights">
              {aboutContent.highlights.map((item) => (
                <div
                  key={item.label}
                  className="about-highlight"
                >
                  <p className="about-highlight-value">{item.value}</p>
                  <p className="about-highlight-label">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}