import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-left">
        <span>CONTACT</span>
        <h2>Let's Work Together</h2>
        <p>
          Have a project in mind or just want to say hello?
          Feel free to contact me. I'm always open to discussing
          new opportunities and exciting ideas.
        </p>
        <div className="contact-info">
          <p>
            <strong>Email:</strong><br />
            khushi@example.com
          </p>
          <p>
            <strong>Phone:</strong><br />
            +91 98765 43210
          </p>

          <p>
            <strong>Location:</strong><br />
            Rajasthan, India
          </p>

        </div>
      </div>

      <div className="contact-right">

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}

export default Contact;