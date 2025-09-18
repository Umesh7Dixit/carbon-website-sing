"use client";

import { useState } from "react";
import Link from "next/link";
import type { ChangeEvent, FormEvent } from "react";
import Illustration from "../../../public/card2.png";
import Image from "next/image";

export default function SupplierArticle() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    industry: "",
    region: ""
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white py-4 px-6 border-b">
        <div className="max-w-7xl mx-auto flex items-center space-x-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">3 mins</span>
          <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">News</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Article */}
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Supply Chain Traceability: Half of Companies Adopt New Tech</h1>

            {/* Illustration (Omitted to shorten code - keep your existing one if needed) */}
            {/* <div className="w-full h-64 bg-gray-200 mb-8 rounded-md flex items-center justify-center">
                
                  <Image
    src={Illustration}
    alt="Supply Chain Card"
    width={50} // or your desired width
    height={10} // or your desired height
    className="w-auto h- object-cover"
    priority
  /> */}
                {/* <Image src={Illustration} alt="Supply Chain Illustration" fill className="object-cover object-center" quality={100} priority/> */}
            {/* </div> */}

            <div className="w-[320px] mx-auto mb-8 rounded-xl overflow-hidden shadow-lg border border-gray-200">
  <Image
    src={Illustration}
    alt="Supply Chain Card"
    width={320}
    height={200}
    className="w-full h-auto object-cover"
    priority
  />
</div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Company digitisation investments are driven by SC visibility more than ever in 2023.</p>
              <p>Traceability solutions are among the top three most popular technologies among firms we studied, with 45% having deployed or are adopting them.</p>
              <p>Cloud-based software is leading technological adoption, with 52% of organisations using it.</p>
              <p>Advanced analytics (34%) helps firms use data for action.</p>
              <p>These findings demonstrate the rising relevance of digital solutions in SCM.</p>
              <p className="text-sm mt-4 text-gray-500">
                Source: <Link href="#" className="text-blue-600 hover:underline">deepak.com</Link>
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Fill in the form to download now!
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email ID"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />

                <input
                  type="text"
                  name="industry"
                  placeholder="What's your company's industry?"
                  value={formData.industry}
                  onChange={handleInputChange}
                  className="w-full px-4 text-black py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />

                <input
                  type="text"
                  name="region"
                  placeholder="In what region is your company headquartered?"
                  value={formData.region}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  required
                />

                <button
                  type="submit"
                  className="w-full bg-black text-white py-3 px-6 rounded-lg font-medium hover:bg-gray-800 transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
