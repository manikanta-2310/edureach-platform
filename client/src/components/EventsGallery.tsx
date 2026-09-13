import { eventsGallery } from "../data/content";
import "./EventsGallery.css";

const EventsGallery = () => (
  <section className="events-section">
    <div className="events-container">
      <div className="events-heading">
        <p className="events-eyebrow">Life at EduReach</p>
        <h2 className="events-title">Events & Highlights</h2>
      </div>
      <div className="events-list">
        {eventsGallery.map((item: { title: string; image: string }) => (
          <div key={item.title} className="event-item">
            <img src={item.image} alt={item.title} className="event-image" />
            <div className="event-overlay">
              <p className="event-title">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EventsGallery;