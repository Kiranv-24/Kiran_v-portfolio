
export const portfolioData = {
  personal: {
    name: "Kiran V",
    tagline: "Aspiring Developer | Passionate about AI and Web Development",
    intro: "Computer Science student with a passion for artificial intelligence and modern web development. Currently pursuing B.Tech with a focus on machine learning, deep learning, and full-stack development.",
    email: "your.email@example.com",
    phone: "+91-XXXXXXXXXX",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    resumeUrl: "/resume.pdf" // Update this with your actual resume URL
  },
  
  academic: {
    degree: "B.Tech in Computer Science",
    cgpa: "8.6 / 10",
    description: "Passionate computer science student with a strong foundation in programming, data structures, and algorithms. Actively seeking placement opportunities in software development, with particular interest in AI/ML and web technologies."
  },
  
  skills: {
    languages: ["C++", "Python", "JavaScript", "TypeScript"],
    frameworks: ["PyTorch", "React.js", "Tailwind CSS", "Node.js", "Express.js"],
    tools: ["Git", "GitHub", "REST APIs", "MongoDB", "PostgreSQL"],
    concepts: ["Machine Learning", "Deep Learning", "OOP", "Data Structures", "Algorithms"]
  },
  
  projects: [
    {
      id: 1,
      title: "Phishing Detection using Deep Learning",
      description: "Built a phishing website detector using Multi-Layer Perceptron in PyTorch, achieving 95%+ accuracy on test datasets.",
      techStack: ["Python", "PyTorch", "Matplotlib", "Pandas", "Scikit-learn"],
      githubUrl: "https://github.com/yourusername/phishing-detector",
      liveUrl: "", // Optional
      featured: true
    },
    {
      id: 2,
      title: "E-Commerce React App",
      description: "Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.",
      techStack: ["React", "Node.js", "MongoDB", "Express", "Stripe API"],
      githubUrl: "https://github.com/yourusername/ecommerce-app",
      liveUrl: "https://your-ecommerce-demo.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "AI Chatbot with NLP",
      description: "Intelligent chatbot using natural language processing for customer service automation with sentiment analysis.",
      techStack: ["Python", "NLTK", "Flask", "TensorFlow", "REST API"],
      githubUrl: "https://github.com/yourusername/ai-chatbot",
      liveUrl: "",
      featured: false
    },
    {
      id: 4,
      title: "Personal Portfolio Website",
      description: "Responsive portfolio website built with React and Tailwind CSS, featuring dark mode and smooth animations.",
      techStack: ["React", "Tailwind CSS", "TypeScript", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/portfolio",
      liveUrl: "https://your-portfolio.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "Stock Price Predictor",
      description: "Machine learning model to predict stock prices using historical data and technical indicators with LSTM networks.",
      techStack: ["Python", "TensorFlow", "Pandas", "NumPy", "Matplotlib"],
      githubUrl: "https://github.com/yourusername/stock-predictor",
      liveUrl: "",
      featured: true
    }
  ]
};
