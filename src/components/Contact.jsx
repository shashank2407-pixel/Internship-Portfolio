function Contact() {
  return (
    <section className="contact-section" id="Contact">

      <div className="contact-heading">

        <span>GET IN TOUCH</span>

        <h2>Let's Connect</h2>

        <p>
          Have a question, want to collaborate, or just want to say hello?
          Feel free to send me a message.
        </p>

      </div>

      <form
        id="contact-form"
        action="https://formspree.io/f/mppzanzy"
        method="POST"
      >

        <div className="form-group">

          <label htmlFor="name">
            Name
          </label>

          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />

        </div>

        <div className="form-group">

          <label htmlFor="email">
            Email
          </label>

          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />

        </div>

        <div className="form-group">

          <label htmlFor="message">
            Message
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Tell me what's on your mind..."
            required
          />

        </div>

        <button
          type="submit"
          id="submit"
        >
          Send Message ↗
        </button>

      </form>

    </section>
  );
}

export default Contact;