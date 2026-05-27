import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../mock';

const Footer = () => {
  const { contact } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-teal-400">Victor Usese</h3>
            <p className="text-gray-400 leading-relaxed">
              Frontend-focused full-stack engineer building fast, scalable, and human-centered web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }}
                    className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4 mb-4">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-lg hover:bg-teal-600 transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-3 rounded-lg hover:bg-teal-600 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="bg-slate-800 p-3 rounded-lg hover:bg-teal-600 transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              <a
                href={contact.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors duration-300"
              >
                {contact.website}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 text-center text-gray-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} Victor Usese. Built with
            <Heart size={16} className="text-red-500 fill-current" />
            and React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;