import React, { useState } from 'react';
import './Cake.css';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';

const Candle = ({ delay, onBlow }) => {
    const [isLit, setIsLit] = useState(true);

    const handleHover = () => {
        if (isLit) {
            setIsLit(false);
            onBlow();
        }
    };

    return (
        <div className="candle" style={{ animationDelay: `${delay}s` }}>
            {isLit ? (
                <div
                    className="flame"
                    onMouseEnter={handleHover}
                    onTouchStart={handleHover}
                />
            ) : (
                <div className="smoke" />
            )}
        </div>
    );
};

const Cake = ({ onAllBlown }) => {
    const [candlesOut, setCandlesOut] = useState(0);
    const totalCandles = 3;

    const handleBlow = () => {
        const newVal = candlesOut + 1;
        setCandlesOut(newVal);
        if (newVal === totalCandles) {
            // All blown out!
            setTimeout(() => {
                if (onAllBlown) onAllBlown();
                confetti({
                    particleCount: 200,
                    spread: 100,
                    origin: { y: 0.7 }
                });
            }, 500);
        }
    };

    return (
        <div className="cake-container">
            {/* Top Layer (Visual Top) */}
            <motion.div
                className="layer layer-top"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: 'spring' }}
            >
                <div className="icing" />

                {/* Candles */}
                <div style={{ display: 'flex', gap: '15px', position: 'absolute', top: '-10px' }}>
                    <Candle delay={1.2} onBlow={handleBlow} />
                    <Candle delay={1.4} onBlow={handleBlow} />
                    <Candle delay={1.6} onBlow={handleBlow} />
                </div>
            </motion.div>

            {/* Middle Layer */}
            <motion.div
                className="layer layer-middle"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring' }}
            >
                <div className="icing" />
            </motion.div>

            {/* Bottom Layer (Visual Bottom) */}
            <motion.div
                className="layer layer-bottom"
                initial={{ y: -200, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, type: 'spring' }}
            >
                <div className="icing" />
            </motion.div>
        </div>
    );
};

export default Cake;
