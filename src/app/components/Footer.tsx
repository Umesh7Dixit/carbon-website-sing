import { Mail, Linkedin } from "lucide-react";
// import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#032B29] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Newsletter */}
        <div className="md:col-span-2">
          <p className="text-sm mb-4">
            Join our newsletter to get the latest on CarbonScan.ai and global sustainability news.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Email*"
              className="px-4 py-3 rounded-md bg-[#123533] text-white placeholder-gray-400 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#9BF047] text-black font-medium px-6 py-3 rounded-md hover:bg-[#8AE040] transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Platform */}
        <div>
          <h4 className="font-bold mb-3">PLATFORM</h4>
          <ul className="space-y-2 text-sm">
            <li>Corporate Carbon Footprint</li>
            <li>Product Carbon Footprint</li>
            <li>ESG Disclosure Reporting</li>
            <li>Carbon Capturing Units</li>
            <li>Carbon Credits</li>
            <li>Carbon Training</li>
            <li>Energy Audits</li>
            <li>Compliance</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-3">COMPANY</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Join as Team Member</li>
            <li>Join as Channel Partner</li>
          </ul>

          <h4 className="font-bold mt-6 mb-3">RESOURCES</h4>
          <ul className="space-y-2 text-sm">
            <li>Blogs</li>
            <li>Case Studies</li>
          </ul>
        </div>

        {/* Stay in Touch */}
        <div>
          <h4 className="font-bold mb-3">STAY IN TOUCH</h4>
          <div className="flex gap-4 mb-6">
            <Linkedin className="w-5 h-5 cursor-pointer hover:text-[#9BF047]" />
            <Mail className="w-5 h-5 cursor-pointer hover:text-[#9BF047]" />
          </div>
          <h4 className="font-bold mb-3">LOCATIONS</h4>
          <ul className="space-y-2 text-sm">
            <li>London 🇬🇧</li>
            <li>Singapore 🇸🇬</li>
            <li>Tokyo 🇯🇵</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-6">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-300 gap-4">
          {/* Logo */}
          <div className="text-xl font-bold">CarbonScan.ai</div>
          {/* Rights */}
          <div className="text-center md:text-right">
            © 2025 CarbonScan.ai. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="#">Privacy Policy</a>
            <span>|</span>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}















// "use client";

// import Image from "next/image";
// import Link from "next/link";
// // import { FaLinkedinIn, FaYoutube, FaInstagram } from "react-icons/fa";
// import { FaLinkedinIn} from "react-icons/fa";

// export default function Footer() {
//   const locations = [
//     { name: "Pune", img: "/pune.png" },
//     { name: "Bangalore", img: "/banglore.png" },
//     { name: "USA", img: "/usa.png" },
//   ];

//   return (
//     <footer className="bg-gradient-to-r from-[#0F2B14] to-[#0F2B14]/90 text-white py-10 px-8">
//       <div className="max-w-7xl mx-auto">
        
//         {/* Top Row: Logo + Social Icons */}
//         <div className="flex justify-between items-center mb-6">
//           {/* Logo */}
//           <div className="flex items-center gap-2">
//             <Image
//               // src="/newLogoWhite.png"
//               src="/newreput.png"
//               alt="RePut.ai"
//               width={120}
//               height={40}
//               className="object-contain"
//             />
            
//           </div>

//           {/* Social Media */}
//           <div className="flex gap-4 text-green-400 text-lg">
//             <Link href="https://www.linkedin.com/company/reput-ai"  aria-label="LinkedIn" className="hover:text-white">
//               <FaLinkedinIn />
//             </Link>
//             {/* <Link href="#" aria-label="YouTube" className="hover:text-white">
//               <FaYoutube />
//             </Link>
//             <Link href="#" aria-label="Instagram" className="hover:text-white">
//               <FaInstagram />
//             </Link> */}
//           </div>
//         </div>

//         {/* Horizontal Line */}
//         <hr className="border-gray-600 mb-6" />

//         {/* First Row */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Location */}
//           <div>
//             <h3 className="mb-4 font-semibold">Location</h3>
//             <div className="flex gap-4">
//               {locations.map((loc, index) => (
//                 <div key={index} className="flex flex-col items-center">
//                   <Image
//                     src={loc.img}
//                     alt={loc.name}
//                     width={120}
//                     height={100}
//                     className="rounded-md object-cover"
//                   />
//                   {/* <span className="mt-2 text-sm">{loc.name}</span> */}
//                 </div>
//               ))}
//             </div>
//           </div>

   
//         </div>

