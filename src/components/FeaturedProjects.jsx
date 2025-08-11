import React from 'react';

const projects = [
  {
    title: 'PetConnect',
    description: 'Full-stack pet adoption platform with user authentication, messaging, and listings using React, Spring Boot, and MongoDB.',
    image: '/images.jpeg' // Corrected path
  },
  {
    title: 'Documentor – AI Research Assistant',
    description: 'Summarizes and answers questions from uploaded documents (.pdf, .txt, .docx) using FastAPI, sentence-transformers, and scikit-learn.',
    image: '/aiimg.jpg'
  }
];

const FeaturedProjects = () => {
  return (
    <div className="bg-blue-600/90 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Petrona, serif' }}>
        Featured Projects
      </h2>
      <p className="text-blue-100 mb-8 leading-relaxed">
        Developed diverse projects showcasing full-stack development, AI research assistance, and data analysis skills.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4 group">
            <div className="aspect-[1.618/1] rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
           i   <img 
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-blue-100 leading-relaxed">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;