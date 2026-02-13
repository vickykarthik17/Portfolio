import React from 'react';
import { Linkedin, Github, FileDown } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white/75 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Petrona, serif' }}>
        Vikram Karthik
      </h1>
      <p className="text-lg font-medium text-blue-600 mb-1">
        Data Science & Full-Stack Developer | Graduating 2026
      </p>
      <p className="text-gray-700 mb-6 max-w-xl mx-auto">
        Building data pipelines, web apps, and ML tools. Open to SDE, Data Analyst & ML roles.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center flex-wrap">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg transition-all duration-200 min-w-[180px] min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transform hover:scale-105 active:scale-100"
          aria-label="Download resume PDF"
        >
          <FileDown className="w-5 h-5" />
          <span>Download Resume</span>
        </a>
        <a
          href="https://linkedin.com/in/vikram-karthik-04a9212a9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white active:bg-blue-700 transition-all duration-200 min-w-[180px] min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transform hover:scale-105 active:scale-100"
        >
          <Linkedin className="w-5 h-5" />
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/vickykarthik17"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border-2 border-gray-700 text-gray-700 font-semibold rounded-full hover:bg-gray-800 hover:text-white active:bg-gray-900 transition-all duration-200 min-w-[180px] min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-600 focus-visible:ring-offset-2 transform hover:scale-105 active:scale-100"
        >
          <Github className="w-5 h-5" />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default Header;
