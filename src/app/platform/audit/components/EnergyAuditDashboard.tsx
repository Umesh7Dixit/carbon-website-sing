// app/page.tsx

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function EnergyAuditScreen() {
  return (
    <div className="relative min-h-screen py-20 flex items-center justify-center bg-gray-100 p-4">
      {/* Background Dashboard Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-5xl"
      >
        <Image
          src="/dash.png" // place your dashboard image here
          alt="Energy Audit Dashboard"
          width={1200}
          height={800}
          className="  w-full h-auto"
          priority
        />

        {/* Floating Phone Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="absolute right-6 bottom-6 w-48 sm:w-60 md:w-72"
        >
          <Image
            src="/phonedash.png" // place your phone image here
            alt="Phone Mockup"
            width={300}
            height={600}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}















// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// export default function EnergyAuditDashboard() {
//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-6">
//       <div className="relative w-full max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden p-6">
//         {/* Dashboard */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="grid grid-cols-1 lg:grid-cols-3 gap-6"
//         >
//           {/* Left side - dashboard content */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Top bar */}
//             <div className="flex flex-wrap gap-2 items-center justify-between border-b pb-3">
//               <h2 className="text-lg font-semibold text-gray-700">
//                 Energy Audit Dashboard
//               </h2>
//               <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
//                 Save
//               </button>
//             </div>

//             {/* Chart + Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
//                 <h3 className="font-semibold mb-2 text-gray-700">
//                   Watts Consumption per Site
//                 </h3>
//                 <div className="h-40 flex items-end justify-around">
//                   {["A", "B", "C", "D", "E"].map((site, i) => (
//                     <motion.div
//                       key={site}
//                       initial={{ height: 0 }}
//                       animate={{ height: `${40 + i * 15}%` }}
//                       transition={{ delay: i * 0.2 }}
//                       className="w-8 bg-green-400 rounded"
//                     />
//                   ))}
//                 </div>
//               </div>
//               <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
//                 <h3 className="font-semibold mb-2 text-gray-700">
//                   Energy Intensity
//                 </h3>
//                 <p className="text-gray-500">Chart placeholder...</p>
//               </div>
//             </div>

//             {/* Reports & Appliances */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
//                 <h3 className="font-semibold mb-2 text-gray-700">
//                   Audit Reports Submitted per Month
//                 </h3>
//                 <p className="text-gray-500">Chart placeholder...</p>
//               </div>
//               <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
//                 <h3 className="font-semibold mb-2 text-gray-700">
//                   Audit Status
//                 </h3>
//                 <ul className="text-gray-600 space-y-1">
//                   <li>✅ Active</li>
//                   <li>⏸ In Progress</li>
//                   <li>❌ Inactive</li>
//                 </ul>
//               </div>
//             </div>

//             {/* Active Appliances & CO2 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
//                 <h3 className="font-semibold mb-2 text-gray-700">
//                   Active Appliances
//                 </h3>
//                 <table className="w-full text-sm text-gray-600">
//                   <thead>
//                     <tr className="text-left text-gray-500">
//                       <th>Appliance</th>
//                       <th>Date</th>
//                       <th>Energy</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>HVAC System</td>
//                       <td>2024-01-15</td>
//                       <td>245 kWh</td>
//                     </tr>
//                     <tr>
//                       <td>EV Charger</td>
//                       <td>2024-01-14</td>
//                       <td>89 kWh</td>
//                     </tr>
//                     <tr>
//                       <td>Lighting System</td>
//                       <td>2024-01-13</td>
//                       <td>67 kWh</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//               <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
//                 <h3 className="font-semibold mb-2 text-gray-700">
//                   CO₂ Emissions / Energy
//                 </h3>
//                 <div className="space-y-2">
//                   <div>
//                     <p className="text-sm text-gray-500">Fact: 244kg</p>
//                     <div className="w-full bg-gray-200 rounded h-3">
//                       <div className="h-3 bg-green-500 rounded w-2/3"></div>
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Electric Power</p>
//                     <div className="w-full bg-gray-200 rounded h-3">
//                       <div className="h-3 bg-green-500 rounded w-1/2"></div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Right side - floating phone mockup */}
//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="flex items-center justify-center"
//           >
//             <Image
//               src="/phone-mock.png" // Put your uploaded phone image into /public
//               alt="Phone UI"
//               width={280}
//               height={560}
//               className="rounded-2xl shadow-lg"
//             />
//           </motion.div>
//         </motion.div>
//       </div>
//     </div>
//   );
// }
