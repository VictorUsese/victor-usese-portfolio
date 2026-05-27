import React from 'react';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { portfolioData } from '../mock';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Building impactful solutions across diverse projects and teams
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200 hidden lg:block"></div>

          <div className="space-y-12">
            {experience.map((job, index) => (
              <div
                key={job.id}
                className={`relative flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-teal-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content card */}
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 border-t-4 border-teal-600">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-teal-100 p-3 rounded-lg">
                        <Briefcase className="text-teal-600" size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">
                          {job.title}
                        </h3>
                        <p className="text-lg font-semibold text-teal-600 mb-3">
                          {job.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                          <div className="flex items-center gap-2">
                            <MapPin size={16} />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={16} />
                            <span>{job.period}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3">
                      {job.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="text-teal-600 mt-1.5 flex-shrink-0">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;