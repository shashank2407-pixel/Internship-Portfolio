function Contact() {

  function handleSubmit(event) {

    event.preventDefault();

    alert("Message submitted!");

  }

  return (
    <section className="contact-section" id="Contact">

      <h2>
        Get in Touch
      </h2>

      <form
        id="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label>
            Name
          </label>

          <input
            type="text"
            required
          />

        </div>

        <div className="form-group">

          <label>
            Email
          </label>

          <input
            type="email"
            required
          />

        </div>

        <div className="form-group">

          <label>
            Message
          </label>

          <textarea
            rows="5"
            required
          />

        </div>

        <button
          type="submit"
          id="submit"
        >
          Send Message
        </button>

      </form>

    </section>
  );
}

export default Contact;