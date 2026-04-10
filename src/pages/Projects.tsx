import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "../data/staticData";

export default function Projects() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[#1a365d] mb-8 text-center">项目作品</h1>

      <div className="space-y-12">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="h-64 lg:h-auto overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-[#1a365d] mb-3">{project.title}</h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <h3 className="text-lg font-semibold mb-3">技术栈</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-[#f7fafc] text-[#4299e1] rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 px-4 py-2 bg-[#1a365d] text-white rounded-md hover:bg-[#2a4a6d] transition-colors"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center space-x-2 px-4 py-2 bg-[#4299e1] text-white rounded-md hover:bg-[#3182ce] transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>演示</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}