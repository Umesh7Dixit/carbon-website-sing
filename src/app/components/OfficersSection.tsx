export default function OfficersSection() {
  const officers = [
    {
      role: "Complaints Officer",
      name: "Nitya Sivakumar",
      email: "nitya@reput.co.in",
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
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto bg-gray-50 rounded-xl shadow-sm py-12 px-6 md:px-12 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {officers.map((officer, index) => (
            <div key={index}>
              {index === 1 && (
                <p className="text-gray-700 font-medium mb-2">Our Officers</p>
              )}
              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                {officer.role}
              </h3>
              <p className="text-gray-700 mb-1">{officer.name}</p>
              <a
                href={`mailto:${officer.email}`}
                className="text-blue-700 hover:underline text-sm"
              >
                {officer.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
