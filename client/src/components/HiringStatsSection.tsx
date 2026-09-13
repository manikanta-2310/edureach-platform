import { topRecruiters, deptPlacements, images } from "../data/content";
import { TrendingUp } from "lucide-react";
import "./SiteStyles.css";

export default function HiringStatsSection() {
  return (
    <section id="placements" className="placement-section">
      <div className="site-container">
        <div className="section-heading">
          <p className="section-eyebrow">
            Where Our Students Go
          </p>
          <h2 className="section-title">
            Placement Highlights 2023–24
          </h2>
        </div>

        <div className="placement-columns">
          <div className="placement-panel">
            <div className="placement-panel-heading">
              <img src={images.tech4} alt="Tech" className="placement-thumb" />
              <h3 className="placement-title">
                <TrendingUp size={20} />
                Average Package by Department
              </h3>
            </div>
            <div className="placement-list">
              {deptPlacements.map((item) => (
                <div key={item.dept}>
                  <div className="placement-row-heading">
                    <span className="placement-dept">{item.dept}</span>
                    <span className="placement-average">{item.avg}</span>
                  </div>
                  <div className="placement-bar">
                    <div
                      className="placement-bar-fill"
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="placement-panel placement-panel--recruiters">
            <div className="placement-images">
              <img src={images.recruter1} alt="Fest" />
              <img src={images.recruter2} alt="Event" />
              <img src={images.moreStudents} alt="Students" />
            </div>

            <div className="recruiters-panel">
              <h3 className="recruiters-title">
                Top Recruiters
              </h3>
              <div className="recruiters-list">
                {topRecruiters.map((company) => (
                  <span
                    key={company}
                    className="recruiter"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}