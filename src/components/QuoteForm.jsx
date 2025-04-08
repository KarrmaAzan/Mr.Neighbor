import  { useState } from "react";
import emailjs from "emailjs-com";
import "../css/quoteForm.css";

const QuoteForm = ({ prefilledService }) => {
  const [isSending, setIsSending] = useState(false);
  const services = ["Landscaping", "Handyman", "Tree Trimming"];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",  // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID",  // Replace with your EmailJS template ID
        e.target,  // Pass the form directly
        "YOUR_USER_ID"  // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS:", response);
          alert("Email sent successfully!");
          setIsSending(false);
        },
        (error) => {
          console.error("ERROR:", error);
          alert("Failed to send email. Please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="quote-form-container">
      <h2 className="form-heading">Get Your Quote</h2>
      <form onSubmit={handleSubmit} className="quote-form" encType="multipart/form-data">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Service:
          {prefilledService ? (
            <input type="text" name="service" value={prefilledService} readOnly />
          ) : (
            <select name="service" required>
              <option value="">Select a service</option>
              {services.map((service, index) => (
                <option key={index} value={service}>
                  {service}
                </option>
              ))}
            </select>
          )}
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <label>
          Attach File (Images/Videos):
          <input type="file" name="file" accept="image/*,video/*" />
        </label>
        <button type="submit" className="submit-button" disabled={isSending}>
          {isSending ? "Sending..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default QuoteForm;
