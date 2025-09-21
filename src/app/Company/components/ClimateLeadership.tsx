"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { useContact } from "../../components/ContactContext"; 


const team = [
  {
    name: "Shigeo Taniuichi",
    role: "Co-Founder & Chief Executive Officer",
    image: "/team1.jpg", // put in /public
    linkedin: "#",
  },
  {
    name: "Yuya Kuratomi",
    role: "Founder",
    image: "/team2.jpg",
    linkedin: "#",
  },
  {
    name: "Ben Richardson",
    role: "Co-Founder & Chief Sustainability Officer",
    image: "/team3.jpg",
    linkedin: "#",
  },
  {
    name: "George Wade",
    role: "Co-Founder & Chief Commercial Officer",
    image: "/team4.jpg",
    linkedin: "#",
  },
];

export default function ClimateLeadership(){
     const { scrollToContact } = useContact();
   
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Heading */}
        <p className="uppercase text-sm tracking-wider text-gray-500">Our Team</p>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
          Climate leadership
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          We&apos;re all passionate about climate, obsessed with our customers and building a product to last.
        </p>

        {/* Button */}
        <motion.a
          onClick={scrollToContact}
           
          className="inline-block cursor-pointer mt-6 px-6 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Come work with us
        </motion.a>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{member.name}</h3>

              {/* Role */}
              <p className="text-gray-600 text-sm">{member.role}</p>

              {/* LinkedIn */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-gray-400 hover:text-blue-600"
              >
                <FaLinkedin size={20} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

