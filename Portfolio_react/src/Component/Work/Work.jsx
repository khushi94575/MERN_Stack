import "./Work.css";
import Profolio from "../../assets/profolio.jpg";

function Work() {
  return (
    <section className="work" id="work">
      <div className="work-header">
        <h3>MY WORK</h3>

        <div className="heading-row">
          <h2>Selected Work</h2>
          <a href="/">All Projects →</a>
        </div>
      </div>

      <div className="work-grid">

      
        <div className="card large">
          <img src={Profolio} alt="Portfolio Project" />

          <div className="content">
            <div className="tags">
              <span>React</span>
              <span>Portfolio</span>
              <span>CSS</span>
            </div>

            <h3>Personal Portfolio</h3>

            <p>
              A modern and fully responsive portfolio website built using
              React, showcasing my skills, projects, and contact information.
            </p>

            <a href="/">View Project →</a>
          </div>
        </div>

     
        <div className="right-column">

          <div className="card">
            <img src={Profolio} alt="QR Generator Project" />

            <div className="content">
              <div className="tags">
                <span>JavaScript</span>
                <span>QR Code</span>
              </div>

              <h3>QR Code Generator</h3>

              <p>
                A smart QR Code Generator supporting text, URLs, Wi-Fi,
                email, phone numbers, and more.
              </p>

              <a href="/">View Project →</a>
            </div>
          </div>

          <div className="card">
            <img src={Profolio} alt="Expense Tracker Project" />

            <div className="content">
              <div className="tags">
                <span>React</span>
                <span>Dashboard</span>
              </div>

              <h3>Expense Tracker</h3>

              <p>
                A responsive expense tracking application with charts,
                categories, monthly reports, and CSV export.
              </p>

              <a href="/">View Project →</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Work;