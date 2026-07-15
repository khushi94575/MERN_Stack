import "./Hero.css";
import profileImg from "../../assets/profolio.jpg";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <p className="hero-greeting">Hello, I'm</p>

        <h1 className="hero-name">Khushi Sharma</h1>

        <p className="hero-description">
          I'm a Full Stack Web Developer and aspiring DevOps Engineer who enjoys building responsive web applications and exploring cloud technologies.
          I love creating clean, modern, and user-friendly digital experiences.
        </p>

        <div className="hero-buttons">
          <button className="btn-1">View My Work</button>

          <button className="btn-2">Get In Touch</button>
        </div>
      </div>

      <div className="hero-right">
        <img src={profileImg} alt="Kartik Sharma" />
      </div>
    </section>
  );
}

export default Hero;