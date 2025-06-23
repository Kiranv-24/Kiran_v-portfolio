
import React, { useEffect, useRef } from 'react';

const CodeBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Code snippets for background
    const codeLines = [
      'const developer = () => {',
      '  return "passionate coder";',
      '};',
      'function solve(problem) {',
      '  while (problem.exists()) {',
      '    code();',
      '  }',
      '}',
      'import React from "react";',
      'const skills = ["AI", "Web", "ML"];',
      'export default Portfolio;'
    ];

    const particles = [];
    
    // Create floating code particles
    for (let i = 0; i < 15; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeLines[Math.floor(Math.random() * codeLines.length)],
        speed: 0.2 + Math.random() * 0.3,
        opacity: 0.1 + Math.random() * 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw floating code
      particles.forEach(particle => {
        ctx.font = '14px "Fira Code", monospace';
        ctx.fillStyle = `rgba(6, 182, 212, ${particle.opacity})`;
        ctx.fillText(particle.text, particle.x, particle.y);
        
        particle.y -= particle.speed;
        
        if (particle.y < -20) {
          particle.y = canvas.height + 20;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)' }}
    />
  );
};

export default CodeBackground;
