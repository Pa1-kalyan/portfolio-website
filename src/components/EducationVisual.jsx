import React from 'react';

const EducationVisual = () => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 500 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="education-svg"
        >
            {/* Background Glow */}
            <circle cx="250" cy="200" r="140" fill="#58a6ff" fillOpacity="0.05" />

            {/* Stack of Books */}
            <rect x="150" y="280" width="200" height="40" rx="4" fill="#30363d" /> {/* Book 1 */}
            <rect x="150" y="280" width="20" height="40" rx="2" fill="#58a6ff" fillOpacity="0.5" /> {/* Spine */}

            <rect x="160" y="240" width="180" height="35" rx="4" fill="#161b22" stroke="#30363d" strokeWidth="2" /> {/* Book 2 */}
            <rect x="170" y="250" width="160" height="5" rx="2" fill="#8b949e" fillOpacity="0.3" /> {/* Pages */}

            {/* Monitor/Laptop Base */}
            <path d="M120 340 L380 340 L390 350 L110 350 Z" fill="#161b22" stroke="#30363d" strokeWidth="2" />

            {/* Graduation Cap */}
            <path d="M250 120 L380 180 L250 240 L120 180 Z" fill="#0d1117" stroke="#58a6ff" strokeWidth="3" strokeLinejoin="round" />
            <path d="M380 180 V220 L250 280 V240 L380 180" fill="#161b22" fillOpacity="0.5" />
            <path d="M250 120 L250 120" stroke="#58a6ff" strokeWidth="2" />

            {/* Tassel */}
            <circle cx="250" cy="180" r="6" fill="#58a6ff" />
            <path d="M250 180 L320 230" stroke="#58a6ff" strokeWidth="2" />
            <circle cx="320" cy="230" r="4" fill="#58a6ff" />

            {/* Floating Code Symbols */}
            <text x="100" y="150" fill="#8b949e" fontSize="24" fontFamily="monospace" opacity="0.6">&lt;/&gt;</text>
            <text x="380" y="120" fill="#8b949e" fontSize="24" fontFamily="monospace" opacity="0.6">{`{ }`}</text>
            <text x="400" y="250" fill="#8b949e" fontSize="20" fontFamily="monospace" opacity="0.4">B.Tech</text>

            {/* Decorative Circles */}
            <circle cx="150" cy="100" r="5" fill="#58a6ff" fillOpacity="0.4" />
            <circle cx="350" cy="80" r="3" fill="#58a6ff" fillOpacity="0.3" />
        </svg>
    );
};

export default EducationVisual;
