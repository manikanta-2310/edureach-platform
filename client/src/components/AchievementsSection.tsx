import { achievementsContent } from "../data/content";
import "./AchievementsSection.css";

export default function AchievementsSection() {
  return (
    <section className="achievements-section">
      <div className="achievements-container">
        <div className="achievements-list">
          {achievementsContent.stats.map((stat) => (
            <div key={stat.label} className="achievement">
              <p className="achievement-value">
                {stat.value}
              </p>
              <p className="achievement-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}