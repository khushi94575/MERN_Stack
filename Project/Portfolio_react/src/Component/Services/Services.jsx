import "./Services.css";

function Services() {
  return (
    <section className="services" id="services">

      <div className="services-header">
        <span>WHAT I DO</span>
        <h2>Services</h2>
      </div>

      <div className="services-grid">

        <div className="service-card">
          <div className="icon-box">
            💻
          </div>

          <h3>UI/UX Design</h3>

          <p>
            From wireframes to polished Figma prototypes.
            Intuitive, visually compelling interfaces that
            convert visitors into users and put usability first.
          </p>
        </div>

        <div className="service-card active">
          <div className="icon-box">
            &lt;/&gt;
          </div>

          <h3>Frontend Dev</h3>

          <p>
            Production-grade code with React.
            Pixel-perfect, fully responsive and optimized
            for performance.
          </p>
        </div>

        <div className="service-card">
          <div className="icon-box">
            📊
          </div>

          <h3>Landing Pages</h3>

          <p>
            High-converting landing pages for startups,
            SaaS products and personal brands.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Services;