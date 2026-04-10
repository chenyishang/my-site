// 个人信息
export const personalInfo = {
  name: '张三',
  title: '前端开发工程师',
  bio: '专注于Web前端开发，热爱创造美观且功能强大的用户界面。',
  email: 'zhangsan@example.com',
  phone: '13800138000',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
  },
  avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20photo%20of%20a%20software%20engineer&image_size=square',
};

// 技能数据
export const skills = [
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'JavaScript', level: 95 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Tailwind CSS', level: 85 },
  { name: 'Node.js', level: 75 },
  { name: 'Git', level: 80 },
  { name: 'UI/UX Design', level: 70 },
];

// 项目数据
export const projects = [
  {
    id: 1,
    title: '电商网站前端',
    description: '使用React和TypeScript构建的现代化电商网站前端，包含商品展示、购物车和结算功能。',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=e-commerce%20website%20interface%20modern%20design&image_size=landscape_16_9',
    githubLink: 'https://github.com',
    demoLink: '#',
  },
  {
    id: 2,
    title: '个人博客系统',
    description: '基于Next.js的个人博客系统，支持Markdown写作和响应式设计。',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Markdown'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=personal%20blog%20website%20minimal%20design&image_size=landscape_16_9',
    githubLink: 'https://github.com',
    demoLink: '#',
  },
  {
    id: 3,
    title: '任务管理应用',
    description: '使用React和Zustand构建的任务管理应用，支持任务创建、编辑和状态管理。',
    technologies: ['React', 'TypeScript', 'Zustand', 'Tailwind CSS'],
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=task%20management%20app%20clean%20interface&image_size=landscape_16_9',
    githubLink: 'https://github.com',
    demoLink: '#',
  },
];

// 教育经历
export const education = [
  {
    id: 1,
    school: '北京大学',
    degree: '计算机科学与技术',
    period: '2016 - 2020',
    description: '主修计算机科学，学习了数据结构、算法、操作系统等核心课程。',
  },
  {
    id: 2,
    school: '清华大学',
    degree: '软件工程硕士',
    period: '2020 - 2023',
    description: '专注于Web前端开发和用户界面设计，完成了多个实际项目。',
  },
];

// 工作经历
export const workExperience = [
  {
    id: 1,
    company: '腾讯科技',
    position: '前端开发工程师',
    period: '2023 - 至今',
    description: '参与公司核心产品的前端开发，使用React和TypeScript构建用户界面，优化性能和用户体验。',
  },
  {
    id: 2,
    company: '阿里巴巴集团',
    position: '前端实习生',
    period: '2022 - 2023',
    description: '参与电商平台的前端开发，学习和应用现代前端技术栈，提升产品的用户体验。',
  },
];

// 详细个人背景
export const aboutMe = {
  introduction: '我是张三，一名热爱前端开发的工程师，拥有5年的Web开发经验。我擅长使用现代前端技术栈构建美观、高效的用户界面，注重用户体验和代码质量。',
  interests: ['Web前端开发', '用户界面设计', '技术分享', '开源贡献'],
  strengths: ['React生态系统', 'TypeScript', '响应式设计', '性能优化'],
};