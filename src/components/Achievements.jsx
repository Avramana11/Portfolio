// import React from "react";
// import { Trophy, Code } from "lucide-react";

// const Achievements = () => {
//   return (
//     <div className="bg-gray-100 dark:bg-gray-800 py-16">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">Achievements</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center mb-4">
//               <Trophy className="w-8 h-8 mr-4 text-yellow-500" />
//               <h3 className="text-xl font-bold text-gray-800 dark:text-white">Hackathon Participation – Jan 2025</h3>
//             </div>

//           <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
//             <div className="flex items-center mb-4">
//               <Code className="w-8 h-8 mr-4 text-blue-500" />
//               <h3 className="text-xl font-bold text-gray-800 dark:text-white">LeetCode Problem Solving</h3>
//             </div>
//             <p className="text-gray-600 dark:text-gray-300 mb-4">
//               Maintained a <span className="font-bold text-blue-500">50-day</span> active streak on LeetCode and solved more than <span className="font-bold text-blue-500">200</span> algorithmic problems, strengthening my skills in Data Structures, Algorithms, and logical problem solving.
//             </p>
//             <a
//               href="#" // Replace with your LeetCode profile link
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
//             >
//               View LeetCode Profile
//             </a>
//           </div>
//             <p className="text-gray-600 dark:text-gray-300">
//               Advanced to the final round in Webathon, demonstrating innovative
//               problem-solving skills and teamwork.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievements;
import React from "react";
import { Trophy, Code } from "lucide-react";

const Achievements = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">

        {/* <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          Achievements
        </h2> */}
         <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            {" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Achievements</span>
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Hackathon Card */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Trophy className="w-8 h-8 mr-4 text-yellow-500" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                Hackathon Participation – Jan 2025
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-300">
              Advanced to the final round in Webathon, demonstrating innovative
              problem-solving skills and teamwork.
            </p>
          </div>

          {/* LeetCode Card */}
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Code className="w-8 h-8 mr-4 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                LeetCode Problem Solving
              </h3>
            </div>

            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Maintained a <span className="font-bold text-blue-500">50-day</span> active streak on
              LeetCode and solved more than{" "}
              <span className="font-bold text-blue-500">200+</span> algorithmic problems,
              strengthening my skills in Data Structures, Algorithms, and logical problem solving.
            </p>

            <a
              href="https://leetcode.com/u/A_Ramana/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
            >
              View LeetCode Profile
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Achievements;