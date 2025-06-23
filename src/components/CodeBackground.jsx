
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

    // Enhanced code snippets for background
    const codeLines = [
      'const developer = {',
      '  name: "Kiran V",',
      '  skills: ["AI", "Web Dev"],',
      '  passion: "∞"',
      '};',
      'function innovate() {',
      '  while (true) {',
      '    learn();',
      '    code();',
      '    repeat();',
      '  }',
      '}',
      'import { future } from "today";',
      'export default Excellence;',
      'const dreams = async () => {',
      '  await makeItReality();',
      '};',
      '// Building tomorrow today',
      'class Success extends Effort {',
      '  constructor() {',
      '    super.dedication();',
      '  }',
      '}',
      'let innovation = true;',
      'console.log("Hello World!");'
    ];

    const particles = [];
    const maxParticles = 25;
    
    // Create floating code particles with enhanced properties
    for (let i = 0; i < maxParticles; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: codeLines[Math.floor(Math.random() * codeLines.length)],
        speed: 0.1 + Math.random() * 0.2,
        opacity: 0.05 + Math.random() * 0.1,
        fontSize: 12 + Math.random() * 4,
        drift: Math.random() * 0.5 - 0.25,
        pulse: Math.random() * Math.PI * 2
      });
    }

    // Golden particles for extra effect
    const goldenParticles = [];
    for (let i = 0; i < 15; i++) {
      goldenParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 1 + Math.random() * 2,
        speed: 0.2 + Math.random() * 0.3,
        opacity: 0.1 + Math.random() * 0.2,
        pulse: Math.random() * Math.PI * 2,
        direction: Math.random() * Math.PI * 2
      });
    }

    let animationId;
    let time = 0;

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw matrix-style grid background
      ctx.strokeStyle = 'rgba(255, 193, 7, 0.02)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw floating code with enhanced effects
      particles.forEach((particle, index) => {
        // Update position
        particle.y -= particle.speed;
        particle.x += particle.drift;
        particle.pulse += 0.02;
        
        // Enhanced opacity with pulse effect
        const pulsedOpacity = particle.opacity + Math.sin(particle.pulse) * 0.03;
        
        ctx.font = `${particle.fontSize}px "Fira Code", monospace`;
        ctx.fillStyle = `rgba(6, 182, 212, ${pulsedOpacity})`;
        ctx.fillText(particle.text, particle.x, particle.y);
        
        // Add subtle glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(6, 182, 212, 0.1)';
        ctx.fillStyle = `rgba(255, 193, 7, ${pulsedOpacity * 0.3})`;
        ctx.fillText(particle.text, particle.x + 1, particle.y + 1);
        ctx.shadowBlur = 0;
        
        // Reset particle if it goes off screen
        if (particle.y < -20) {
          particle.y = canvas.height + 20;
          particle.x = Math.random() * canvas.width;
          particle.text = codeLines[Math.floor(Math.random() * codeLines.length)];
        }
        
        if (particle.x < -200 || particle.x > canvas.width + 200) {
          particle.x = Math.random() * canvas.width;
        }
      });
      
      // Draw golden floating particles
      goldenParticles.forEach((particle) => {
        particle.pulse += 0.03;
        particle.x += Math.cos(particle.direction) * particle.speed;
        particle.y += Math.sin(particle.direction) * particle.speed;
        
        const pulsedOpacity = particle.opacity + Math.sin(particle.pulse) * 0.1;
        const pulsedRadius = particle.radius + Math.sin(particle.pulse * 2) * 0.5;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulsedRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 193, 7, ${pulsedOpacity})`;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = 'rgba(255, 193, 7, 0.3)';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, pulsedRadius * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 193, 7, ${pulsedOpacity * 2})`;
        ctx.fill();
        ctx.shadowBlur = 0;
        
        // Reset particle if it goes off screen
        if (particle.x < -50 || particle.x > canvas.width + 50 || 
            particle.y < -50 || particle.y > canvas.height + 50) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.direction = Math.random() * Math.PI * 2;
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ 
        background: 'radial-gradient(circle at 25% 25%, #1a1a1a 0%, #000000 50%, #000000 100%)'
      }}
    />
  );
};

export default CodeBackground;
