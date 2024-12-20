"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate API submission
    try {
      setStatus("Sending...");
      console.log("Sending data:", formData);

      // Here, you can make a POST request to your backend
      // Example:
      // const res = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });

      // For now, simulate success
      setTimeout(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }, 2000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md p-8 w-full md:w-2/3 lg:w-1/2 flex flex-col gap-6"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800">Contact Us</h1>
        <p className="text-center text-gray-500">
          Feel free to reach out to us! We’d love to hear from you.
        </p>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Your Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 border rounded-md outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Your Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 border rounded-md outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold">Your Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 border rounded-md outline-none focus:ring focus:ring-blue-300"
            placeholder="Enter your message"
            rows={5}
            required
          />
        </div>
        {status && <p className="text-center text-gray-500">{status}</p>}
        <button
          type="submit"
          className="p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
