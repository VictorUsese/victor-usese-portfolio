import React from 'react';
import { portfolioData } from '../mock';

const Skills = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, color: 'teal' },
    { title: 'State Management', skills: skills.stateManagement, color: 'blue' },
    { title: 'Backend', skills: skills.backend, color: 'slate' },
    { title: 'Tools & Platforms', skills: skills.tools, color: 'cyan' },
    { title: 'Practices & Soft Skills', skills: skills.practices, color: 'indigo' },
    { title: 'Familiar With', skills: skills.familiarWith, color: 'emerald' }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 hover:scale-105 border-t-4 border-teal-600"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-white text-slate-700 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-teal-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;