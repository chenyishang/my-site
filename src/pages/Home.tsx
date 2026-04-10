import React from "react";
import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react";
import { personalInfo, skills, projects } from "../data/staticData";

export default function Home() {
  return (
    <div>
      {/* 个人简介 */}
      <section className="mb-16 fade-in">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg">
            <img 
              src={personalInfo.avatar} 
              alt={personalInfo.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl font-bold text-[#1a365d] mb-2">{personalInfo.name}</h1>
          <p className="text-xl text-gray-600 mb-4">{personalInfo.title}</p>
          <p className="text-gray-500 max-w-2xl mb-8">{personalInfo.bio}</p>
        </div>
      </section>

      {/* 技能展示 */}
      <section className="mb-16 fade-in delay-200">
        <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">技能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow fade-in delay-300" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-[#4299e1] h-2.5 rounded-full transition-all duration-1000 ease-out" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 项目作品 */}
      <section className="mb-16 fade-in delay-400">
        <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 project-card fade-in delay-500"
              style={{ animationDelay: `${0.5 + index * 0.2}s` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1a365d] mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-[#f7fafc] text-[#4299e1] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#1a365d] hover:text-[#4299e1] transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#1a365d] hover:text-[#4299e1] transition-colors"
                  >
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 联系方式 */}
      <section className="mb-8 fade-in delay-600">
        <h2 className="text-3xl font-bold text-[#1a365d] mb-8 text-center">联系我</h2>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-3">
            <Mail size={20} className="text-[#4299e1]" />
            <span>{personalInfo.email}</span>
          </div>
          <div className="flex items-center space-x-3">
            <Phone size={20} className="text-[#4299e1]" />
            <span>{personalInfo.phone}</span>
          </div>
          <div className="flex space-x-6 mt-4">
            <a 
              href={personalInfo.socialLinks.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#4299e1] transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href={personalInfo.socialLinks.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#4299e1] transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href={personalInfo.socialLinks.twitter} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-600 hover:text-[#4299e1] transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}