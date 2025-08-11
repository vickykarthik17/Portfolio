import React from 'react';
import Header from './components/Header.jsx';
import ProfileSummary from './components/ProfileSummary.jsx';
import Education from './components/Education.jsx';
import TechnicalSkills from './components/TechnicalSkills.jsx';
import Internships from './components/Internships.jsx';
import FeaturedProjects from './components/FeaturedProjects.jsx';
import DataAnalysisProjects from './components/DataAnalysisProjects.jsx';
import Certifications from './components/Certifications.jsx';
import ExtraCurricular from './components/ExtraCurricular.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2400&q=80')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen">
        <div className="w-full max-w-4xl mx-auto space-y-6 p-4">
          <Header />
          <ProfileSummary />
          <Education />
          <TechnicalSkills />
          <Internships />
          <FeaturedProjects />
          <DataAnalysisProjects />
          <Certifications />
          <ExtraCurricular />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;