import { useEffect, useRef } from 'react';
import './Background.css';

const Background = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        // Configuration
        const isMobile = window.innerWidth < 768;
        const starCount = isMobile ? 50 : 100; // Reduce stars on mobile for performance
        const planetCount = isMobile ? 2 : 3;

        const stars = [];
        const planets = [];

        // Resize handler
        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', resize);
        resize();

        // Star Class
        class Star {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = -10;
                this.size = Math.random() * 2 + 0.5; // 0.5 to 2.5px
                this.speed = Math.random() * 0.3 + 0.1; // Slow drift
                this.opacity = Math.random();
                this.twinkleSpeed = Math.random() * 0.02 + 0.005;
            }

            update() {
                this.y += this.speed;
                // Twinkle effect
                this.opacity += this.twinkleSpeed;
                if (this.opacity > 1 || this.opacity < 0.2) this.twinkleSpeed = -this.twinkleSpeed;

                if (this.y > canvas.height) this.reset();
            }

            draw(ctx) {
                ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(this.opacity)})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Planet Class
        class Planet {
            constructor() {
                this.reset();
                this.y = Math.random() * canvas.height;
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + 100;
                this.size = Math.random() * 60 + 40; // 40-100px radius
                this.speed = Math.random() * 0.2 + 0.1;
                this.hue = Math.random() * 360;
                this.color1 = `hsla(${this.hue}, 70%, 50%, 0.8)`;
                this.color2 = `hsla(${this.hue + 40}, 70%, 30%, 0.1)`;
                this.parallax = Math.random() * 0.5 + 0.5;
            }

            update() {
                this.y -= this.speed; // Move up (simulating dive down)
                if (this.y < -200) this.reset();
            }

            draw(ctx) {
                const gradient = ctx.createRadialGradient(
                    this.x - this.size / 3,
                    this.y - this.size / 3,
                    this.size / 10,
                    this.x,
                    this.y,
                    this.size
                );
                gradient.addColorStop(0, this.color1);
                gradient.addColorStop(1, 'rgba(0,0,0,0)'); // Fade edge

                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();

                // Ring (optional, adds detail)
                if (Math.random() > 0.5) {
                    ctx.strokeStyle = `hsla(${this.hue}, 70%, 60%, 0.1)`;
                    ctx.beginPath();
                    ctx.ellipse(this.x, this.y, this.size * 1.5, this.size * 0.4, Math.PI / 4, 0, Math.PI * 2);
                    ctx.stroke();
                }
            }
        }

        // Initialize
        for (let i = 0; i < starCount; i++) stars.push(new Star());
        for (let i = 0; i < planetCount; i++) planets.push(new Planet());

        // Nebula Gradient Colors (Static background)
        const bgGradientColors = [
            [10, 10, 20],   // Deep Space
            [25, 20, 40],   // Purple Nebula
            [10, 25, 40]    // Blue Nebula
        ];

        const render = () => {
            // Background Gradient (Scroll based)
            const scrollY = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min(scrollY / maxScroll, 1);

            // Simple interpolation for background tint
            const colorIndex = Math.min(Math.floor(progress * 2), 1);
            const factor = (progress * 2) % 1;

            const c1 = bgGradientColors[colorIndex];
            const c2 = bgGradientColors[colorIndex + 1] || bgGradientColors[bgGradientColors.length - 1];

            const r = Math.round(c1[0] + (c2[0] - c1[0]) * factor);
            const g = Math.round(c1[1] + (c2[1] - c1[1]) * factor);
            const b = Math.round(c1[2] + (c2[2] - c1[2]) * factor);

            ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw Stars (Back layer)
            stars.forEach(star => {
                star.update();
                star.draw(ctx);
            });

            // Draw Planets (Front layer)
            planets.forEach(planet => {
                planet.update();
                planet.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} className="environmental-background" />;
};

export default Background;
