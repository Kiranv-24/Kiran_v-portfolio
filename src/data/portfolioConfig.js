
export const portfolioConfig = {
  personal: {
    name: "Kiran V",
    tagline: "Aspiring Software Developer | AI & Web Explorer",
    about: "I am a highly motivated developer with a strong grasp of AI, deep learning, and full-stack web development. I enjoy writing elegant code and solving real-world problems with scalable tech.",
    profileImage: "/placeholder.svg", // Replace with actual image path
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile"
  },
  
  academic: {
    degree: "B.Tech in Computer Science",
    cgpa: "8.6 / 10",
    note: "Focused on placements and core software engineering principles"
  },
  
  skills: {
    languages: ["C++", "Python", "JavaScript"],
    tools: ["PyTorch", "React", "GitHub", "Tailwind", "Node.js"]
  },
  
  projects: [
    {
      id: 1,
      title: "Phishing Detection using Deep Learning",
      description: "Built a phishing detection system using PyTorch-based MLP models; achieved 95%+ accuracy.",
      tech: ["Python", "PyTorch", "Matplotlib"],
      github: "https://github.com/yourusername/phishing-detector",
      demo: null
    },
    {
      id: 2,
      title: "AI Chat Application",
      description: "Real-time chat app with AI integration and natural language processing capabilities.",
      tech: ["React", "Node.js", "Socket.io"],
      github: "https://github.com/yourusername/ai-chat",
      demo: "https://ai-chat-demo.vercel.app"
    },
    {
      id: 3,
      title: "Code Compiler API",
      description: "REST API for executing code in multiple programming languages with secure sandboxing.",
      tech: ["Node.js", "Docker", "Express"],
      github: "https://github.com/yourusername/code-compiler",
      demo: null
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive developer portfolio with dark theme and advanced animations.",
      tech: ["React", "Tailwind", "Framer Motion"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://kiran-portfolio.vercel.app"
    }
  ]
};
