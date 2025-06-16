
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Vue.js', level: 75 }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 82 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 78 }
      ]
    },
    {
      title: 'AI/ML',
      skills: [
        { name: 'TensorFlow', level: 75 },
        { name: 'PyTorch', level: 70 },
        { name: 'Scikit-learn', level: 80 },
        { name: 'OpenAI APIs', level: 85 }
      ]
    },
    {
      title: 'DevOps/Tools',
      skills: [
        { name: 'AWS', level: 78 },
        { name: 'Docker', level: 82 },
        { name: 'Git/GitHub', level: 90 },
        { name: 'CI/CD', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technologies I work with</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:from-blue-600 group-hover:to-purple-600"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-8">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2023' },
                { name: 'Google Cloud Professional', issuer: 'Google Cloud', year: '2023' },
                { name: 'React Developer Certification', issuer: 'Meta', year: '2022' }
              ].map((cert, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {cert.name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                  <p className="text-xs text-gray-500 mt-1">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
