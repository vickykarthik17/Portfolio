import React from 'react';
import { Database, Brain, Cloud, Code } from 'lucide-react';

const skills = [
  {
    icon: Database,
    title: 'Data Analysis',
    description: 'Transforming raw data into meaningful insights.'
  },
  {
    icon: Brain,
    title: 'Machine Learning',
    description: 'Building intelligent models for real-world problems.'
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Designing scalable and cost-optimized architectures.'
  },
  {
    icon: Code,
    title: 'Full-Stack Dev',
    description: 'Creating comprehensive web and app solutions.'
  }
];

const ProfileSummary = () => {
  return (
    <div className="bg-white/75 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Petrona, serif' }}>
        Profile Summary
      </h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        I enjoy solving real-world problems using technology, transforming raw data into meaningful insights and products. 
        I am passionate about machine learning, and scalable web solutions, and eager to collaborate and grow in dynamic tech environments.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="text-center group transition-all duration-300 hover:scale-105"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center text-white group-hover:bg-blue-700 transition-colors duration-200">
              <skill.icon className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">{skill.title}</h3>
            <p className="text-sm text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileSummary;