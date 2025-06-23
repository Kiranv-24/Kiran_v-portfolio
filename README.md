
# Kiran V - Developer Portfolio

A high-end, developer-focused portfolio website built with React, Tailwind CSS, and Framer Motion featuring advanced animations and a code-inspired dark theme.

## 🚀 Features

- **Pure Dark Theme**: Code editor inspired design with terminal aesthetics
- **Advanced Animations**: 3D landing effects, scroll-triggered reveals, and smooth transitions
- **Developer-Focused Design**: Code syntax highlighting, terminal styling, and programming themes
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, typing animations, and copy-to-clipboard functionality
- **Modern Tech Stack**: React 18, Tailwind CSS, Framer Motion

## 🛠️ Tech Stack

- **Frontend**: React 18 with JavaScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Fira Code (monospace)
- **Build Tool**: Vite

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── CodeBackground.jsx    # Animated code background
│   ├── Navigation.jsx        # Sticky navigation with scroll spy
│   ├── HeroSection.jsx       # Landing section with typing effect
│   ├── ProjectsSection.jsx   # Project showcase cards
│   ├── SkillsSection.jsx     # Animated skills display
│   ├── AcademicSection.jsx   # Education information
│   ├── ContactSection.jsx    # Contact form and links
│   └── Footer.jsx           # Footer with back-to-top
├── data/
│   └── portfolioConfig.js    # Editable content configuration
├── pages/
│   └── Index.jsx            # Main page component
├── App.jsx                  # App root component
├── main.jsx                 # Entry point
└── index.css               # Global styles and custom utilities
```

## 🎨 Customization

All content can be easily customized by editing `src/data/portfolioConfig.js`:

```javascript
export const portfolioConfig = {
  personal: {
    name: "Your Name",
    tagline: "Your Professional Tagline",
    about: "Your bio here...",
    profileImage: "/path-to-your-image.jpg",
    email: "your.email@example.com",
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile"
  },
  // ... add your projects, skills, and academic info
};
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- **Desktop**: Full feature experience with hover effects
- **Tablet**: Adapted layouts and touch-friendly interactions
- **Mobile**: Streamlined design with mobile-first approach

## ⚡ Performance Features

- **Code Splitting**: Components loaded efficiently
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Lazy Loading**: Scroll-based animation triggers
- **Minimal Bundle**: Tree-shaken dependencies

## 🌐 Deployment

### GitHub Pages
```bash
npm run build
npm run deploy
```

### Vercel
1. Connect your GitHub repository to Vercel
2. Deploy automatically on every push

### Netlify
1. Connect your GitHub repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `dist`

## 🎯 Key Features Explained

### Code Background Animation
- Floating code snippets using HTML5 Canvas
- Smooth scrolling effects with opacity transitions
- Customizable code snippets in `CodeBackground.jsx`

### Typing Effect
- Character-by-character typing animation
- Configurable speed and cursor styling
- Used in hero section tagline

### Scroll Animations
- Intersection Observer API for performance
- Framer Motion for smooth transitions
- Staggered animations for list items

### Terminal Styling
- Code editor color scheme
- Monospace font (Fira Code)
- Syntax highlighting simulation

## 📄 License

MIT License - feel free to use this portfolio as a template for your own!

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

Built with ❤️ by Kiran V
