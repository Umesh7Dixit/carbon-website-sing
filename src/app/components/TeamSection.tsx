// import Image from "next/image";

// type Person = {
//   name: string;
//   title: string;
//   subtitle: string;
//   image: string;
//   linkedin: string;
// };

// export default function TeamSection() {
//   const coreTeam: Person[] = [
//     {
//       name: "Anuj Bishnoi",
//       title: "Co-Founder and CEO",
//       subtitle: "Ex-Founder BigBasket Daily",
//       image: "/anuj.png",
//       linkedin: "#",
//     },
//     {
//       name: "Rohit Mahatma",
//       title: "Co-Founder and CTO",
//       subtitle: "Ex Co-Founder - Health Tech USA",
//       image: "/rohit.png",
//       linkedin: "#",
//     },
//     {
//       name: "Amit",
//       title: "Co-Founder and CSO",
//       subtitle: "Founder - Bio Energy Products",
//       image: "/amit.png",
//       linkedin: "#",
//     },
//     {
//       name: "Harshit Panday",
//       title: "CMO",
//       subtitle: "IIM Mumbai, Ex Vedanta",
//       image: "/harshit.png",
//       linkedin: "#",
//     },
//   ];

//   const advisors: Person[] = [
//     {
//       name: "Abhinay Choudhari",
//       title: "Advisor & Investor",
//       subtitle: "Co Founder - Laundrymate.in, BigBasket.com",
//       image: "/abhinay.png",
//       linkedin: "#",
//     },
//     {
//       name: "Jitendra Jagadev",
//       title: "Senior Advisor & Investor",
//       subtitle: "Founder & CEO – Nest Away & Hello World",
//       image: "/jitender.png",
//       linkedin: "#",
//     },
//     {
//       name: "Anand Tiwari",
//       title: "Advisor & Investor",
//       subtitle: "Senior Advisor at UNAIDS Switzerland",
//       image: "/anand.png",
//       linkedin: "#",
//     },
//     {
//       name: "Dr. Biju Jacob",
//       title: "Advisor & Investor",
//       subtitle: "Country Director at UN-AIDS (HIX)",
//       image: "/biju.png",
//       linkedin: "#",
//     },
//     {
//       name: "Vidya Sridharan",
//       title: "Advisor & Investor",
//       subtitle: "Co Founder – Tech Riskcovry and Nasscom Deep Tech Mentor",
//       image: "/vidhya.png",
//       linkedin: "#",
//     },
//   ];

//   const renderProfile = (person: Person, index: number) => (
//     <div key={index} className="flex flex-col items-center text-center">
//       <div className="relative w-24 h-24 mb-3">
//         <Image
//           src={person.image}
//           alt={person.name}
//           fill
//           className="rounded-full object-cover"
//         />
//         <a
//           href={person.linkedin}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md"
//         >
//           <Image
//             src="/icons/linkedin.svg"
//             alt="LinkedIn"
//             width={20}
//             height={20}
//           />
//         </a>
//       </div>
//       <h4 className="font-semibold">{person.name}</h4>
//       <p className="text-sm">{person.title}</p>
//       <p className="text-xs text-gray-500">{person.subtitle}</p>
//     </div>
//   );

//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
//           Strong background and proven track record
//         </h2>
//         <p className="text-sm text-gray-500 mb-12">
//           Extensive experience with a proven history of success
//         </p>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center mb-16">
//           {coreTeam.map(renderProfile)}
//         </div>

//         <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
//           Advisors and Early Backers
//         </h3>
//         <p className="text-sm text-gray-500 mb-12">
//           Extensive experience with a proven history of success
//         </p>

//         <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-center">
//           {advisors.map(renderProfile)}
//         </div>
//       </div>
//     </section>
//   );
// }









import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";

type Person = {
  name: string;
  title: string;
  subtitle: string;
  image: string;
  linkedin: string;
};

export default function TeamSection() {
  const coreTeam: Person[] = [
    {
      name: "Anuj Bishnoi",
      title: "Co-Founder and CEO",
      subtitle: "Ex-Founder BigBasket Daily",
      image: "/anuj.png",
      linkedin: "#",
    },
    {
      name: "Rohit Mahatma",
      title: "Co-Founder and CTO",
      subtitle: "Ex Co-Founder - Health Tech USA",
      image: "/rohit.png",
      linkedin: "#",
    },
    {
      name: "Amit",
      title: "Co-Founder and CSO",
      subtitle: "Founder - Bio Energy Products",
      image: "/amit.png",
      linkedin: "#",
    },
    {
      name: "Harshit Panday",
      title: "CMO",
      subtitle: "IIM Mumbai, Ex Vedanta",
      image: "/harshit.png",
      linkedin: "#",
    },
  ];

  const advisors: Person[] = [
    {
      name: "Abhinay Choudhari",
      title: "Advisor & Investor",
      subtitle: "Co Founder - Laundrymate.in, BigBasket.com",
      image: "/abhinay.png",
      linkedin: "#",
    },
    {
      name: "Jitendra Jagadev",
      title: "Senior Advisor & Investor",
      subtitle: "Founder & CEO – Nest Away & Hello World",
      image: "/jitender.png",
      linkedin: "#",
    },
    {
      name: "Anand Tiwari",
      title: "Advisor & Investor",
      subtitle: "Senior Advisor at UNAIDS Switzerland",
      image: "/anand.png",
      linkedin: "#",
    },
    {
      name: "Dr. Biju Jacob",
      title: "Advisor & Investor",
      subtitle: "Country Director at UN-AIDS (HIX)",
      image: "/biju.png",
      linkedin: "#",
    },
    {
      name: "Vidya Sridharan",
      title: "Advisor & Investor",
      subtitle: "Co Founder – Tech Riskcovry and Nasscom Deep Tech Mentor",
      image: "/vidhya.png",
      linkedin: "#",
    },
  ];

  const renderProfile = (person: Person, index: number) => (
    <div key={index} className="flex flex-col items-center text-center">
      <div className="relative w-24 h-24 mb-3">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="rounded-full object-cover"
        />
        <a
          href={person.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md text-blue-600"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
      <h4 className="font-semibold text-black">{person.name}</h4>
      <p className="text-sm text-black">{person.title}</p>
      <p className="text-xs text-gray-500">{person.subtitle}</p>
    </div>
  );

  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
          Strong background and proven track record
        </h2>
        <p className="text-sm text-gray-500 mb-12">
          Extensive experience with a proven history of success
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-center mb-16">
          {coreTeam.map(renderProfile)}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-2 text-gray-800">
          Advisors and Early Backers
        </h3>
        <p className="text-sm text-gray-500 mb-12">
          Extensive experience with a proven history of success
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 justify-center">
          {advisors.map(renderProfile)}
        </div>
      </div>
    </section>
  );
}
