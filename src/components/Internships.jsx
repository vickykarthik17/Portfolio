import React from 'react';

const internships = [
  {
    title: 'AICTE Data Engineering Virtual Internship – AWS Academy',
    period: '(September 2023 – November 2023)',
    achievements: [
      'Built ETL pipelines using AWS Glue.',
      'Managed storage with Amazon S3 and RDS.',
      'Designed serverless architecture with cost-optimization.'
    ]
  },
  {
    title: 'Data Science Intern – Prodigy Infotech',
    period: '(June 2024 – July 2024)',
    achievements: [
      'Cleaned and processed data using pandas and NumPy.',
      'Built machine learning models using Scikit-learn.',
      'Visualized results using matplotlib and seaborn.'
    ]
  }
];

const Internships = () => {
  return (
    <div className="bg-white/75 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Petrona, serif' }}>
        Internships
      </h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        Gained practical experience in data engineering and data science, building ETL pipelines, managing cloud storage, and developing machine learning models.
      </p>
      
      <div className="space-y-8">
        {internships.map((internship, index) => (
          <div key={index} className="border-l-4 border-blue-600 pl-6 hover:border-l-6 transition-all duration-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{internship.title}</h3>
            <p className="text-gray-600 mb-4 italic">{internship.period}</p>
            <ul className="space-y-2">
              {internship.achievements.map((achievement, achievementIndex) => (
                <li key={achievementIndex} className="text-gray-700 flex items-start">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internships;