//         {/* Horizontal Line */}
//         {/* <hr className="border-gray-600 my-6" /> */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                  {/* Technologies 1 */}
//           <div>
//             <hr className="border-gray-600 my-6" />
//             <h3 className="mb-4 font-semibold">Features</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Supply chain mapping</li>
//               <li>Nth Tier Traceability</li>
//               <li>Magic Scan</li>
//               <li>Bulk Upload</li>
//               <li>ERP Integration</li>
//             </ul>
//           </div>

//           {/* Regulatory Solutions */}
//           <div className="ml-45 " >
//             <hr className="border-gray-600 my-6" />
//             <h3 className="mb-4 font-semibold">Regulatory Solutions</h3>
//             <ul className="space-y-2 text-sm">
//               <li>
//                 USA
//                 <ul className="ml-4 list-disc">
//                   <li>Federal Acquisition Regulation (FAR) – Supplier compliance</li>
//                   <li>Dodd-Frank Act – Conflict Minerals Rule</li>
//                 </ul>
//               </li>
//               <li>
//                 India
//                 <ul className="ml-4 list-disc">
//                   <li>Companies Act, 2013 – CSR & ESG compliance</li>
//                   <li>SEBI Business Responsibility and Sustainability Report (BRSR)</li>
//                 </ul>
//               </li>

//             </ul>
//           </div>

//           <div>
//             <ul className="space-y-2 text-sm">
//               <li className="text-[#0F2B14]">.</li>
//               <li className="text-[#0F2B14]">.</li>
//               <li className="text-[#0F2B14]">.</li>
//               <li>
//                 Europe
//                 <ul className="ml-4 list-disc">
//                   <li>EU Supply Chain Due Diligence Directive (CSDDD)</li>
//                   <li>EU Taxonomy Regulation</li>
//                 </ul>
//               </li>
//             </ul>
//           </div>

//           {/* Resources */}
//           {/* <div className="ml-25">
//             <hr className="border-gray-600 my-6" />
//             <h3 className="mb-4 font-semibold">Resources</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Blog</li>
//               <li>Customer Stories</li>
//               <li>Webinar / Videos / Podcasts</li>
//               <li>Ebooks</li>
//               <li>Events</li>
//             </ul>
//           </div> */}
//         </div>


//         {/* <hr className="border-gray-600 my-6" /> */}

//         {/* Second Row */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

//            {/* Empty */}
//           <div></div>

//            {/* Empty */}
//           <div></div>
//           {/* Technologies 2 */}
//           <div>
//             <hr className="border-gray-600 my-6 mr-20" />

//             <h3 className="mb-4 font-semibold">Technologies</h3>
//             <ul className="space-y-2 text-sm">
//               <li>Anomaly  Detection</li>
//               <li>Compliance Assurance</li>
//               <li>Risk Mapping</li>
//               <li>AI Based Insides</li>
//               <li>Prescriptive Analysis</li>
//               <li>Supply Chain Resilience</li>
//             </ul>
//           </div>

         

//           {/* Company */}
//           <div>
//             <hr className="border-gray-600 my-6" />

//             <h3 className="mb-4 font-semibold">Company</h3>
//             {/* <ul className="space-y-2 text-sm">
//               <li>Compliance</li>
//               <li id="platform">Platform</li>
//               <li>Industries</li>
//               <li>Why RePut</li>
//               <li>Company</li>
//               <li>Join US</li>
//             </ul> */}
//             <ul className="space-y-2 text-sm">
//     <li><a href="#" className="hover:text-green-400">Compliance</a></li>
//     <li><a href="#" className="hover:text-green-400">Platform</a></li>
//     <li><a href="#" className="hover:text-green-400">Industries</a></li>
//     <li><a href="#" className="hover:text-green-400">Why RePut</a></li>
//     <li><a href="#" className="hover:text-green-400">Company</a></li>
//     <li><a href="#" className="hover:text-green-400">Join Us</a></li>
//   </ul>
//           </div>
//         </div>

//         {/* Horizontal Line */}
//         <hr className="border-gray-600 my-6" />

//         {/* Footer bottom */}
//         <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
//           <p>© 2025 UPCYCLE REPUT TECH PVT LTD. All rights reserved.</p>
//           <div className="flex space-x-4 mt-2 md:mt-0">
//             <Link href="#">Privacy Policy</Link>
//             <Link href="#">Terms of Service</Link>
//             <Link href="#">Contact Us</Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }


 
