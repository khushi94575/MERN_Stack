import "./About.css";
import profileImg from "../../assets/profolio.jpg";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-left">
        <img src={profileImg} alt="Khushi Sharma" />
      </div>

      <div className="about-right">

        <span>ABOUT ME</span>

        <h2>Passionate Web Developer & DevOps Learner</h2>

        <p>
          Hi! I'm <strong>Khushi Sharma</strong>, a Full Stack Web Developer
          passionate about creating modern, responsive, and user-friendly web
          applications. I enjoy transforming ideas into interactive digital
          experiences using clean and efficient code.
        </p>

        <p>
          Alongside web development, I'm actively learning DevOps technologies
          like Docker, Linux, Git, GitHub, and Cloud Computing to build scalable
          and production-ready applications.
        </p>

        <div className="about-info">

          <div>
            <h3>20+</h3>
            <p>Projects Completed</p>
          </div>

          <div>
            <h3>10+</h3>
            <p>Technologies Learned</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Learning Passion</p>
          </div>

        </div>

        <button className="about-btn">
          Download CV
        </button>

      </div>

    </section>
  );
}

export default About;