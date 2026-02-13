import React, { useState } from 'react';
import { Menu, X, FileDown } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 -mx-4 -mt-4 mb-2 px-4 pt-4">
      <div className="bg-white/90 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded px-2 py-1"
            style={{ fontFamily: 'Petrona, serif' }}
          >
            VK
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2.5 rounded-lg text-gray-700 hover:bg-gray-100 active:bg-gray-200 min-w-[44px] min-h-[44px] flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div
            className={`flex flex-col md:flex-row md:items-center md:gap-5 gap-1 absolute md:relative top-full left-4 right-4 mt-2 md:mt-0 py-3 md:py-0 rounded-lg md:rounded-none bg-white/95 md:bg-transparent backdrop-blur md:backdrop-blur-none border border-gray-200/50 md:border-0 ${open ? 'block' : 'hidden md:flex'}`}
          >
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="px-4 py-2.5 md:py-2 text-gray-700 font-medium hover:text-blue-600 rounded-lg md:rounded-md hover:bg-gray-50 md:hover:bg-transparent transition-colors duration-200 min-h-[44px] md:min-h-0 flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                {label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              download
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 mt-2 md:mt-0 md:ml-2 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg transition-all duration-200 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transform hover:scale-105 active:scale-100"
              aria-label="Download resume PDF"
            >
              <FileDown className="w-4 h-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
