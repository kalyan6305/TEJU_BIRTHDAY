import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Balloon = ({ delay, color, left }) => {
    return (
        <motion.div
            initial={{ y: '120vh', opacity: 0.8 }}
            animate={{ y: '-120vh' }}
            transition={{
                duration: 15,
                delay: delay,
                repeat: Infinity,
                ease: "linear"
            }}
            style={{
                position: 'fixed',
                left: left,
                width: '50px',
                height: '70px',
                borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
                backgroundColor: color,
                zIndex: 0,
                boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.05)',
            }}
        >
            {/* String */}
            <div style={{
                position: 'absolute',
                bottom: '-20px',
                left: '50%',
                width: '1px',
                height: '20px',
                background: 'rgba(139, 94, 82, 0.3)', /* Brownish string */
                transform: 'translateX(-50%)'
            }} />
        </motion.div>
    );
};

const Balloons = () => {
    // Pastel Palette
    const colors = ['#ff9a9e', '#fad0c4', '#a18cd1', '#fbc2eb', '#8fd3f4'];
    const [balloons, setBalloons] = useState([]);

    useEffect(() => {
        const newBalloons = [];
        for (let i = 0; i < 15; i++) {
            newBalloons.push({
                id: i,
                delay: Math.random() * 20,
                color: colors[Math.floor(Math.random() * colors.length)],
                left: `${Math.random() * 100}vw`
            });
        }
        setBalloons(newBalloons);
    }, []);

    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', overflow: 'hidden' }}>
            {balloons.map(b => (
                <Balloon key={b.id} {...b} />
            ))}
        </div>
    );
};

export default Balloons;
