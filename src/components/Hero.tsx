
import React from 'react';
import { Download, Mail, ExternalLink } from 'lucide-react';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <ParticleBackground />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1 hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop&crop=face" 
                  alt="Profile" 
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-fade-in">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alex Johnson
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in">
            Full-Stack Developer | AI Enthusiast | Problem Solver
          </p>

          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-fade-in">
            I build innovative web applications and AI solutions that make a difference. 
            Passionate about clean code, user experience, and cutting-edge technology.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105">
              <Download size={20} />
              Download Resume
            </button>
            
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-50 text-gray-800 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 border border-gray-300 hover:scale-105"
            >
              <Mail size={20} />
              Contact Me
            </button>
            
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-blue-600 hover:text-blue-700 px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105"
            >
              <ExternalLink size={20} />
              View Projects
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
