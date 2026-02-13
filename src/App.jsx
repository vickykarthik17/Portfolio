import React from 'react';
import Nav from './components/Nav.jsx';
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
import FadeInSection from './components/FadeInSection.jsx';

function App() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=75')",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center min-h-screen">
        <div className="w-full max-w-4xl mx-auto space-y-6 p-4">
          <Nav />
          <FadeInSection>
            <Header />
          </FadeInSection>
          <section id="about" className="scroll-mt-24">
            <FadeInSection>
              <ProfileSummary />
            </FadeInSection>
          </section>
          <section id="projects" className="scroll-mt-24">
            <FadeInSection delay={0}>
              <FeaturedProjects />
            </FadeInSection>
            <FadeInSection delay={100} className="mt-6">
              <DataAnalysisProjects />
            </FadeInSection>
          </section>
          <section id="experience" className="scroll-mt-24">
            <FadeInSection delay={0}>
              <TechnicalSkills />
            </FadeInSection>
            <FadeInSection delay={100} className="mt-6">
              <Internships />
            </FadeInSection>
          </section>
          <FadeInSection className="scroll-mt-24">
            <Education />
          </FadeInSection>
          <FadeInSection className="scroll-mt-24">
            <Certifications />
          </FadeInSection>
          <FadeInSection className="scroll-mt-24">
            <ExtraCurricular />
          </FadeInSection>
          <section id="contact" className="scroll-mt-24">
            <FadeInSection>
              <Contact />
            </FadeInSection>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;