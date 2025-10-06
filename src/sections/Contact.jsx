import { useState } from "react";
// Remove: import emailjs from "@emailjs/browser"; // We are no longer using Email.js
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

// 🔥🔥🔥 CORRECTION 1: Get Web3Forms Key from .env 🔥🔥🔥
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Add a check for the key
    if (!ACCESS_KEY) {
        setIsLoading(false);
        showAlertMessage("danger", "Form setup error: Access Key is missing.");
        return;
    }

    try {
      // 🔥🔥🔥 CORRECTION 2: Use native fetch for Web3Forms 🔥🔥🔥
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY, // Pass your secret key
          name: formData.name,
          email: formData.email,
          message: formData.message,
          // You can add 'from_name' or other custom fields here
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
        showAlertMessage("success", "Your message has been sent successfully!");
      } else {
        // Handle API errors (e.g., failed validation, bad key)
        showAlertMessage("danger", data.message || "Something went wrong!");
        console.error("Web3Forms Error:", data);
      }

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error("Network or Fetch Error:", error);
      showAlertMessage("danger", "Network error. Please try again.");
    }
  };

  return (
    <section className="relative flex items-center c-space section-spacing" id="contact">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new website, improve your existing
            platform, or bring a unique project to life, I'm here to help.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Reet"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="reet@email.com"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              autoComplete="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            {!isLoading ? "Send" : "Sending..."}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;