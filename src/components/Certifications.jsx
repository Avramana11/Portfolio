import React, { useState } from "react";
import { Award, X } from "lucide-react";

const Certifications = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certifications = [
    {
      title: "Full Stack Web Development",
      provider: "Apna College",
      date: "Sep 2025",
      image: "fullstack.png", // Use local image if available
      link: "https://drive.google.com/file/d/1QuPNtFLdhZpWgDR6NPcYVJsyyf69UclH/view?usp=sharing",
    },
    {
      title: "Data Structures and Algorithms",
      provider: "Apna College",
      date: "Aug 2025",
      image: "dsadelta.png", // Use local image if available
      link: "https://drive.google.com/file/d/1QuPNtFLdhZpWgDR6NPcYVJsyyf69UclH/view?usp=sharing",
    },
    {
      title: "Postman API Fundamentals",
      provider: "Postman",
      date: "2025",
      image: "postman1.png", // Use local image if available
      link: "https://badges.parchment.com/public/assertions/gBxjtP_SQ1uJJ9vfFHTmgQ?identity__email=annamdevularamana2005%40gmail.com",
    },
    {
      title: "Java",
      provider: "GeeksforGeeks",
      date: "Nov 2025",
      image: "java.png", // Use local image if available
      link: "#",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certificates</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 flex flex-col h-full"
            >
              {/* Certificate Image Thumbnail */}
              <div 
                className="relative h-48 overflow-hidden cursor-pointer group"
                onClick={() => openModal(cert.image)}
              >
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Certificate"; }}
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 font-medium bg-blue-600 px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    View Full Certificate
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-start mb-4">
                  <Award className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white leading-tight">{cert.title}</h3>
                </div>
                
                <div className="mt-auto">
                  <p className="text-gray-600 dark:text-gray-300 mb-1 text-sm font-medium">{cert.provider}</p>
                  <p className="text-gray-500 dark:text-gray-400 mb-4 text-xs italic">{cert.date}</p>
                  
                  <button
                    onClick={() => openModal(cert.image)}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300 font-medium shadow-md hover:shadow-lg active:scale-95"
                  >
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
        >
          <div 
            className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg shadow-2xl overflow-hidden animate-zoom-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 p-2 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-all duration-200 shadow-lg group"
              onClick={closeModal}
              title="Close"
            >
              <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-200" />
            </button>
            
            {/* Full Image */}
            <div className="p-2 sm:p-4">
              <img 
                src={selectedImage} 
                alt="Full Certificate" 
                className="w-full h-auto max-h-[80vh] object-contain rounded shadow-inner"
                onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Full+Certificate+Image+Not+Found"; }}
              />
            </div>
            
            {/* Modal Footer (Optional Info) */}
            <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 flex justify-between items-center">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300 italic">Certificate Viewer</p>
              <button 
                onClick={closeModal}
                className="text-blue-600 dark:text-blue-400 font-bold hover:underline"
              >
                Close Viewer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Certifications;
