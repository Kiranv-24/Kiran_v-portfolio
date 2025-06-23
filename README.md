
# Kiran V - Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a professional design.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Framer Motion-inspired CSS animations
- **Modern UI**: Glass-morphism effects and gradient designs
- **Easy to Maintain**: All content configurable in `src/data/portfolioData.ts`
- **Performance Optimized**: Fast loading and smooth interactions

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Navigation.tsx   # Sticky navigation with smooth scroll
│   ├── HeroSection.tsx  # Hero section with intro and CTA
│   ├── ProjectsSection.tsx  # Projects showcase with cards
│   ├── SkillsSection.tsx    # Skills with progress bars
│   ├── AboutSection.tsx     # About me and academic info
│   ├── ContactSection.tsx   # Contact form and social links
│   └── Footer.tsx       # Footer with social links
├── data/
│   └── portfolioData.ts # All content configuration
├── pages/
│   └── Index.tsx        # Main page component
└── ...
```

## 🛠️ Customization

### Updating Content

Edit `src/data/portfolioData.ts` to update:
- Personal information
- Projects
- Skills
- Academic details
- Contact information

### Adding New Projects

Add new project objects to the `projects` array in `portfolioData.ts`:

```typescript
{
  id: 6,
  title: "Your Project Title",
  description: "Project description here",
  techStack: ["React", "Node.js", "MongoDB"],
  githubUrl: "https://github.com/yourusername/project",
  liveUrl: "https://your-project-demo.com", // Optional
  featured: true // Will show "Featured" badge
}
```

### Customizing Colors

Update the color scheme in `tailwind.config.ts` and `src/index.css`.

## 🚀 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to GitHub Pages

### Netlify

1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy automatically on push

### Vercel

1. Import your GitHub repository to Vercel
2. Vercel will auto-detect the settings
3. Deploy with one click

## 📱 Mobile Responsiveness

The website is fully responsive and tested on:
- Mobile phones (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🎨 Design Features

- **Glass-morphism effects** for modern aesthetics
- **Gradient backgrounds** with subtle animations
- **Hover effects** on interactive elements
- **Smooth scrolling** navigation
- **Progressive animations** as content enters viewport
- **Professional typography** with good contrast

## 🔧 Technical Details

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Shadcn/ui** components
- **Lucide React** for icons
- **CSS animations** for smooth transitions
- **Local storage** for theme persistence

## 📞 Contact Form

The contact form is currently set up for demonstration. To make it functional:

1. **Option 1 - Formspree**: Replace the form action with Formspree endpoint
2. **Option 2 - EmailJS**: Integrate EmailJS for client-side email sending
3. **Option 3 - Backend API**: Connect to your own backend service

## 📄 Resume Download

Update the `resumeUrl` in `portfolioData.ts` to point to your actual resume file.

## 🌟 Performance

- Optimized images and assets
- Minimal JavaScript bundle
- Efficient CSS with Tailwind
- Fast loading animations
- Responsive images

## 📈 SEO Ready

- Semantic HTML structure
- Meta tags configured
- Accessible design
- Fast loading times

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ by Kiran V
