import React from "react";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      provider: "Apna College",
      date: "Sep 2025",
      link: "https://drive.google.com/file/d/1QuPNtFLdhZpWgDR6NPcYVJsyyf69UclH/view?usp=sharing",
    },
    {
      title: "Data Structures and Algorithms",
      provider: "Apna College",
      date: "Aug 2025",
      link: "https://drive.google.com/file/d/1QuPNtFLdhZpWgDR6NPcYVJsyyf69UclH/view?usp=sharing",
    },
    {
      title: "Java",
      provider: "GeeksforGeeks",
      date: "Nov 2025",
      link: "#",
    },
    {
      title: "Postman API Fundamentals",
      provider: "Postman",
      date: "2025",
      link: "https://badges.parchment.com/public/assertions/gBxjtP_SQ1uJJ9vfFHTmgQ?identity__email=annamdevularamana2005%40gmail.com",
    },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Certifications</h2> */}
                 <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificates</span>
          </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <Award className="w-8 h-8 mr-4 text-blue-500" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{cert.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{cert.provider}</p>
              <p className="text-gray-500 dark:text-gray-400 mb-4">{cert.date}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
              >
                View Certificate
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
