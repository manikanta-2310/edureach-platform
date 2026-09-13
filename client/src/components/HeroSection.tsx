import { images, siteConfig } from "../data/content";
import "./SiteStyles.css";

export default function HeroSection() {
  return (
    <section id="hero" className="hero">
      <img src={images.hero} alt="EduReach Campus" className="hero-image" />
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <p className="hero-kicker">
            {siteConfig.established} · Hyderabad, Telangana
          </p>
          <h1 className="hero-title">
            Welcome to <br />
            <span className="hero-title-accent">{siteConfig.name} College</span>
          </h1>
          <p className="hero-description">
            {siteConfig.tagline}. Premier engineering institution with 92% placement rate
            and partnerships with Google, Microsoft & Amazon.
          </p>
          <a href="#courses"
            className="hero-button">
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}