import React from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'Java', 'JavaScript', 'R']
  },
  {
    title: 'Web & App Dev',
    skills: ['React.js', 'HTML, CSS', 'Tailwind', 'Spring Boot']
  },
  {
    title: 'Cloud & Tools',
    skills: ['AWS (S3, RDS, Glue)', 'Git, GitHub']
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB']
  }
];

const TechnicalSkills = () => {
  return (
    <div className="bg-white/75 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Petrona, serif' }}>
        Technical Skills
      </h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        Proficient in a diverse set of programming languages, web development frameworks, cloud platforms, and database technologies.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-blue-600 pb-2">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-gray-700 flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnicalSkills;