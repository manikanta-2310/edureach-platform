import { coursesContent, images } from "../data/content";
import { BookOpen, Users } from "lucide-react";
import "./CoursesSection.css";

export default function CoursesSection() {
  return (
    <section id="courses" className="courses-section">
      <div className="courses-container">
        {/* Header */}
        <div className="courses-heading">
          <p className="courses-eyebrow">
            World-Class Education
          </p>
          <h2 className="courses-title">
            Programs Offered
          </h2>
        </div>

        {/* B.Tech grid */}
        <h3 className="course-group-title">
          B.Tech Programs (4 Years)
        </h3>
        <div className="btech-list">
          {coursesContent.btech.map((course) => (
            <div
              key={course.name}
              className="btech-card"
            >
              <div className="course-card-content">
                <BookOpen className="course-icon" />
                <div>
                  <h4 className="course-name">{course.name}</h4>
                  <div className="course-meta">
                    <span className="course-seats">
                      <Users className="seats-icon" /> {course.seats} seats
                    </span>
                    <span className="course-average">{course.avg}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* M.Tech & MBA */}
        <div className="advanced-courses">
          {/* M.Tech */}
          <div className="advanced-course-card">
            <div className="advanced-course-heading">
              <img src={images.tech2} alt="Tech" className="advanced-course-image" />
              <h3 className="advanced-course-title">M.Tech Programs</h3>
            </div>
            <div className="mtech-list">
              {coursesContent.mtech.map((course) => (
                <div key={course.name} className="mtech-row">
                  <span className="mtech-name">{course.name}</span>
                  <span className="mtech-seats">{course.seats} seats</span>
                </div>
              ))}
            </div>
          </div>

          {/* MBA */}
          <div className="advanced-course-card">
            <div className="advanced-course-heading">
              <img src={images.tech3} alt="MBA" className="advanced-course-image" />
              <h3 className="advanced-course-title">MBA Program</h3>
            </div>
            <p className="mba-name">{coursesContent.mba.name}</p>
            <div className="mba-meta">
              <span className="mba-seats">{coursesContent.mba.seats} seats</span>
              <span className="course-average">{coursesContent.mba.avg}</span>
            </div>
            <p className="mba-description">
              Specializations in Finance, Marketing, HR, and IT
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}