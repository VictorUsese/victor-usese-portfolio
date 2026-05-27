import React from 'react';
import { Code2, Lightbulb, Users } from 'lucide-react';
import { portfolioData } from '../mock';

const About = () => {
  const { about } = portfolioData;

  const highlights = [
    {
      icon: Code2,
      title: "Clean Code Enthusiast",
      description: "Passionate about component architecture, debugging, and performance optimization"
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turn complex problems into clean, performant, and accessible interfaces"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Teaching JavaScript and React has made me a better engineer and collaborator"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <div className="space-y-6">
            {about.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Highlight Cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-teal-600"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-teal-100 p-3 rounded-lg">
                    <item.icon className="text-teal-600" size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;