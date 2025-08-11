import React from 'react';

const educationData = [
  {
    title: 'B.Tech in Data Science',
    institution: 'Malla Reddy University (2022–2026) - CGPA: 8.45',
    number: '1'
  },
  {
    title: 'Intermediate (MPC)',
    institution: 'Narayana Junior College (2020–2022) - Percentage:78.6%',
    number: '2'
  },
  {
    title: 'SSC',
    institution: 'Bhashyam E.M. High School - CGPA: 10/10',
    number: '3'
  }
];

const Education = () => {
  return (
    <div className="bg-blue-600/90 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-3xl font-bold mb-4" style={{ fontFamily: 'Petrona, serif' }}>
        Education
      </h2>
      <p className="text-blue-100 mb-8 leading-relaxed">
        My academic journey has provided a strong foundation in Computer Science, with a focus on Data Science and a consistent record of high achievement.
      </p>
      
      <div className="space-y-8">
        {educationData.map((item, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-lg">
                {item.number}
              </div>
              {index < educationData.length - 1 && (
                <div className="w-0.5 h-16 bg-white/30 mt-4"></div>
              )}
            </div>
            <div className="flex-1 pt-1">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-blue-100">{item.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;