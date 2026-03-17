import React from "react";
import { GraduationCap, School, BookOpen } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech – Computer Science Engineering",
      institution: "Lovely Professional University",
      years: "2023 - Present",
      grade: "CGPA: 8.15",
      description: "Specialized in Computer Science Engineering, focusing on software development, data structures, and algorithms.",
      icon: <GraduationCap className="w-5 h-5" />,
    },
    {
      degree: "Intermediate",
      institution: "Sri Chaitanya Junior College",
      years: "2021 - 2023",
      grade: "Percentage: 94%",
      description: "Completed secondary education with a focus on Mathematics, Physics, and Chemistry.",
      icon: <School className="w-5 h-5" />,
    },
    {
      degree: "School",
      institution: "S.S.S.V.N School",
      years: "2020-2021",
      grade: "CGPA: 10",
      description: "Completed primary education with excellent academic records and participation in extracurricular activities.",
      icon: <BookOpen className="w-5 h-5" />,
    },
  ];

  return (
    <section id="education" className="py-12 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
          Education
        </h2>

        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-500/30 dark:bg-blue-400/20"></div>
          <div className="md:hidden absolute left-4 h-full w-0.5 bg-blue-500/30 dark:bg-blue-400/20"></div>

          <div className="space-y-8">
            {educationData.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center justify-between md:justify-normal ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                } group`}
              >
                {/* Timeline Node */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-500 dark:bg-blue-600 flex items-center justify-center text-white z-10 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Card */}
                <div className={`w-full md:w-[45%] ml-12 md:ml-0 ${
                  index % 2 === 0 ? "md:pr-10 text-left md:text-right" : "md:pl-10 text-left"
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:-translate-y-1">
                    <span className="inline-block px-2 py-0.5 mb-2 text-[10px] font-semibold tracking-wider text-blue-600 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-400">
                      {item.years}
                    </span>
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-0.5">
                      {item.degree}
                    </h3>
                    <p className="text-blue-500 dark:text-blue-400 font-medium mb-1 text-sm">
                      {item.institution}
                    </p>
                    <div className="mb-2">
                      <span className="text-[11px] font-medium px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-md">
                        {item.grade}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
