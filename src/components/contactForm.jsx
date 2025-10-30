import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      name: e.target.fullname.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      phone: e.target.phone.value,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(
        "https://www.privyr.com/api/v1/incoming-leads/0vZfjMQw/HnoUja6J#generic-webhook",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setStatus("✅ Thank you! Your details have been submitted successfully.");
        e.target.reset();
      } else {
        setStatus("❌ Submission failed. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("⚠️ Network error. Please try again.");
    }
  };

  return (
    <Form className="w-100" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="fullname"
          placeholder="Full Name"
          required
          className="border-0 rounded-3 py-2"
          style={{ backgroundColor: "#ffffff", color: "#000" }}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="email"
          name="email"
          placeholder="Email Address"
          required
          className="border-0 rounded-3 py-2"
          style={{ backgroundColor: "#ffffff", color: "#000" }}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="text"
          name="subject"
          placeholder="Subject"
          className="border-0 rounded-3 py-2"
          style={{ backgroundColor: "#ffffff", color: "#000" }}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          name="phone"
          placeholder="+91"
          className="border-0 rounded-3 py-2"
          style={{ backgroundColor: "#ffffff", color: "#000" }}
        />
      </Form.Group>

      <Form.Group className="mb-4">
        <Form.Control
          as="textarea"
          name="message"
          rows={3}
          placeholder="Your Message"
          className="border-0 rounded-3"
          style={{ backgroundColor: "#ffffff", color: "#000" }}
        />
      </Form.Group>

      <div className="text-center">
        <Button
          variant="light"
          type="submit"
          className="fw-semibold px-4 py-2 rounded-pill shadow-sm text-primary"
        >
          Send Message
        </Button>
      </div>

      {status && (
        <p className="text-center mt-3 fw-semibold" style={{ color: "#fff" }}>
          {status}
        </p>
      )}
    </Form>
  );
};

export default ContactForm;
