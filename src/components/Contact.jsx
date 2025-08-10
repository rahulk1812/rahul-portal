import React, { useState } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [result, setResult] = useState("");

  // Load sound files
  const successSound = new Audio("/assets/contact/success.mp3");
  const errorSound = new Audio("/assets/contact/error.mp3");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "41f45748-ccd1-4955-a6b4-29ce854b05fc");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        successSound.play(); // ✅ play success sound
        setResult("✅ Message sent successfully!");
        event.target.reset(); // Clear the form
      } else {
        errorSound.play(); // ❌ play error sound
        setResult("❌ Something went wrong. Please try again.");
        console.error("Web3Forms error:", data);
      }
    } catch (error) {
      errorSound.play(); // ❌ play error sound
      setResult("❌ Network error. Please try again later.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="container contact" id="contact">
      <h1>Get in Touch</h1>
      <p>
        Have a question or want to work together? Fill out the form below and I’ll get back to you.
      </p>

      <div className="contact-wrapper">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="form-group">
            <textarea
              name="message"
              placeholder="Enter message"
              rows="5"
              required
            ></textarea>
          </div>

          <button type="submit">SEND</button>
          <span className="form-result">{result}</span>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <p><FaMapMarkerAlt /> Ranchi, Jharkhand, India</p>
          <p><FaPhoneAlt /> +91 6200658692</p>
          <p><SiGmail /> rahulkumar835217@gmail.com</p>
        </div>
      </div>

      {/* Social Icons */}
      <div className="contact-icon">
        <a href="https://www.linkedin.com/in/rahul-k-dev1" target="_blank" rel="noopener noreferrer">
          <CiLinkedin className="icons" />
        </a>
        <a href="https://x.com/RahulKrtwr" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="icons" />
        </a>
        <a href="https://github.com/rahulk1812" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className="icons" />
        </a>
        <a href="mailto:rahulkumar835217@gmail.com" target="_blank" rel="noopener noreferrer">
          <SiGmail className="icons" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
