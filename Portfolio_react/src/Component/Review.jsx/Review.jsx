import "./Review.css";

function Review() {
  return (
    <section className="review" id="review">

      <div className="review-header">
        <span>TESTIMONIALS</span>
        <h2>What People Say</h2>
      </div>

      <div className="review-grid">

        <div className="review-card">
          <p>
            "Khushi is a dedicated developer who always delivers clean,
            responsive, and high-quality work. Her attention to detail is
            impressive."
          </p>

          <h3>Rahul Verma</h3>
          <span>Frontend Developer</span>
        </div>

        <div className="review-card active">
          <p>
            "Working with Khushi was a great experience. She understands
            requirements quickly and creates beautiful user interfaces."
          </p>

          <h3>Priya Sharma</h3>
          <span>UI/UX Designer</span>
        </div>

        <div className="review-card">
          <p>
            "Excellent communication skills and strong problem-solving ability.
            Highly recommended for web development projects."
          </p>

          <h3>Aman Gupta</h3>
          <span>Software Engineer</span>
        </div>

      </div>

    </section>
  );
}

export default Review;