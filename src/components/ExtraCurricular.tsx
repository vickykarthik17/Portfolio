import React from 'react';

const extraCurricular = [
  'Vice President – University Sports Club',
  'Participant in Smart India Hackathon (SIH)',
  'Competed in coding contests and tech fests',
  'Completed Deloitte and Accenture job simulations'
];

const strengths = [
  'Leadership',
  'Quick learner',
  'Strong analytical thinker',
  'Adaptable and team player'
];

const ExtraCurricular = () => {
  return (
    <div className="bg-blue-600/90 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Petrona, serif' }}>
        Extra-Curricular & Strengths
      </h2>
      <p className="text-blue-100 mb-8 leading-relaxed">
        Actively participated in university activities and tech competitions, demonstrating leadership, quick learning, and strong analytical skills.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Extra-Curricular</h3>
          <ul className="space-y-3">
            {extraCurricular.map((activity, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-blue-100">{activity}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-4 border-b border-white/30 pb-2">Strengths</h3>
          <ul className="space-y-3">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 bg-white rounded-full mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-blue-100">{strength}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExtraCurricular;