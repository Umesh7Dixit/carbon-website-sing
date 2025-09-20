// app/page.tsx

"use client";

import { motion } from "framer-motion";
import { CloudLightning, Receipt, Users, Eye, Settings, QrCode } from "lucide-react";

const features = [
  {
    title: "Maximize Capital Project Impact",
    description:
      "Track investment returns on capital projects with guided checklists and real-time energy issue tracking.",
    tag: "ROI Insights",
    icon: <CloudLightning className="w-6 h-6 text-green-500" />,
    tagColor: "bg-green-100 text-green-700",
  },
  {
    title: "Simplify Energy Bill Management",
    description:
      "Automate billings, service calculations, and EDI integrations across all facilities for better control and savings.",
    tag: "Billing Automation",
    icon: <Receipt className="w-6 h-6 text-yellow-500" />,
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Monitor Auditing Activities Live",
    description:
      "View field auditor location, task status, and availability to schedule audits with greater precision.",
    tag: "Team Monitoring",
    icon: <Eye className="w-6 h-6 text-pink-500" />,
    tagColor: "bg-pink-100 text-pink-700",
  },
  {
    title: "Empower Users with Energy Visibility",
    description:
      "Give consumers access to detailed energy usage stats to reduce payment disputes and increase accountability.",
    tag: "Customer Engagement",
    icon: <Users className="w-6 h-6 text-blue-500" />,
    tagColor: "bg-blue-100 text-blue-700",
  },
  {
    title: "Deploy Tailored Forms with Ease",
    description:
      "Convert your auditing templates into configurable mobile forms — fast and hassle-free.",
    tag: "Custom Workflows",
    icon: <Settings className="w-6 h-6 text-green-600" />,
    tagColor: "bg-green-100 text-green-700",
  },
  {
    title: "Digitize Data Collection Instantly",
    description:
      "Use QR codes to submit readings, capture annotated images, and send field reports back to your team in real time.",
    tag: "Mobile Scanning",
    icon: <QrCode className="w-6 h-6 text-orange-500" />,
    tagColor: "bg-orange-100 text-orange-700",
  },
];

export default function ROISection() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Optimize ROI, Streamline Operations, Empower Teams
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-3xl mx-auto"
        >
          Explore how our platform enhances efficiency, transparency, and
          decision-making across your entire energy management lifecycle.
        </motion.p>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div
                className={`inline-block px-3 py-1 text-sm rounded-full ${feature.tagColor}`}
              >
                {feature.tag}
              </div>
              <div className="mt-4 flex items-center space-x-3">
                {feature.icon}
                <h3 className="text-lg font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
