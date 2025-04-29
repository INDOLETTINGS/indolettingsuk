import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

const ContactPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    description: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "termsAccepted") {
        newErrors[key] = "This field is required";
      }
    });
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms and conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    const serviceId = "service_4ev7yt9"; // Replace with your EmailJS Service ID
    const templateId = "template_ydr4un4"; // Replace with your EmailJS Template ID
    const publicKey = "_OwJbuG847jW-xzlV"; // Replace with your EmailJS Public Key
  
    const templateParams = {
      firstName: formData.firstName || "N/A",
      lastName: formData.lastName || "N/A",
      phone: formData.phone || "N/A",
      email: formData.email || "N/A",
      description: formData.description || "N/A",
    };
  
    console.log("Sending data:", templateParams); // Debugging
  
    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      console.log("Email sent successfully!", response);
      alert("Email sent successfully!");
  
      // Reset form after successful submission
      setFormData({ firstName: "", lastName: "", phone: "", email: "", description: "", termsAccepted: false });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Check console for details.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-20 px-4">
      {/* Navigation Bar */}
      <nav className="bg-[#352926] shadow-md p-6 flex justify-between items-center w-full fixed top-0 left-0 z-50">
        <Link to="/">
          <h1 className="text-xl font-bold text-[#e8d2cd]">Indo Lettings</h1>
        </Link>
        <button
          className="md:hidden text-xl text-white"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        <ul
          className={`md:flex space-x-6 absolute md:relative bg-white md:bg-transparent top-full left-0 w-full md:w-auto shadow-md md:shadow-none p-4 md:p-0 ${isMenuOpen ? "block" : "hidden"} md:flex`}
        >
          <li>
            <Link to="/" className="text-[#e8d2cd] hover:text-[#352926] hover:bg-[#e8d2cd] px-3 py-2 rounded block">Properties</Link>
          </li>
          <li>
            <Link to="/contact" className="text-[#e8d2cd] hover:text-[#352926] hover:bg-[#e8d2cd] px-3 py-2 rounded block">Contact</Link>
          </li>
          <li>
            <Link to="/about" className="text-[#e8d2cd] hover:text-[#352926] hover:bg-[#e8d2cd] px-3 py-2 rounded block">About</Link>
          </li>
        </ul>
        <button className="bg-[#e8d2cd] text-[#352926] px-4 py-2 rounded-lg shadow-md hover:bg-white transition">
          Call Us
        </button>
      </nav>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mt-16">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          {["firstName", "lastName", "phone", "email", "description"].map((field) => (
            <div key={field} className="mb-4">
              <label className="block text-gray-700 capitalize">{field.replace(/([A-Z])/g, " $1").trim()}</label>
              {field === "description" ? (
                <textarea
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#352926]"
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#352926]"
                />
              )}
              {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
            </div>
          ))}

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="mr-2"
            />
            <label className="text-gray-700">I agree to the Terms and Conditions of Indo Lettings</label>
          </div>
          {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

          <button
            type="submit"
            className={`w-full py-2 rounded-lg shadow-md transition ${formData.termsAccepted ? "bg-[#352926] text-white hover:bg-[#1f1a18]" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
            disabled={!formData.termsAccepted}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;