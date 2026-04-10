import React from "react";
import { personalInfo, aboutMe, education, workExperience } from "../data/staticData";

export default function About() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-[#1a365d] mb-8 text-center">关于我</h1>

      {/* 个人背景 */}
      <section className="mb-16">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#1a365d] mb-4">个人背景</h2>
          <p className="text-gray-600 mb-6">{aboutMe.introduction}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">兴趣爱好</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {aboutMe.interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">专业优势</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {aboutMe.strengths.map((strength, index) => (
                  <li key={index}>{strength}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 教育经历 */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-[#1a365d] mb-6">教育经历</h2>
        <div className="space-y-6">
          {education.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="text-xl font-semibold text-[#1a365d]">{item.school}</h3>
                <span className="text-gray-500 text-sm">{item.period}</span>
              </div>
              <p className="text-lg text-gray-600 mb-2">{item.degree}</p>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 工作经历 */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold text-[#1a365d] mb-6">工作经历</h2>
        <div className="space-y-6">
          {workExperience.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
                <h3 className="text-xl font-semibold text-[#1a365d]">{item.company}</h3>
                <span className="text-gray-500 text-sm">{item.period}</span>
              </div>
              <p className="text-lg text-gray-600 mb-2">{item.position}</p>
              <p className="text-gray-500">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}