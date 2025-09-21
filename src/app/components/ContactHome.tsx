"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactHome() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields");
      return;
    }
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10 bg-white">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Side - Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#1A3A3A]">Get In Touch</h2>
          <p className="mt-3 text-gray-600">
            We&apos;re here to help you elevate your business. Reach out to us for
            expert guidance, tailored solutions, or any questions you may have.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#1A3A3A]">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A3A3A]">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g johndoe@gmail.com"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1A3A3A]">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Tell us about your project or inquiry..."
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-600 focus:ring-green-600"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-green-900 text-white py-2 font-medium hover:bg-green-800 transition"
            >
              Submit
            </button>
          </form>

          {submitted && (
            <p className="mt-4 text-green-700 font-medium">
              ✅ Thank you! Your message has been submitted.
            </p>
          )}
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center items-center">
          <Image
            width={600}
            height={600}
            src="/hand.png" // 👉 save your uploaded image in public/ as contact-image.png
            alt="Contact"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
