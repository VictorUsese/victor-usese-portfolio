import React from 'react';
import { ExternalLink, Wrench } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world applications demonstrating technical expertise and problem-solving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
            >
              {/* Project Image */}
              <div className="relative h-64 bg-gradient-to-br from-slate-700 to-slate-900 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                {project.liveLink ? (
                  <Button
                    asChild
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white transition-all duration-300"
                  >
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} />
                      View Live Demo
                    </a>
                  </Button>
                ) : (
                  <Button
                    disabled
                    className="w-full"
                    variant="outline"
                  >
                    <Wrench size={18} className="mr-2" />
                    In Production
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;