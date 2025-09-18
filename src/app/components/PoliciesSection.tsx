 



import { FaDownload } from "react-icons/fa";

type Policy = {
  id: number;
  title: string;
  description: string;
  file: string;
};

export default function PoliciesSection() {
  const policies: Policy[] = [
    {
      id: 1,
      title: "Privacy Policy",
      description:
        "This Privacy Notice describes the information Upcycle reput techpvt ltd. (“REPUT”, “we”, “our”, or “us”) collects, how we use and retain this information, with whom we share it, and the choices you have in connection with these activities.",
      file: "/docs/Privacy_Policy.pdf",
    },
    {
      id: 2,
      title: "Equal Opportunity Employer Policy",
      description:
        "This policy aims to Promote equality in hiring, promotions, training, compensation, benefits, and all employment decisions.",
      file: "/docs/equal_opportunity.pdf",
    },
    {
      id: 3,
      title: "Data Security Policy and Implementation Framework",
      description:
        "A policy for ensuring data security, integrity, and compliance within the Reput SaaS platform.",
      file: "/docs/data-security-policy.pdf",
    },
    {
      id: 4,
      title:
        "Sensitive Personal Data or Information (SPDI) and Personal Information Policy",
      description:
        "This documented information is a policy documented information highlighting the policies for Sensitive Personal Data or Information (SPDI) and Personal Information management.",
      file: "/docs/Reput-Policy_SDPI.pdf",
    },
    // {
    //   id: 5,
    //   title: "Gender Policy",
    //   description:
    //     "Our Gender Policy outlines our commitment to promoting gender equality, equity, and inclusivity across all areas of our organization.",
    //   file: "/docs/gender-Policy.pdf",
    // },
  ];

  const officers = [
    {
      role: "Complaints Officer",
      name: "Elakkiya Shree",
      email: "Elakkiya@reput.co.in",
    },
    {
      role: "Grievance Officer",
      name: "Harshit Panday",
      email: "team@reput.ai",
    },
    {
      role: "Data Protection Officer",
      name: "Sudalagunta Nagendra Babu",
      email: "nagendra@reput.co.in",
    },
  ];

  return (
    <>
      <section
        className="relative h-[100vh] w-full overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/policyBg.png')" }}
      >
        
 
  

        <div className="relative z-10 flex h-[35%] flex-col items-center justify-center text-center px-4">
          <span className="mb-4 inline-block rounded-full bg-[#6EED88] px-4 py-1 text-sm font-medium text-black">
            Our Privacy & Policies
          </span>
          <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* ===== CONTENT (white background with green border) ===== */}
      <section className=" bg-white pt-20 px-4 ">
        <div className="relative bottom-[550px] mx-auto max-w-7xl rounded-2xl border-2 border-green-300 bg-white shadow-lg p-10">
          {/* Officers */}
          <div className="mb-16  justify-center">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 md:text-3xl">
              Our Officers
            </h2>
            <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-3">
              {officers.map((officer, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-green-300 bg-gray-50 p-6 shadow-sm"
                >
                  <h3 className="mb-1 text-xl font-semibold text-gray-900">
                    {officer.role}
                  </h3>
                  <p className="mb-1 text-gray-700">{officer.name}</p>
                  <a
                    href={`mailto:${officer.email}`}
                    className="text-sm text-blue-700 hover:underline"
                  >
                    {officer.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div>
            <h2 className="mb-2 text-2xl font-bold text-gray-800 md:text-3xl">
              Our Policies
            </h2>
            <p className="mb-10 text-sm text-gray-600 md:text-base">
              We are committed to transparency, compliance, and ethical business
              practices. Our policies ensure data protection, workplace equality,
              and regulatory adherence, fostering a secure and inclusive
              environment for all.
            </p>

            <div className="space-y-6">
              {policies.map((policy) => (
                <div
                  key={policy.id}
                  className="flex flex-col items-start justify-between gap-4 rounded-lg   bg-gray-50 p-6   md:flex-row md:items-center"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-21 items-center justify-center rounded-md bg-black text-sm font-semibold text-white">
                      {policy.id}
                    </div>
                    <div>
                      <h3 className="text-lg text-gray-900">{policy.title}</h3>
                      <p className="mt-1 text-sm text-gray-700">
                        {policy.description}
                      </p>
                    </div>
                  </div>

                  <a
                    href={policy.file}
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-[#173C52] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#1e4c66]"
                  >
                    Download <FaDownload className="text-base" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



