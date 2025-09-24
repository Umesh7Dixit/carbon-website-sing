 

"use client";

import Link from "next/link";
import { useContact } from "./ContactContext";
import Image from "next/image";
import { SetStateAction, useState } from "react";
import { usePathname } from "next/navigation";


const navItems = [
  { label: "Platform", hasDropdown: true },
  { label: "Regulations", href: "/Regulations" },
  { label: "Why us", href: "/whyus" },
  { label: "Resources", hasDropdown: true },
  { label: "Company",  href: "/Company" },
  { label: "Education",  href: "/education" },
];

const industriesItems = [
  { label: "Textile", image: "/ti.png" },
  { label: "Food", image: "/foodi.png" },
];

const platformItems = [
  { label: "Audit", href: "/platform/audit", image: "/chain.png" },
  { label: "ESG & Carbon Reporting", href: "/platform/esg&carbonreporting", image: "/chain.png" },
  { label: "Compliance", href: "/platform/compliance", image: "/chain.png" },
  { label: "LCA", href: "/platform/lca", image: "/chain.png" },
  { label: "Corporate Carbon FootPrint", href: "/platform/corporateCarbon", image: "/chain.png" },
  { label: "Carbon Credit", href: "/platform/carbonCredit", image: "/chain.png" },
  { label: "Carbon Capturing Unit", href: "/platform/carboncapturingunit", image: "/chain.png" },
];

const complianceItems = [
  {label: "CBAM-Carbon Border Adjustment Mechanism" , href: "/compliance/cbam" ,  image: "/cbam_icon.png" },
  {label: "BRSR-Business Responsibility and Sustainability Reporting" , href: "/compliance/brsr" , image: "/brsr_icon.png" },
  {label: "EUDR-European Union Deforestation Regulation" , href: "/compliance/eudr" , image: "/eudr_icon.png" }
]

const RegulationsItems = [
  {label:"Regulations"  ,href:"/Regulations", image:"/chain.png"},
]

const resourcesItems = [
  {label:"News letter" , href:"/resources/newsletter",image:"/news.png"},
  {label:"Blogs" , href:"/resources/blogs",image:"/e.png"},
]

