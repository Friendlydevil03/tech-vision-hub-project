
import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Task Manager',
      shortDescription: 'Smart task management with AI-driven prioritization',
      fullDescription: 'A comprehensive task management application that uses machine learning algorithms to automatically prioritize tasks based on deadlines, importance, and user behavior patterns. Features include natural language processing for task creation, intelligent scheduling, and personalized productivity insights.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      techStack: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'OpenAI API'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      features: [
        'AI-powered task prioritization',
        'Natural language task creation',
        'Smart scheduling algorithms',
        'Productivity analytics dashboard',
        'Cross-platform synchronization'
      ]
    },
    {
      id: 2,
      title: 'E-commerce Analytics Dashboard',
      shortDescription: 'Real-time analytics platform for online retailers',
      fullDescription: 'A comprehensive analytics dashboard built for e-commerce businesses to track sales, inventory, customer behavior, and market trends in real-time. Includes predictive analytics for demand forecasting and automated reporting systems.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      techStack: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'D3.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      features: [
        'Real-time sales monitoring',
        'Customer behavior analytics',
        'Inventory management',
        'Predictive demand forecasting',
        'Automated report generation'
      ]
    },
    {
      id: 3,
      title: 'Blockchain Voting System',
      shortDescription: 'Secure and transparent voting platform using blockchain',
      fullDescription: 'A decentralized voting application built on Ethereum blockchain ensuring complete transparency and security. Features include voter authentication, anonymous voting, real-time result tracking, and immutable vote records.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
      techStack: ['React', 'Solidity', 'Web3.js', 'Ethereum', 'IPFS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      features: [
        'Blockchain-based transparency',
        'Secure voter authentication',
        'Anonymous voting system',
        'Real-time result tracking',
        'Immutable vote records'
      ]
    },
    {
      id: 4,
      title: 'Social Media Sentiment Analyzer',
      shortDescription: 'AI tool for analyzing social media sentiment and trends',
      fullDescription: 'An advanced sentiment analysis tool that monitors social media platforms to gauge public opinion on brands, products, or topics. Uses natural language processing and machine learning to provide actionable insights for businesses and researchers.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=600&h=400&fit=crop',
      techStack: ['Python', 'Flask', 'NLTK', 'Twitter API', 'Chart.js'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      features: [
        'Multi-platform monitoring',
        'Real-time sentiment analysis',
        'Trend identification',
        'Automated reporting',
        'Historical data analysis'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600">Some of my recent work</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="text-gray-500 text-xs">
                        +{project.techStack.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Project Modal */}
          {selectedProject && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
              <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {projects.find(p => p.id === selectedProject)?.title}
                    </h3>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {selectedProject && (
                    <div className="space-y-6">
                      <img
                        src={projects.find(p => p.id === selectedProject)?.image}
                        alt={projects.find(p => p.id === selectedProject)?.title}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      
                      <p className="text-gray-700 leading-relaxed">
                        {projects.find(p => p.id === selectedProject)?.fullDescription}
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h4>
                        <ul className="list-disc list-inside text-gray-700 space-y-1">
                          {projects.find(p => p.id === selectedProject)?.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-3">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {projects.find(p => p.id === selectedProject)?.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-4 pt-4">
                        <a
                          href={projects.find(p => p.id === selectedProject)?.githubUrl}
                          className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                        >
                          <Github size={20} />
                          View Code
                        </a>
                        <a
                          href={projects.find(p => p.id === selectedProject)?.liveUrl}
                          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
