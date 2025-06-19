"use client"

import { useEffect, useRef, useState } from "react"

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const skillCategories = [
    {
      title: "Web Special",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
      skills: [
        { name: "Next.js", image: "/images/next.svg" },
        { name: "React.js", image: "/images/react.svg" },
        { name: "Node.js", image: "/images/node.svg" },
        { name: "MongoDB", image: "/images/mongo.svg" },
        { name: "Express.js", image: "/images/express.svg" },
        { name: "Tailwind CSS", image: "/images/tailwind.svg" },
      ],
    },
    {
      title: "Languages",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      skills: [
        { name: "Java", image: "/images/java.png" },
        { name: "C++", image: "/images/cpp.svg" },
        { name: "HTML", image: "/images/html.svg" },
        { name: "CSS", image: "/images/css.svg" },
        { name: "JavaScript", image: "/images/js.svg" },
      ],
    },
    {
      title: "Others",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-green-500 to-teal-500",
      skills: [
        { name: "GitHub", image: "/images/github.svg" },
        { name: "VSCode", image: "/images/vsc.svg" },
        { name: "Clean Code", image: "/images/cleancode.svg" },
      ],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className={`group relative bg-white dark:bg-gray-600 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card Header */}
              <div className="flex items-center space-x-4 mb-8">
                <div
                  className={`p-3 rounded-xl ${category.bgColor} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              {/* Skills Images Grid - Clean & Simple */}
              <div className="grid grid-cols-3 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill.name}
                    className={`group/skill relative flex flex-col items-center p-3 cursor-pointer transition-all duration-300 ${
                      isVisible ? "animate-fade-in" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${index * 200 + skillIndex * 100}ms`,
                    }}
                  >
                    {/* Clean Image Container */}
                    <div className="relative w-16 h-16 transition-all duration-300 group-hover/skill:scale-110 group-hover/skill:-translate-y-2">
                      {/* Image with Shadow */}
                      <img
                        src={skill.image || "/placeholder.svg"}
                        alt={skill.name}
                        className="w-full h-full object-contain filter drop-shadow-md group-hover/skill:drop-shadow-xl transition-all duration-300"
                        onError={(e) => {
                          // Fallback if image doesn't exist
                          e.target.style.display = "none"
                          e.target.nextSibling.style.display = "flex"
                        }}
                      />

                      {/* Fallback icon if image fails to load */}
                      <div className="hidden w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg items-center justify-center text-white text-sm font-bold shadow-md">
                        {skill.name.charAt(0)}
                      </div>

                      {/* Subtle Glow Effect on Hover */}
                      <div className="absolute inset-0 rounded-lg opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300 bg-gradient-to-br from-blue-400 to-purple-400 blur-md -z-10"></div>
                    </div>

                    {/* Skill Name Tooltip */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20 shadow-lg">
                      {skill.name}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-900 dark:border-b-gray-700"></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Card Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>

              {/* Floating Orbs */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-ping opacity-75"></div>
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
