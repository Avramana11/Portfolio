"use client"

import { useEffect, useRef, useState } from "react"

const Timeline = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedItems, setAnimatedItems] = useState(new Set())
  const sectionRef = useRef(null)

  // ✨ Smooth scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Staggered animation for timeline items
          setTimeout(() => setAnimatedItems(new Set(["header"])), 200)
          setTimeout(() => setAnimatedItems((prev) => new Set([...prev, "timeline"])), 400)
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // ✨ Timeline data with educational and career milestones
  const timelineEvents = [
    {
      id: "present",
      date: "Present",
      title: "Full-Stack Developer",
      subtitle: "Building Amazing Projects!",
      description:
        "Currently working on innovative web applications using MERN stack, creating user-friendly interfaces and robust backend systems.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "job",
      date: "2024",
      title: "First Job",
      subtitle: "Software Developer",
      description:
        "Started my professional journey as a software developer, working with modern technologies and contributing to real-world projects.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "internship",
      date: "2023",
      title: "Internship",
      subtitle: "Web Development Intern",
      description:
        "Gained hands-on experience in web development, learned industry best practices, and worked on live projects with experienced developers.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "btech",
      date: "2020 - 2024",
      title: "B.Tech Graduation",
      subtitle: "Information Technology",
      description:
        "Completed Bachelor of Technology in Information Technology from Madhav Institute of Technology and Science, Gwalior with specialization in AI and Robotics.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
    },
    {
      id: "college",
      date: "2020",
      title: "College Admission",
      subtitle: "Started Engineering Journey",
      description:
        "Got admission in Information Technology branch and began my journey into the world of programming, algorithms, and software development.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: "school",
      date: "2018",
      title: "High School",
      subtitle: "12th Grade Completion",
      description:
        "Completed higher secondary education with focus on Science and Mathematics, which laid the foundation for my engineering career.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
          />
        </svg>
      ),
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ✨ Section Header with smooth animation */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ease-out ${
            animatedItems.has("header") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A journey through my educational and professional milestones
          </p>
        </div>

        {/* ✨ Timeline Container */}
        <div className="relative">
          {/* ✨ Vertical Timeline Line */}
          <div
            className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-1500 ease-out ${
              animatedItems.has("timeline") ? "h-full opacity-100" : "h-0 opacity-0"
            }`}
            style={{
              transitionDelay: "600ms",
            }}
          />

          {/* ✨ Timeline Items */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={event.id}
                className={`relative flex items-center transition-all duration-700 ease-out ${
                  animatedItems.has("timeline") ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                } ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                style={{
                  transitionDelay: animatedItems.has("timeline") ? `${800 + index * 200}ms` : "0ms",
                }}
              >
                {/* ✨ Timeline Icon */}
                <div
                  className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-16 h-16 bg-gradient-to-r ${event.color} rounded-2xl shadow-xl flex items-center justify-center text-white z-10 transition-all duration-500 hover:scale-110 hover:rotate-6`}
                >
                  {event.icon}
                </div>

                {/* ✨ Timeline Content */}
                <div
                  className={`ml-24 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
                >
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                    {/* ✨ Date Badge */}
                    <div className="inline-block mb-3">
                      <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {event.date}
                      </span>
                    </div>

                    {/* ✨ Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {event.title}
                    </h3>

                    {/* ✨ Subtitle */}
                    <h4 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                      {event.subtitle}
                    </h4>

                    {/* ✨ Description */}
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{event.description}</p>

                    {/* ✨ Decorative Arrow for Desktop */}
                    <div
                      className={`hidden md:block absolute top-8 w-4 h-4 bg-gray-50 dark:bg-gray-800 transform rotate-45 ${
                        index % 2 === 0 ? "-right-2" : "-left-2"
                      }`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ✨ Bottom Decorative Elements */}
        <div
          className={`mt-16 flex justify-center space-x-4 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1500ms" }}
        >
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
