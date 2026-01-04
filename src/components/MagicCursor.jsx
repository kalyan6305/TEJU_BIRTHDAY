import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const MagicCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Add new point to trail
            const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
            setTrail((prev) => [...prev.slice(-20), newPoint]); // Keep last 20 points
        };

        window.addEventListener('mousemove', updateMousePosition);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
        };
    }, []);

    useEffect(() => {
        // Cleanup old trail points
        const interval = setInterval(() => {
            setTrail(prev => prev.filter(p => Date.now() - p.id < 500));
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <motion.div
                style={{
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    border: '2px solid var(--primary)',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    x: mousePosition.x - 10,
                    y: mousePosition.y - 10
                }}
                transition={{ type: 'spring', damping: 20 }}
            />
            {trail.map((point) => (
                <motion.div
                    key={point.id}
                    initial={{ opacity: 1, scale: 1 }}
                    animate={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        position: 'fixed',
                        left: point.x,
                        top: point.y,
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: `hsl(${Math.random() * 360}, 100%, 70%)`,
                        pointerEvents: 'none',
                        zIndex: 9998
                    }}
                />
            ))}
        </>
    );
};

export default MagicCursor;
