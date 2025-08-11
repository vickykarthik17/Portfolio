import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Header = () => {
  return (
    <div className="bg-white/75 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Petrona, serif' }}>
        Venkata Sai Vikram Karthik Blood
      </h1>
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        Final-year Computer Science undergraduate passionate about data-driven problem-solving and scalable web solutions.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a 
          href="http://linkedin.com/in/vikram-karthik-04a9212a9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-200 min-w-[200px]"
        >
          <Linkedin className="w-5 h-5 mr-2" />
          Connect on LinkedIn
        </a>
        
        <a 
          href="https://github.com/vickykarthik17"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 min-w-[200px]"
        >
          <Github className="w-5 h-5 mr-2" />
          View GitHub
        </a>
      </div>
    </div>
  );
};

export default Header;