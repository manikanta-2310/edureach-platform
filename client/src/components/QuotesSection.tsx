import { useState, useEffect } from "react";
import { quotesContent } from "../data/content";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import "./SiteStyles.css";

export default function QuotesSection() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  // Auto-rotate every 5 seconds with fade effect
  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % quotesContent.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent(index);
      setFade(true);
    }, 300);
  };

  const prev = () => goTo((current - 1 + quotesContent.length) % quotesContent.length);
  const next = () => goTo((current + 1) % quotesContent.length);

  return (
    <section className="quotes-section">
      <div className="site-container">
        <Quote className="quote-mark" />

        <div className="quote-wrap">
          {/* Prev arrow */}
          <button onClick={prev} className="quote-control quote-control--prev">
            <ChevronLeft size={24} />
          </button>

          {/* Quote - fades in/out */}
          <div
            className="quote-content"
            style={{ opacity: fade ? 1 : 0 }}
          >
            <p className="quote-text">
              &ldquo;{quotesContent[current].text}&rdquo;
            </p>
            <p className="quote-author">&mdash; {quotesContent[current].author}</p>
          </div>

          {/* Next arrow */}
          <button onClick={next} className="quote-control quote-control--next">
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots */}
        <div className="quote-dots">
          {quotesContent.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`quote-dot ${i === current ? "quote-dot--active" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}