export default function Navbar() {
  const { scrollToContact } = useContact();
  const [activeDropdown, setActiveDropdown] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState("");
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveMobileDropdown(""); // Close any open mobile dropdowns
  };

  const toggleMobileDropdown = (label: SetStateAction<string>) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? "" : label);
  };

  // Function to check if a nav item is active
  const isActiveNavItem = (item:any) => {
    if (item.href) {
      return pathname === item.href;
    }
    
    // For dropdown items, check if current path matches any of their children
    if (item.label === "Platform") {
      return platformItems.some(platform => pathname === platform.href);
    }
    
    if (item.label === "Compliance") {
      return complianceItems.some(compliance => pathname === compliance.href);
    }
    
    if (item.label === "Industries") {
      return industriesItems.some(industry => 
        pathname === `/industries/${industry.label.toLowerCase()}`
      );
    }
    if (item.label === "Regulations") {
      return RegulationsItems.some(Regulations => 
        pathname === `/Regulations/${Regulations.label.toLowerCase()}`
      );
    }
    
    // if (item.label === "Regulations") {
    //   return RegulationsItems.some(RegulationsItems => pathname === RegulationsItems.href);
    // }
    
    if (item.label === "Resources") {
      return resourcesItems.some(resource => pathname === resource.href);
    }
    
    return false;
  };

  return (
    <header className="bg-[#1A3A3A] shadow-sm relative">
      <nav className="max-w-[1600px] mx-auto flex justify-between items-center lg:pl-40 px-4 sm:px-6 lg:px-8 py-4 lg:py-5 text-[#fffffff]">
        
        {/* Logo */}
        <Link href="/" prefetch>
          <Image 
            // src="/logoScan.png" 
            src="/logoanother.png" 
            alt="CarbonScan.ai" 
            width={120} 
            height={50}
            className="sm:w-[216px] sm:h-[85px] absolute left-[89px] bottom-[1px] ml-7"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden ml-11 lg:flex gap-5 text-[#ffffff] font-medium">
          {navItems.map((item) => {
            const isActive = isActiveNavItem(item);
            
            return (
              <div 
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown("")}
              >
                {item.hasDropdown ? (
                  <div className="relative">
                    <span  
                      className={`cursor-pointer py-2 px-1 transition-colors relative ${
                      isActive 
                        ? 'text-white' 
                        : 'text-white hover:text-white'
                    }`}>
                      {item.label}
                    </span>
                    {/* Active indicator for dropdown items */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1A3A3A] rounded-full"></div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.href!} 
                    prefetch={true} 
                    className={`py-2 px-1 transition-colors relative ${
                      isActive 
                        ? 'text-[#fffffff]' 
                        : 'text-white hover:text-white'
                    }`}
                  >
                    {item.label}
                    {/* Active indicator for regular links */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#6EED88] rounded-full"></div>
                    )}
                  </Link>
                )}

                {/* Desktop Dropdowns */}
                {activeDropdown === item.label && item.hasDropdown && (
                  <div className="absolute top-full left-0 mt-1 bg-[#1A3A3A] rounded-lg shadow-lg p-6 z-50">
                    
                    {/* Industries Dropdown */}
                    {item.label === "Industries" && (
                      <div className="flex flex-col gap-3 w-64 text-[#ffffff]">
                        {industriesItems.map(industry => {
                          const industryHref = `/industries/${industry.label.toLowerCase()}`;
                          const isIndustryActive = pathname === industryHref;
                          
                          return (
                            <Link 
                              key={industry.label} 
                              href={industryHref} 
                              prefetch={true} 
                              className={`flex items-center gap-2 p-2 rounded text-sm transition-colors ${
                                isIndustryActive 
                                  ? 'bg-[#1A3A3A] text-[#29442C] font-semibold' 
                                  : 'hover:bg-[#E4FFE9]'
                              }`}
                            >
                              <Image 
                                src={industry.image} 
                                alt={industry.label} 
                                width={24} 
                                height={24} 
                                className="rounded"
                              />
                              {industry.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}

                    {/* Platform Dropdown */}
                    {item.label === "Platform" && (
                      <div className="flex flex-col gap-3 w-60">
                        {platformItems.map(platform => {
                          const isPlatformActive = pathname === platform.href;
                          
                          return (
                            <Link 
                              key={platform.label} 
                              href={platform.href}
                              prefetch={true} 
                              className={`flex items-center gap-2 p-3 rounded-lg text-sm transition-colors ${
                                isPlatformActive 
                                  ? 'bg-[#1A3A3A] text-[#ffff] font-medium' 
                                  : 'text-[#ffff] hover:bg-[#1A3A3A]'
                              }`}
                            >
                              <Image 
                                src={platform.image} 
                                alt={platform.label} 
                                width={28} 
                                height={28} 
                                className="rounded"
                              />
                              {platform.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}



                    {/* RegulationsItems Dropdown */}
                    {/* {item.label === "Regulations" && (
                      <div className="flex flex-col gap-3 w-60">
                        {RegulationsItems.map(Regulations => {
                          const isPlatformActive = pathname === Regulations.href;
                          
                          return (
                            <Link 
                              key={Regulations.label} 
                              href={Regulations.href}
                              prefetch={true} 
                              className={`flex items-center gap-2 p-3 rounded-lg text-sm transition-colors ${
                                isPlatformActive 
                                  ? 'bg-[#1A3A3A] text-[#ffff] font-semibold' 
                                  : 'text-[#ffff] hover:bg-[#1A3A3A]'
                              }`}
                            >
                              <Image 
                                src={Regulations.image} 
                                alt={Regulations.label} 
                                width={28} 
                                height={28} 
                                className="rounded"
                              />
                              {Regulations.label}
                            </Link>
                          );
                        })}
                      </div>
                    )} */}










                    {/* Compliance Dropdown */}
                    {item.label === "Compliance" && (
                      <div className="flex flex-col gap-3 w-96">
                        {complianceItems.map(compliance => {
                          const isComplianceActive = pathname === compliance.href;
                          
                          return (
                            <Link 
                              key={compliance.label} 
                              href={compliance.href}
                              prefetch={true} 
                              className={`flex items-center gap-2 p-3 rounded-lg text-sm transition-colors ${
                                isComplianceActive 
                                  ? 'bg-[#1A3A3A] text-[#ffffff] font-medium' 
                                  : 'text-[#ffffff] hover:bg-[#1A3A3A]'
                              }`}
                            >
                              <Image 
                                src={compliance.image} 
                                alt={compliance.label} 
                                width={38} 
                                height={28} 
                                className="rounded"
                              />
                              {compliance.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}

                    {/* Why Reput */}
                    {item.label === "Why RePut" && (
                      <div className="flex flex-col gap-3 w-60">
                        {RegulationsItems.map(Regulations => {
                          const isWhyReputActive = pathname === Regulations.href;
                          
                          return (
                            <Link 
                              key={Regulations.label} 
                              href={Regulations.href}
                              prefetch={true} 
                              className={`flex items-center gap-2 p-3 rounded-lg text-sm transition-colors ${
                                isWhyReputActive 
                                  ? 'bg-[#1A3A3A] text-[#ffffff] font-medium' 
                                  : 'text-[#ffffff] hover:bg-[#1A3A3A]'
                              }`}
                            >
                              <Image 
                                src={Regulations.image} 
                                alt={Regulations.label} 
                                width={38} 
                                height={28} 
                                className="rounded"
                              />
                              {Regulations.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}

                    {/* Resources */}
                    {item.label === "Resources" && (
                      <div className="flex flex-col gap-3 w-60">
                        {resourcesItems.map(resources => {
                          const isResourceActive = pathname === resources.href;
                          
                          return (
                            <Link 
                              key={resources.label} 
                              href={resources.href}
                              prefetch={true} 
                              className={`flex items-center gap-2 p-3 rounded-lg text-sm transition-colors ${
                                isResourceActive 
                                  ? 'bg-[#1A3A3A] text-[#ffffff] font-medium' 
                                  : 'text-[#ffffff] hover:bg-[#1A3A3A]'
                              }`}
                            >
                              <Image 
                                src={resources.image} 
                                alt={resources.label} 
                                width={38} 
                                height={28} 
                                className="rounded"
                              />
                              {resources.label}
                            </Link>
                          );
                        })}
                      </div>
                    )}

                  </div>
                )}
              </div>
            );
          })}
        </div>




        {/* Desktop Contact Button */}
        <div className="flex gap-4">
          <Image  onClick={scrollToContact} src="/button.png" width={25} height={5} alt="gu"/>
        <button 
          onClick={scrollToContact}
          className="hidden lg:block  bg-[#1A3A3A] px-1 py-2 rounded-lg font-medium text-sm   transition-colors   text-[#ffffff]"
        >
          Contact
        </button>

        <button 
          onClick={scrollToContact}
          className="hidden lg:block bg-[#1A3A3A] px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#1B5B3B] transition-colors border border-[#6EED88] text-[#6EED88]"
        >
          Book Demo
        </button>
        </div>

        

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle mobile menu"
        >
          <span className={`w-6 h-0.5 bg-[#1A3A3A] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#1A3A3A] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-[#1A3A3A] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-1A3A3A shadow-xl z-50 transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <Image src="/logonew.png" alt="RePut" width={120} height={30} />
          <button
            onClick={toggleMobileMenu}
            className="p-2"
            aria-label="Close mobile menu"
          >
            <span className="w-6 h-0.5 bg-[#1A3A3A] block rotate-45 translate-y-0.5"></span>
            <span className="w-6 h-0.5 bg-[#1A3A3A] block -rotate-45 -translate-y-0.5"></span>
          </button>
        </div>

        {/* Mobile Navigation Items */}
        <div className="p-6 space-y-4">
          {navItems.map((item) => {
            const isActive = isActiveNavItem(item);
            
            return (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleMobileDropdown(item.label)}
                      className={`flex justify-between items-center w-full text-left font-semibold py-3 border-b border-gray-100 transition-colors ${
                        isActive ? 'text-[#fffffff] bg-[#1A3A3A] px-2 -mx-2 rounded' : 'text-[#fffffff]'
                      }`}
                    >
                      {item.label}
                      <span className={`transform transition-transform ${activeMobileDropdown === item.label ? 'rotate-180' : ''}`}>
                        ▼
                      </span>
                    </button>
                    
                    {/* Mobile Dropdown Content */}
                    {activeMobileDropdown === item.label && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.label === "Industries" && industriesItems.map(industry => {
                          const industryHref = `/industries/${industry.label.toLowerCase()}`;
                          const isIndustryActive = pathname === industryHref;
                          
                          return (
                            <Link 
                              key={industry.label} 
                              href={industryHref}
                              prefetch={true}
                              className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors ${
                                isIndustryActive 
                                  ? 'bg-[#1A3A3A] text-[#ffffff] font-semibold' 
                                  : 'text-[#ffffff] hover:bg-[#1A3A3A]'
                              }`}
                              onClick={toggleMobileMenu}
                            >
                              <Image 
                                src={industry.image} 
                                alt={industry.label} 
                                width={24} 
                                height={24} 
                                className="rounded"
                              />
                              {industry.label}
                            </Link>
                          );
                        })}
                        
                        {item.label === "Platform" && platformItems.map(platform => {
                          const isPlatformActive = pathname === platform.href;
                          
                          return (
                            <Link 
                              key={platform.label} 
                              href={platform.href}
                              prefetch={true}
                              className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors ${
                                isPlatformActive 
                                  ? 'bg-[#1A3A3A] text-[#ffffff] font-semibold' 
                                  : 'text-[#ffffff] hover:bg-[#1A3A3A]'
                              }`}
                              onClick={toggleMobileMenu}
                            >
                              <Image 
                                src={platform.image} 
                                alt={platform.label} 
                                width={24} 
                                height={24} 
                                className="rounded"
                              />
                              {platform.label}
                            </Link>
                          );
                        })}


{/*                         
                        {item.label === "Regulations" && RegulationsItems.map(Regulations => {
                          const isPlatformActive = pathname === Regulations.href;
                          
                          return (
                            <Link 
                              key={Regulations.label} 
                              href={Regulations.href}
                              prefetch={true}
                              className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors ${
                                isPlatformActive 
                                  ? 'bg-[#1A3A3A] text-[#ffffff] font-semibold' 
                                  : 'text-[#ffffff] hover:bg-[#1A3A3A]'
                              }`}
                              onClick={toggleMobileMenu}
                            >
                              <Image 
                                src={Regulations.image} 
                                alt={Regulations.label} 
                                width={24} 
                                height={24} 
                                className="rounded"
                              />
                              {Regulations.label}
                            </Link>
                          );
                        })} */}



                        {item.label === "Compliance" && complianceItems.map(compliance => {
                          const isComplianceActive = pathname === compliance.href;
                          
                          return (
                            <Link 
                              key={compliance.label} 
                              href={compliance.href}
                              prefetch={true}
                              className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors ${
                                isComplianceActive 
                                  ? 'bg-[#1A3A3A] text-[#ffffff] font-semibold' 
                                  : 'text-[#ffffff] hover:bg-[#1A3A3A]'
                              }`}
                              onClick={toggleMobileMenu}
                            >
                              <Image 
                                src={compliance.image} 
                                alt={compliance.label} 
                                width={24} 
                                height={24} 
                                className="rounded"
                              />
                              {compliance.label}
                            </Link>
                          );
                        })}

                        {/* why reput */}
                        {/* {item.label === "Regulations" && RegulationsItems.map(Regulations => {
                          const isWhyReputActive = pathname === Regulations.href;
                          
                          return (
                            <Link 
                              key={Regulations.label} 
                              href={Regulations.href}
                              prefetch={true}
                              className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors ${
                                isWhyReputActive 
                                  ? 'bg-[#1A3A3A] text-[#ffffff] font-semibold' 
                                  : 'text-[#ffffff] hover:bg-[#1A3A3A]'
                              }`}
                              onClick={toggleMobileMenu}
                            >
                              <Image 
                                src={Regulations.image} 
                                alt={Regulations.label} 
                                width={24} 
                                height={24} 
                                className="rounded"
                              />
                              {Regulations.label}
                            </Link>
                          );
                        })} */}

                        {/* Resources */}
                        {item.label === "Resources" && (resourcesItems.map(resources => {
                          const isResourceActive = pathname === resources.href;
                          
                          return (
                            <Link
                              key={resources.label}
                              href={resources.href}
                              prefetch={true}
                              className={`flex items-center gap-3 p-3 rounded-lg text-sm transition-colors ${
                                isResourceActive 
                                  ? 'bg-[#1A3A3A] text-[#ffffff] font-semibold' 
                                  : 'text-[#ffffff] hover:bg-[#1A3A3A]'
                              }`}
                              onClick={toggleMobileMenu}
                            >
                              <Image 
                                src={resources.image} 
                                alt={resources.label} 
                                width={24} 
                                height={24} 
                                className="rounded"
                              />
                              {resources.label}
                            </Link>
                          );
                        }))}

                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.href!} 
                    prefetch={true} 
                    className={`block font-semibold py-3 border-b border-gray-100 transition-colors ${
                      isActive 
                        ? 'text-[#ffffff] bg-[#1A3A3A] px-2 -mx-2 rounded' 
                        : 'text-[#ffffff]'
                    }`}
                    onClick={toggleMobileMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            );
          })}
          
          {/* Mobile Contact Button */}
          <button 
            onClick={() => {
              scrollToContact();
              toggleMobileMenu();
            }}
            className="w-full bg-[#1A3A3A] px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#1A5A3A] transition-colors mt-6 border border-[#6EED88] text-[#6EED88]"
          >
            Book Demo
          </button>
        </div>
      </div>
    </header>
  );
}