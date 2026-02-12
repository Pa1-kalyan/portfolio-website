import React from 'react';

const HeroVisual = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 500 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="hero-svg"
        >
            {/* Background Glow */}
            <circle cx="250" cy="200" r="150" fill="#58a6ff" fillOpacity="0.05" />

            {/* Central Server Stack */}
            <rect x="180" y="100" width="140" height="200" rx="4" fill="#161b22" stroke="#58a6ff" strokeWidth="2" />
            <line x1="180" y1="140" x2="320" y2="140" stroke="#30363d" strokeWidth="1" />
            <line x1="180" y1="180" x2="320" y2="180" stroke="#30363d" strokeWidth="1" />
            <line x1="180" y1="220" x2="320" y2="220" stroke="#30363d" strokeWidth="1" />
            <line x1="180" y1="260" x2="320" y2="260" stroke="#30363d" strokeWidth="1" />

            {/* Server Indicators */}
            <circle cx="200" cy="120" r="3" fill="#238636" />
            <circle cx="215" cy="120" r="3" fill="#30363d" />
            <circle cx="200" cy="160" r="3" fill="#238636" />
            <circle cx="200" cy="200" r="3" fill="#238636" />
            <circle cx="200" cy="240" r="3" fill="#238636" />
            <circle cx="200" cy="280" r="3" fill="#238636" />

            {/* Database Cylinder */}
            <path d="M100 280 C100 274.477 117.909 270 140 270 C162.091 270 180 274.477 180 280 V330 C180 335.523 162.091 340 140 340 C117.909 340 100 335.523 100 330 V280 Z" fill="#161b22" stroke="#8b949e" strokeWidth="2" />
            <ellipse cx="140" cy="280" rx="40" ry="10" stroke="#8b949e" strokeWidth="2" />

            {/* Connection Lines */}
            <path d="M140 305 L180 305" stroke="#58a6ff" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M320 200 L380 200" stroke="#58a6ff" strokeWidth="2" strokeDasharray="4 4" />

            {/* Code Window */}
            <rect x="340" y="150" width="120" height="100" rx="4" fill="#0d1117" stroke="#30363d" strokeWidth="2" />
            <rect x="340" y="150" width="120" height="20" rx="4" fill="#30363d" />
            <circle cx="350" cy="160" r="3" fill="#fa7970" />
            <circle cx="360" cy="160" r="3" fill="#faa356" />
            <circle cx="370" cy="160" r="3" fill="#7ce38b" />

            <line x1="350" y1="190" x2="400" y2="190" stroke="#8b949e" strokeWidth="2" strokeLinecap="round" />
            <line x1="350" y1="210" x2="420" y2="210" stroke="#8b949e" strokeWidth="2" strokeLinecap="round" />
            <line x1="350" y1="230" x2="380" y2="230" stroke="#8b949e" strokeWidth="2" strokeLinecap="round" />

            {/* Floating Elements */}
            <rect x="80" y="80" width="40" height="40" rx="8" transform="rotate(-15 100 100)" fill="#161b22" stroke="#58a6ff" strokeWidth="1" strokeOpacity="0.5" />
            <path d="M400 320 L420 300 L440 320" stroke="#58a6ff" strokeWidth="2" fill="none" />
        </svg>
    );
};

export default HeroVisual;
