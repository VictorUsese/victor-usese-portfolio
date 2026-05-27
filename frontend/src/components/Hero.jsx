import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { portfolioData } from '../mock';

const Hero = () => {
  const { hero, contact } = portfolioData;

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Profile placeholder */}
        <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 p-1 shadow-2xl">
                <img
                src={hero.image}
                alt={hero.name}
                className="w-full h-full rounded-full object-cover"
                />
            </div>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          {hero.name}
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl text-teal-400 font-semibold mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {hero.tagline}
        </p>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {hero.subtitle}
        </p>

        {/* Quote */}
        <blockquote className="text-xl italic text-gray-400 max-w-2xl mx-auto mb-12 border-l-4 border-teal-500 pl-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          "{hero.quote}"
        </blockquote>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            variant="outline"
            className="border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-slate-900 px-8 py-6 text-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
          >
            <Github size={28} />
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={28} />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="text-gray-400 hover:text-teal-400 transition-all duration-300 hover:scale-110"
          >
            <Mail size={28} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-teal-400 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-teal-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;