"use client"

import { useState, useEffect } from "react"

const Hero = () => {
  // ✅ Added multiple phrases instead of single fullText
  const phrases = ["Full-Stack Developer", "Designer", "Problem Solver"]
  const [displayText, setDisplayText] = useState("")
  const [phraseIndex, setPhraseIndex] = useState(0) // ✅ Added for tracking which phrase to show
  const [charIndex, setCharIndex] = useState(0) // ✅ Added for character position
  const [isDeleting, setIsDeleting] = useState(false) // ✅ Added for typing/deleting state
  const [scrollY, setScrollY] = useState(0)


  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]
    let typingSpeed = isDeleting ? 50 : 100

    const timeout = setTimeout(() => {
      setDisplayText(currentPhrase.slice(0, charIndex))

      if (!isDeleting && charIndex < currentPhrase.length) {
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1)
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000) // Wait 1 second before deleting
        } else {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % phrases.length) // Go to next phrase
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, phraseIndex, phrases])

  // Scroll animation effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/CVFINAL15.pdf"
    link.download = "/CVFINAL15.pdf"
    link.click()
  }

  // Development icons for the orbiting animation
  const devIcons = [
    { icon: "/images/react.svg", name: "React", delay: "0s" },
    { icon: "/images/node.svg", name: "Node.js", delay: "0.5s" },
    { icon: "/images/mongo.svg", name: "MongoDB", delay: "1s" },
    { icon: "/images/js.svg", name: "JavaScript", delay: "1.5s" },
    { icon: "/images/tailwind.svg", name: "CSS", delay: "2s" },
    { icon: "/images/sass.svg", name: "Firebase", delay: "2.5s" },
    { icon: "/images/next.svg", name: "Next", delay: "3s" },
    { icon: "/images/mongo.svg", name: "Deploy", delay: "3.5s" },
  ]

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-all duration-500"
    >
      {/* Animated Background Elements with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
          style={{
            transform: `translateY(${scrollY * 0.5}px) translateX(${scrollY * 0.2}px)`,
          }}
        ></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"
          style={{
            transform: `translateY(${scrollY * -0.3}px) translateX(${scrollY * -0.1}px)`,
          }}
        ></div>
        <div
          className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"
          style={{
            transform: `translateY(${scrollY * 0.4}px) translateX(${scrollY * 0.3}px)`,
          }}
        ></div>
      </div>

      {/* Floating Code Snippets with Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 text-blue-500/20 dark:text-blue-400/20 font-mono text-sm animate-float"
          style={{
            transform: `translateY(${scrollY * 0.6}px) rotate(${scrollY * 0.1}deg)`,
          }}
        >
          {"<div>"}
        </div>
        <div
          className="absolute top-1/3 right-1/4 text-purple-500/20 dark:text-purple-400/20 font-mono text-sm animate-float animation-delay-1000"
          style={{
            transform: `translateY(${scrollY * -0.4}px) rotate(${scrollY * -0.1}deg)`,
          }}
        >
          {"{ }"}
        </div>
        <div
          className="absolute bottom-1/3 left-1/3 text-green-500/20 dark:text-green-400/20 font-mono text-sm animate-float animation-delay-2000"
          style={{
            transform: `translateY(${scrollY * 0.7}px) rotate(${scrollY * 0.05}deg)`,
          }}
        >
          {"</div>"}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Enhanced Text Content with Scroll Effects */}
          <div
            className="space-y-8 animate-fade-in-up"
            style={{
              transform: `translateX(${scrollY * -0.2}px) translateY(${scrollY * 0.1}px)`,
            }}
          >
            <div className="space-y-6">
              {/* Greeting Badge */}
              <div
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-full border border-blue-200 dark:border-blue-700"
                style={{
                  transform: `scale(${1 - scrollY * 0.0002})`,
                }}
              >
                <span className="text-2xl mr-2">👋</span>
                <span className="text-blue-700 dark:text-blue-300 font-medium">Welcome to my digital space</span>
              </div>

              {/* Main Heading with Enhanced Typography */}
              <h1
                className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight"
                style={{
                  transform: `translateY(${scrollY * 0.3}px)`,
                }}
              >
                <span className="block text-2xl md:text-3xl font-normal text-gray-600 dark:text-gray-400 mb-2">
                  Hello, I'm
                </span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Venkata Ramana
                </span>
                {/* <span className="block text-3xl md:text-4xl mt-4 bg-gradient-to-r from-gray-700 to-gray-900 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  Full-Stack Developer
                </span> */}
              </h1>

              {/* Typing Animation */}
              <div
                className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-mono"
                style={{
                  transform: `translateY(${scrollY * 0.2}px)`,
                }}
              >
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {displayText}
                </span>
                <span className="animate-pulse text-blue-600">|</span>
              </div>

              {/* Description */}
              <p
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed"
                style={{
                  transform: `translateY(${scrollY * 0.15}px)`,
                  opacity: Math.max(0, 1 - scrollY * 0.002),
                }}
              >
                I craft digital experiences that blend{" "}
                <span className="text-blue-600 dark:text-blue-400 font-semibold">creativity</span> with{" "}
                <span className="text-purple-600 dark:text-purple-400 font-semibold">functionality</span>. Specializing
                in modern web technologies to build solutions that make a difference.
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              style={{
                transform: `translateY(${scrollY * 0.1}px) scale(${Math.max(0.8, 1 - scrollY * 0.0003)})`,
              }}
            >
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                  <span>View My Work</span>
                </div>
              </button>

              <button
                onClick={handleDownloadResume}
                className="group relative px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:border-blue-500 dark:hover:border-blue-400"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center space-x-2">
                  <svg
                    className="w-5 h-5 group-hover:animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>Download Resume</span>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Enhanced Profile Image with Orbiting Icons and Scroll Effects */}
          <div
            className="flex justify-center lg:justify-end"
            style={{
              transform: `translateX(${scrollY * 0.3}px) translateY(${scrollY * -0.2}px) rotate(${scrollY * 0.02}deg)`,
            }}
          >
            <div className="relative group">
              {/* Orbiting Development Icons */}
              <div
                className="absolute inset-0 animate-spin-slow"
                style={{
                  transform: `rotate(${scrollY * 0.5}deg)`,
                }}
              >
                {devIcons.map((item, index) => {
                  const angle = (index * 360) / devIcons.length
                  const radius = 180
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius

                  return (
                    <div
                      key={item.name}
                      className="absolute w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center text-xl hover:scale-125 transition-transform duration-300 cursor-pointer group/icon"
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                        animationDelay: item.delay,
                        transform: `scale(${Math.max(0.5, 1 - scrollY * 0.0008)}) translateY(${scrollY * 0.1}px)`,
                      }}
                      title={item.name}
                    >
                      {/* <span className="group-hover/icon:animate-bounce">{item.icon}</span> */}
                      <img
  src={item.icon}
  alt={item.name}
  className="w-6 h-6 group-hover/icon:animate-bounce"
/>
                    </div>
                  )
                })}
              </div>

              {/* Main Profile Image Container */}
              <div className="relative z-10">
                {/* Glowing Background */}
                <div
                  className="absolute -inset-8 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"
                  style={{
                    transform: `scale(${1 + scrollY * 0.0005})`,
                  }}
                ></div>

                {/* Rotating Border */}
                <div
                  className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-spin-slow opacity-75"
                  style={{
                    transform: `rotate(${scrollY * -0.3}deg)`,
                  }}
                ></div>

                {/* Inner Border */}
                <div
                  className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full animate-spin-reverse opacity-60"
                  style={{
                    transform: `rotate(${scrollY * 0.4}deg)`,
                  }}
                ></div>

                {/* Profile Image */}
                <div
                  className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  style={{
                    transform: `scale(${Math.max(0.7, 1 - scrollY * 0.0004)})`,
                  }}
                >
                  <img
                    src= "formal4.png"
                    alt="Venkata Ramana - Full Stack Developer"
                    className="w-full object-cover"
                  />

                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 via-transparent to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Status Indicator */}
                <div
                  className="absolute bottom-4 right-4 flex items-center space-x-2 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
                  style={{
                    transform: `translateY(${scrollY * 0.2}px) scale(${Math.max(0.6, 1 - scrollY * 0.0006)})`,
                  }}
                >
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <span>Available for work</span>
                </div>
              </div>

              {/* Floating Elements with Scroll Effects */}
              <div
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-2xl animate-bounce shadow-lg"
                style={{
                  transform: `translateY(${scrollY * -0.4}px) rotate(${scrollY * 0.3}deg) scale(${Math.max(0.5, 1 - scrollY * 0.0008)})`,
                }}
              >
                💡
              </div>
              <div
                className="absolute -bottom-8 -right-8 w-14 h-14 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-xl animate-pulse shadow-lg"
                style={{
                  transform: `translateY(${scrollY * 0.6}px) rotate(${scrollY * -0.2}deg) scale(${Math.max(0.5, 1 - scrollY * 0.0008)})`,
                }}
              >
                🚀
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          style={{
            opacity: Math.max(0, 1 - scrollY * 0.01),
            transform: `translateX(-50%) translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Scroll to explore</span>
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
