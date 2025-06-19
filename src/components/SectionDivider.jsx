const SectionDivider = ({ type, variant = "blue", flip = false }) => {
  const getColors = () => {
    switch (variant) {
      case "blue":
        return {
          primary: "#3B82F6",
          secondary: "#1D4ED8",
          gradient: "from-blue-500 to-blue-600",
        }
      case "purple":
        return {
          primary: "#8B5CF6",
          secondary: "#7C3AED",
          gradient: "from-purple-500 to-purple-600",
        }
      case "green":
        return {
          primary: "#10B981",
          secondary: "#059669",
          gradient: "from-green-500 to-green-600",
        }
      case "pink":
        return {
          primary: "#EC4899",
          secondary: "#DB2777",
          gradient: "from-pink-500 to-pink-600",
        }
      case "gradient":
        return {
          primary: "#3B82F6",
          secondary: "#8B5CF6",
          gradient: "from-blue-500 via-purple-500 to-pink-500",
        }
      default:
        return {
          primary: "#3B82F6",
          secondary: "#1D4ED8",
          gradient: "from-blue-500 to-blue-600",
        }
    }
  }

  const colors = getColors()

  if (type === "wave") {
    return (
      <div className={`relative ${flip ? "rotate-180" : ""}`}>
        <svg
          className="w-full h-20 md:h-32"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`wave-gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
          </defs>
          <path
            d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
            fill={`url(#wave-gradient-${variant})`}
            className="animate-pulse"
          />
        </svg>
      </div>
    )
  }

  if (type === "curve") {
    return (
      <div className={`relative ${flip ? "rotate-180" : ""}`}>
        <svg
          className="w-full h-16 md:h-24"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`curve-gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="100%" stopColor={colors.secondary} />
            </linearGradient>
          </defs>
          <path d="M0,0 Q600,120 1200,0 L1200,120 L0,120 Z" fill={`url(#curve-gradient-${variant})`} />
        </svg>
      </div>
    )
  }

  if (type === "zigzag") {
    return (
      <div className={`relative ${flip ? "rotate-180" : ""}`}>
        <svg
          className="w-full h-12 md:h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id={`zigzag-gradient-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={colors.primary} />
              <stop offset="50%" stopColor={colors.secondary} />
              <stop offset="100%" stopColor={colors.primary} />
            </linearGradient>
          </defs>
          <path
            d="M0,60 L200,0 L400,60 L600,0 L800,60 L1000,0 L1200,60 L1200,120 L0,120 Z"
            fill={`url(#zigzag-gradient-${variant})`}
          />
        </svg>
      </div>
    )
  }

  if (type === "dots") {
    return (
      <div className="relative py-8 overflow-hidden">
        <div className="flex justify-center items-center space-x-4">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 bg-gradient-to-r ${colors.gradient} rounded-full animate-pulse`}
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "2s",
              }}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100/50 dark:via-gray-800/50 to-transparent"></div>
      </div>
    )
  }

  if (type === "icons") {
    const icons = [
      <svg key="icon-1" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>,
      <svg key="icon-2" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>,
      <svg key="icon-3" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>,
      <svg key="icon-4" className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>,
      <svg key="icon-5" className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>,
    ]

    return (
      <div className="relative py-12 overflow-hidden">
        <div className="flex justify-center items-center space-x-8">
          {icons.map((Icon, i) => (
            <div
              key={i}
              className={`p-4 bg-gradient-to-r ${colors.gradient} rounded-full shadow-lg hover:scale-110 transition-transform duration-300 animate-bounce`}
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: "3s",
              }}
            >
              {Icon}
            </div>
          ))}
        </div>
        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-gradient-to-r ${colors.gradient} rounded-full opacity-30 animate-float`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>
    )
  }

  if (type === "gradient-blob") {
    return (
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0">
          <div
            className={`absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-r ${colors.gradient} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob`}
          />
          <div
            className={`absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-l from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000`}
          />
          <div
            className={`absolute top-1/3 left-1/2 transform -translate-x-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000`}
          />
        </div>
        <div className="relative z-10 flex justify-center">
          <div className={`w-32 h-1 bg-gradient-to-r ${colors.gradient} rounded-full`} />
        </div>
      </div>
    )
  }

  return null
}

export default SectionDivider
