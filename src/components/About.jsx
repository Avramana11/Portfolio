// "use client"

// import { useEffect, useRef, useState } from "react"

// const About = () => {
//   const [isVisible, setIsVisible] = useState(false)
//   const sectionRef = useRef(null)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current)
//     }

//     return () => observer.disconnect()
//   }, [])

//   const aboutCards = [
//     {
//       title: "Education",
//       icon: (
//         <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
//           />
//         </svg>
//       ),
//       content: (
//         <div className="text-center">
//           <p className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
//             B.tech in Punjab, 2023-2027
//           </p>
//           <p className="text-gray-600 dark:text-gray-400 text-sm mb-1">
//             Lovely professional University
//           </p>
//           <p className="text-gray-600 dark:text-gray-400 text-sm">Specialization in AI and Robotics</p>
//         </div>
//       ),
//       bgClass: "bg-white dark:bg-gray-800",
//       isHighlighted: false,
//     },
//     {
//       title: "Problem Solving",
//       icon: (
//         <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
//           />
//         </svg>
//       ),
//       content: (
//         <div className="text-center">
//           <p className="text-white text-sm mb-3">
//             Learnt Data Structures and Algo, which helps in logic building in Programming and also helps in solving real
//             life problems.
//           </p>
//           <button className="text-white text-sm underline hover:no-underline transition-all duration-200">
//             View Certificate
//           </button>
//         </div>
//       ),
//     //   bg-gradient-to-br from-blue-400 to-blue-600
//       bgClass: "bg-white dark:bg-gray-800",
//       isHighlighted: false,
//     },
//     {
//       title: "AI and ML",
//       icon: (
//         <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
//           />
//         </svg>
//       ),
//       content: (
//         <div className="text-center">
//           <p className="text-gray-600 dark:text-gray-400 text-sm">
//             As I am doing Specialization in AI in my College degree, I have learnt about how AI works and How to use it
//             for real world Problems.
//           </p>
//         </div>
//       ),
//       bgClass: "bg-white dark:bg-gray-800",
//       isHighlighted: false,
//     },
//     {
//       title: "Web Development",
//       icon: (
//         <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
//           />
//         </svg>
//       ),
//       content: (
//         <div className="text-center">
//           <p className="text-gray-600 dark:text-gray-400 text-sm">
//             I have explored different field in Tech, and Web Dev is the most rapidly growing and intresting thing I
//             found.
//           </p>
//         </div>
//       ),
//       bgClass: "bg-white dark:bg-gray-800",
//       isHighlighted: false,
//     },
//   ]

//   return (
//     <section id="about" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2
//             className={`text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 transition-all duration-700 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             About Me
//           </h2>
//           <div
//             className={`transition-all duration-700 delay-200 ${
//               isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//             }`}
//           >
//             <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Let's Know Me</p>
//             <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
//           </div>
//         </div>

//         {/* Description Paragraph */}
//         <div
//           className={`text-center mb-16 transition-all duration-700 delay-400 ${
//             isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//           }`}
//         >
//           <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
//             From Thinking Out of the Box in DSA questions to Reshaping the Box in Web Development and Using the power of
//             AI to predict what's inside the box is my Journey to Programming and Development.
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//           {aboutCards.map((card, index) => (
//             <div
//               key={card.title}
//               className={`${card.bgClass} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
//                 isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
//               }`}
//               style={{
//                 transitionDelay: `${600 + index * 200}ms`,
//                 border: card.isHighlighted ? "none" : "1px solid rgba(229, 231, 235, 0.5)",
//               }}
//             >
//               {/* Card Header */}
//               <div className="flex flex-col items-center mb-6">
//                 <div
//                   className={`p-4 rounded-2xl mb-4 ${card.isHighlighted ? "bg-white/20" : "bg-blue-50 dark:bg-blue-900/20"}`}
//                 >
//                   {card.icon}
//                 </div>
//                 <h3
//                   className={`text-2xl font-bold ${card.isHighlighted ? "text-white" : "text-gray-900 dark:text-white"}`}
//                 >
//                   {card.title}
//                 </h3>
//               </div>

//               {/* Card Content */}
//               <div className="space-y-4">{card.content}</div>

//               {/* Decorative Element */}
//               {!card.isHighlighted && (
//                 <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Bottom Decorative Elements */}
//         <div className="mt-16 flex justify-center space-x-4">
//           <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//           <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
//           <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About

"use client"

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-6">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>
        </div>

        {/* About Box */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-10 text-center">

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I am a third-year B.Tech student at Lovely Professional University,
            pursuing a minor in Full-Stack Development. I am passionate about
            building modern web applications and continuously improving my
            programming and problem-solving skills.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            I primarily work with the MERN stack to develop full-stack web
            applications. Along with development, I regularly practice Data
            Structures and Algorithms on LeetCode to strengthen my logical
            thinking and coding efficiency.
          </p>

          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I have built projects such as the Wanderlust Listing Platform,
            Nursery Website, and applications implementing OWASP Top 10
            security concepts. My goal is to become a Software Engineer at a
            good company where I can contribute to building scalable and
            impactful software solutions.
          </p>

        </div>
      </div>
    </section>
  )
}

export default About