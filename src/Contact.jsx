import React from "react";

const Contact = () => {
  return (
    <section className="contact__section" id="Contact">
      <div>
        <p className="subtitle">Get in touch</p>
        <h2>Contact me</h2>
        <p className="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          molestias, asperiores saepe eveniet et amet!
        </p>
      </div>
      <form action="#" className="contact__form-container">
        <div className="container">
          <label htmlFor="firstName" className="contact__label">
            <span className="text-md">First name</span>
            <input
              type="text"
              className="contact__input text-md"
              name="firstName"
              id="firstName"
              required
              placeholder="First name.."
            />
          </label>
          <label htmlFor="lastName" className="contact__label">
            <span className="text-md">Last name</span>
            <input
              type="text"
              className="contact__input text-md"
              name="lastName"
              id="lastName"
              required
              placeholder="Last name.."
            />
          </label>
          <label htmlFor="email" className="contact__label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact__input text-md"
              name="email"
              id="email"
              required
              placeholder="Email.."
            />
          </label>
          <label htmlFor="phoneNumber" className="contact__label">
            <span className="text-md">Phone number</span>
            <input
              type="number"
              className="contact__input text-md"
              name="phoneNumber"
              id="phoneNumber"
              required
              placeholder="Phone number.."
            />
          </label>
        </div>
        <label htmlFor="chooseTopic" className="contact__label">
          <span className="text-md">Choose a Topic</span>
          <select className="contact__input text-md" id="chooseTopic">
            <option disabled>Select one</option>
            <option>Item one</option>
            <option>Item two</option>
            <option>Item three</option>
            <option>Item four</option>
          </select>
        </label>
        <label htmlFor="message" className="contact__label">
          <span className="text-md">Message</span>
          <textarea
            className="contact__input text-md"
            rows={"8"}
            id="message"
            placeholder="Your Message.."
          />
        </label>
        <label htmlFor="checkbox" className="checkbox__label">
          <input type="checkbox" id="checkbox" required name="checkbox" />
          <span className="text-sm">I accept terms and conditions.</span>
        </label>
        <div>
          <button className="btn btn-primary contact__form-btn">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
