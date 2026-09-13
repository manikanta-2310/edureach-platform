import { campusFeatures } from "../data/content";
import "./StudentLifeSection.css";

export default function StudentLifeSection() {
  return (
    <section id="campus" className="student-life-section">
      <div className="student-life-container">
        <div className="student-life-heading">
          <p className="student-life-eyebrow">
            Beyond the Classroom
          </p>
          <h2 className="student-life-title">
            Campus & Student Life
          </h2>
        </div>

        <div className="student-life-list">
          {campusFeatures.map((feature) => (
            <div
              key={feature.title}
              className="student-life-item"
            >
              {/* Image - zooms on hover */}
              <img
                src={feature.image}
                alt={feature.title}
                className="student-life-image"
              />

              {/* Bottom gradient - always visible */}
              <div className="student-life-overlay">
                <div className="student-life-copy">
                  <h3 className="student-life-item-title">{feature.title}</h3>
                  {/* Description slides up on hover */}
                  <p className="student-life-description">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}