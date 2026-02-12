import { useEffect, useRef } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
    const lastTimeRef = useRef(0);

    useEffect(() => {
        // Disable on mobile/touch devices
        if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
            return;
        }

        const handleMouseMove = (e) => {
            const now = Date.now();
            // Rate limit: More stars (frequency increased)
            if (now - lastTimeRef.current < 20) return;
            lastTimeRef.current = now;

            const star = document.createElement('div');
            star.className = 'cursor-star';

            // Position at cursor center with slight random offset
            const offsetX = (Math.random() - 0.5) * 10;
            const offsetY = (Math.random() - 0.5) * 10;
            star.style.left = `${e.clientX + offsetX}px`;
            star.style.top = `${e.clientY + offsetY}px`;

            // Random size: Larger now (4px to 8px)
            const size = Math.random() * 4 + 4;
            star.style.width = `${size}px`;
            star.style.height = `${size}px`;

            // Random color: White or Pale Cyan
            const hue = Math.random() < 0.5 ? 200 : 180;
            star.style.backgroundColor = `hsla(${hue}, 100%, 85%, ${Math.random() * 0.4 + 0.4})`;

            document.body.appendChild(star);

            // Cleanup
            setTimeout(() => {
                star.remove();
            }, 800);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return null; // Logic only
};

export default CursorEffect;
