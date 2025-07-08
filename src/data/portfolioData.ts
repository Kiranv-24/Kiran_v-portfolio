
export const portfolioData = {
  personal: {
    name: "Kiran V",
    tagline: "Passionate about Web Development | Exploring the MERN Stack | Diving into DSA!",
    intro: "Computer Science student with a passion for problem solving and full-stack development.",
    email: "kiranv242026@gmail.com",
    phone: "+91-9353235772",
    github: "https://github.com/Kiranv-24",
    linkedin: "https://www.linkedin.com/in/kiran-v-431761259",
    resumeUrl: "/resume.pdf" // Update this with your actual resume URL
  },
  
  academic: {
    degree: "Pursuing B.E in Computer Science from R V College of Engineering",
    cgpa: "9.07 / 10",
    description: "Passionate computer science student with a strong foundation in programming, data structures, and algorithms. Actively seeking placement opportunities in software development, with particular interest in AI/ML and web technologies."
  },
  
  skills: {
    languages: ["C++", "JavaScript", "C"],
    frameworks: ["React.js", "Tailwind CSS", "Node.js", "Express.js"],
    tools: ["Git", "GitHub", "REST APIs", "MongoDB", "PostgreSQL","MySql"],
    concepts: [ "OOP", "Data Structures", "Algorithms","Operating System","Computer Networks","DBMS"]
  },
  
  projects: [
    {
      id: 1,
      title: "TechMart eCommerce Website",
      description: "Developed a fully functional eCommerce platform called TechMart using the MERN stack",
      techStack: ["Node.js", "React JS", "MongoDB", "Express.js","Stripe API"],
      githubUrl: "https://github.com/Kiranv-24/TechMart",
      liveUrl: "https://techmart-weld.vercel.app/", // Optional
      featured: true
    },
    {
      id: 2,
      title: "ML-driven-sales-Analytics",
      description: "Implemented a sales analysis system to extract key insights from historical data, identifying trends and customer behavior",
      techStack: ["NLP","Flask","python","SQL","Machine Learning","Express.js", "Node.js", "MongoDB", "React JS"],
      githubUrl: "https://github.com/Kiranv-24/ML-driven-sales-Analytics",
      liveUrl: "",
      featured: true
    },
    {
      id: 3,
      title: "Progress Report Management System",
      description: "Developed a comprehensive Student Management System with a feature to display internal marks for students.",
      techStack: ["HTML", "CSS", "JavaScript", "MongoDB", "REST API","EJS","Node JS","Express JS"],
      githubUrl: "https://github.com/Kiranv-24/project-2",
      liveUrl: "https://student-management-system-24-1.onrender.com/",
      featured: true
    },
  {
    "id": 5,
    "title": "Traffic Management System using Image Processing",
    "description": "An AI-based traffic management system that uses image processing to detect vehicles and emergency vehicles in real-time. The system prioritizes traffic flow dynamically by analyzing congestion levels from multiple camera feeds and communicates with Arduino-controlled traffic lights to optimize signal timing.",
    "techStack": ["Python", "OpenCV", "FastAPI", "Roboflow", "React JS", "WebSockets"],
    "githubUrl": "https://github.com/Kiranv-24/IDPR-Project",
    "liveUrl": "",
    "featured": true
  },
  {
    "id": 6,
    "title": "Arduino Smart Waste Management System(Simulation)",
    "description": "Smart waste management system using Arduino with ultrasonic sensors to monitor bin levels and categorize waste as dry or wet, displaying real-time status on an LCD.",
    "techStack": ["C++", "Tinkercad"],
    "githubUrl": "https://github.com/Kiranv-24/Solid-waste-management",
    "liveUrl": "",
    "featured": false
  }

  ]
};
