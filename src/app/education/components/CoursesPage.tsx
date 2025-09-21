"use client";

// import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContact } from "../../components/ContactContext"; 


export default function CoursesPage() {
  // const router = useRouter();

    const { scrollToContact } = useContact();
  

  const courses = [
    {
      id: 1,
      title: "GHG Accounting and BURSA compliance training",
      subtitle:
        "🌍 Understanding the Climate Emergency: Risks, Opportunities & Adaptation for Organisations",
      duration: "Half-day Course",
      icon: "🌍",
      description: `Gain a clear introduction to the climate emergency and its direct relevance to businesses and institutions. 
This session explores the latest climate science, emerging risks, and opportunities, while guiding organisations on how 
to prepare through adaptation strategies.

Participants will leave equipped to engage employees and decision-makers in constructive discussions around climate action and resilience.`,
      points: [
        "Understand climate science and business implications",
        "Identify risks and opportunities for your organization",
        "Develop practical adaptation strategies",
      ],
    },
    {
      id: 2,
      subtitle: "📊  Carbon Footprinting & GHG Reporting Essentials",
      duration: "One-day Course",
      icon: "📊",
      description: `This practical course introduces participants to the fundamentals of carbon footprinting and greenhouse gas 
(GHG) accounting in line with the GHG Protocol and SECR requirements. By the end of the session, learners will be able 
to identify, measure, and report organisational GHG emissions, and create a basic carbon footprint report aligned with 
regulatory standards.`,
    },
    {
      id: 3,
      subtitle: "♻️ Advanced Carbon Management: Scope 3 Reporting & Emission Reduction Strategies",
      duration: "Two-day Course",
      icon: "♻️",
      description: ` Building on the one-day foundation, this advanced programme focuses on complex Scope 3 categories and their 
implications for organisational carbon reporting. Learners will develop the skills to design and implement emission 
reduction strategies, set realistic targets, and integrate carbon management into wider sustainability and business planning.`,
    },
  ];

  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <div className="max-w-6xl mx-auto space-y-16">

        <Image
          src={"/logo2.png"}
          width={300}
          height={200}
          alt="logo2"/>


        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start border-b pb-10"
          >
            {/* Left Section */}
            <div>
              <h2 className="text-[36px] font-semibold text-[#1A3A3A] flex items-center gap-2 mt-1">
                       {course.title}
              </h2>
              <br/>
              <h3 className=" inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-2 text-white font-medium hover:bg-green-600 transition">
                {course.duration}
              </h3>
             {/* <span>{course.icon}</span> */}
             {course.subtitle && (
                <p className="mt-2 text-lg text-[30px] text-[#1A3A3A] font-semibold">
                  {course.subtitle}
                </p>
              )}
            </div>

            {/* Right Section */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="bg-gray-50 rounded-xl shadow p-6"
            >
              <p className="text-[#1A3A3A] whitespace-pre-line">
                {course.description}
              </p>

              {course.points && (
                <ul className="mt-4 space-y-2">
                  {course.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      ✅ <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <motion.button
                
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                // onClick={() => router.push(`/courses/${course.id}`)}
                onClick={scrollToContact}
                className="mt-6 inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-2 text-white font-medium hover:bg-green-600 transition"
              >
                Learn More →
              </motion.button>
            </motion.div>
          </motion.div>
        ))}
      </div>

            <div className=" w-full text-start px-35">
        {/* Heading */}
        <h2 className="text-2xl font-semibold text-gray-800 border-t border-gray-700 pt-6">
          Organisational Workshops
        </h2>

        {/* Button with Motion */}
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-10 py-3 rounded-full bg-green-900 text-white font-medium shadow-lg hover:bg-green-800 transition"
          onClick={() => alert("✅ Climate Reality Check Workshop Clicked!")}
        >
          Climate Reality Check
        </motion.button>
      </div>

    </div>
  );
}













// "use client";

// import { useRouter } from "next/navigation";

// export default function CoursesPage() {
//   const router = useRouter();

//   const courses = [
//     {
//       id: 1,
//       title: "GHG Accounting and BURSA compliance training",
//       subtitle:
//         "Understanding the Climate Emergency: Risks, Opportunities & Adaptation for Organisations",
//       duration: "Half-day Course",
//       icon: "🌍",
//       badgeColor: "bg-green-100 text-green-700",
//       description: `Gain a clear introduction to the climate emergency and its direct relevance to businesses and institutions. 
//       This session explores the latest climate science, emerging risks, and opportunities, while guiding organisations on how 
//       to prepare through adaptation strategies.

//       Participants will leave equipped to engage employees and decision-makers in constructive discussions around climate action and resilience.`,
//       points: [
//         "Understand climate science and business implications",
//         "Identify risks and opportunities for your organization",
//         "Develop practical adaptation strategies",
//       ],
//     },
//     {
//       id: 2,
//       title: "Carbon Footprinting & GHG Reporting Essentials",
//       duration: "One-day Course",
//       icon: "📊",
//       description: `This practical course introduces participants to the fundamentals of carbon footprinting and greenhouse gas 
//       (GHG) accounting in line with the GHG Protocol and SECR requirements. By the end of the session, learners will be able 
//       to identify, measure, and report organisational GHG emissions, and create a basic carbon footprint report aligned with 
//       regulatory standards.`,
//     },
//     {
//       id: 3,
//       title: "Advanced Carbon Management: Scope 3 Reporting & Emission Reduction Strategies",
//       duration: "Two-day Course",
//       icon: "♻️",
//       description: `Building on the one-day foundation, this advanced programme focuses on complex Scope 3 categories and their 
//       implications for organisational carbon reporting. Learners will develop the skills to design and implement emission 
//       reduction strategies, set realistic targets, and integrate carbon management into wider sustainability and business planning.`,
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-white px-6 py-12">
//       <div className="max-w-6xl mx-auto space-y-12">
//         {courses.map((course) => (
//           <div
//             key={course.id}
//             className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start border-b pb-10"
//           >
//             {/* Left Section */}
//             <div>
//               <h3 className="text-sm text-gray-500 font-medium">
//                 {course.duration}
//               </h3>
//               <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2 mt-1">
//                 <span>{course.icon}</span> {course.title}
//               </h2>
//               {course.subtitle && (
//                 <p className="mt-2 text-lg text-gray-700 font-medium">
//                   {course.subtitle}
//                 </p>
//               )}
//             </div>

//             {/* Right Section */}
//             <div className="bg-gray-50 rounded-xl shadow p-6">
//               <p className="text-gray-600 whitespace-pre-line">
//                 {course.description}
//               </p>

//               {course.points && (
//                 <ul className="mt-4 space-y-2">
//                   {course.points.map((point, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-start gap-2 text-gray-700"
//                     >
//                       ✅ <span>{point}</span>
//                     </li>
//                   ))}
//                 </ul>
//               )}

//               <button
//                 onClick={() => router.push(`/courses/${course.id}`)}
//                 className="mt-6 inline-flex items-center justify-center rounded-full bg-green-500 px-6 py-2 text-white font-medium hover:bg-green-600 transition"
//               >
//                 Learn More →
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
