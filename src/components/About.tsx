
import React from 'react';
import { Code, Brain, Shield, Globe } from 'lucide-react';

const About = () => {
  const interests = [
    { icon: Code, title: 'Web Development', description: 'Full-stack applications' },
    { icon: Brain, title: 'AI/ML', description: 'Machine learning solutions' },
    { icon: Shield, title: 'Cybersecurity', description: 'Secure applications' },
    { icon: Globe, title: 'Cloud Computing', description: 'Scalable infrastructure' }
  ];

  const techStack = [
    'JavaScript', 'TypeScript', 'React', 'Node.js', 'Python', 'Java',
    'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'TensorFlow'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">Get to know me better</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Bio Section */}
            <div>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-6">
                  I'm a passionate Computer Science Engineer with over 3 years of experience 
                  building scalable web applications and AI solutions. I thrive on solving 
                  complex problems and turning innovative ideas into reality.
                </p>
                
                <p className="mb-6">
                  My journey in tech started with a curiosity about how things work, which 
                  led me to explore everything from frontend frameworks to machine learning 
                  algorithms. I believe in writing clean, maintainable code and creating 
                  user experiences that make a difference.
                </p>

                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing my knowledge through technical blog posts. 
                  I'm always excited to collaborate on projects that push the boundaries of 
                  what's possible.
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Interests Grid */}
            <div className="grid grid-cols-2 gap-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <interest.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {interest.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
