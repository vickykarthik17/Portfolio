import React from 'react';

const certificationColumns = [
  [
    'IBM – Data Analytics (Coursera)',
    'ILLINOIS TECH – Computer Networks (Coursera)',
    'IBM – Frontend Web Development (Coursera)',
    'Google – Git and GitHub (Coursera)'
  ],
  [
    'HackerRank – Python Programming',
    'NPTEL – Data Analytics with Python',
    'Saylor Academy – Resume Writing, Interviewing Skills',
    'AICTE – Data Engineering (AWS Virtual Internship)',
    'Prodigy Infotech – Data Science Internship'
  ]
];

const Certifications = () => {
  return (
    <div className="bg-white/75 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Petrona, serif' }}>
        Certifications
      </h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        Completed various certifications from leading institutions, enhancing my knowledge in data analytics, web development, and programming.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {certificationColumns.map((column, columnIndex) => (
          <div key={columnIndex} className="space-y-3">
            {column.map((certification, index) => (
              <div key={index} className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-200"></span>
                <span className="text-gray-700">{certification}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;