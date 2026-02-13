import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'PetConnect',
    problem: 'Adoption processes are scattered; no single place to browse, message, and complete adoptions.',
    solution: 'Full-stack platform with auth, listings, and in-app messaging so shelters and adopters connect in one place.',
    tech: 'React, Spring Boot, MongoDB, JWT',
    impact: 'Shipped auth, real-time messaging, and listing management.',
    image: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80',
    demoUrl: 'https://pet-connect-psi.vercel.app/',
    githubUrl: 'https://github.com/vickykarthik17', // replace with actual repo when available
  },
  {
    title: 'Documentor – AI Research Assistant',
    problem: 'Researchers and students waste time re-reading long PDFs to find answers.',
    solution: 'Upload PDF/DOCX/TXT; get summaries and Q&A using embeddings and similarity search.',
    tech: 'FastAPI, sentence-transformers, scikit-learn',
    impact: 'Supports multiple formats; reduces time to find answers in long documents.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80',
    demoUrl: null,
    githubUrl: 'https://github.com/vickykarthik17', // replace with actual repo when available
  },
];

const FeaturedProjects = () => {
  return (
    <div className="bg-blue-600/90 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Petrona, serif' }}>
        Featured Projects
      </h2>
      <p className="text-blue-100 mb-8 leading-relaxed">
        Problem → solution → impact. Each project includes a live demo or source code link.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="space-y-4 group">
            <div className="aspect-[1.618/1] rounded-lg overflow-hidden shadow-lg group-hover:scale-[1.02] transition-transform duration-300 bg-white/10">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-blue-200">
                <span className="font-medium text-white">Problem:</span> {project.problem}
              </p>
              <p className="text-sm text-blue-100">
                <span className="font-medium text-white">Solution:</span> {project.solution}
              </p>
              <p className="text-xs text-blue-200/90">
                <span className="font-medium text-white">Tech:</span> {project.tech}
              </p>
              <p className="text-xs text-blue-100">
                <span className="font-medium text-white">Impact:</span> {project.impact}
              </p>
              <div className="flex flex-wrap gap-3 pt-3">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 active:bg-white/40 rounded-full text-sm font-semibold min-h-[44px] shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transform hover:scale-105 active:scale-100"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 active:bg-white/40 rounded-full text-sm font-semibold min-h-[44px] shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transform hover:scale-105 active:scale-100"
                  >
                    <Github className="w-4 h-4" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProjects;
