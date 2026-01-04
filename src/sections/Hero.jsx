import React, { useEffect, useState } from 'react';
import './Hero.css';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import Cake from '../components/Cake';

const Hero = ({ onComplete }) => {
    const [step, setStep] = useState(1);
    const [hearts, setHearts] = useState([]);
    const [textFinished, setTextFinished] = useState(false);

    useEffect(() => {
        const newHearts = [];
        const symbols = ['❤️', '🦋', '🌸', '✨', '💖'];
        for (let i = 0; i < 20; i++) {
            newHearts.push({
                id: i,
                symbol: symbols[Math.floor(Math.random() * symbols.length)],
                left: Math.random() * 100,
                duration: Math.random() * 10 + 10,
                delay: Math.random() * 5,
                size: Math.random() * 1.5 + 1
            });
        }
        setHearts(newHearts);
    }, []);

    const nextStep = () => setStep(prev => prev + 1);

    const handleFinalStart = () => {
        // Trigger parent callback to show content
        if (onComplete) onComplete();

        // Continuous Confetti
        const duration = 3000;
        const end = Date.now() + duration;
        (function frame() {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#ff9a9e', '#fad0c4'] });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#ff9a9e', '#fad0c4'] });
            if (Date.now() < end) requestAnimationFrame(frame);
        }());
    };

    // Page Transition Variants (Slide Effect)
    const pageVariants = {
        initial: { opacity: 0, x: 100 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: -100 }
    };

    const pageTransition = { duration: 0.5, ease: "easeInOut" };

    return (
        <div className="hero-section">
            {/* Background Elements */}
            {hearts.map(heart => (
                <div key={heart.id} className="floating-element" style={{ left: `${heart.left}%`, animationDuration: `${heart.duration}s`, animationDelay: `${heart.delay}s`, fontSize: `${heart.size}rem` }}>
                    {heart.symbol}
                </div>
            ))}

            <div className="hero-content">
                <AnimatePresence mode='wait'>

                    {/* PAGE 1: Welcome Name */}
                    {step === 1 && (
                        <motion.div key="step1" variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap' }}>
                                <motion.h1 className="main-title"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 1 }}
                                    onAnimationComplete={() => setTextFinished(true)}
                                >
                                    Happy Birthday <span className="title-accent">Teju!</span>
                                </motion.h1>
                            </div>

                            {textFinished && (
                                <motion.button
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="hero-btn"
                                    onClick={() => {
                                        if (window.playMusic) window.playMusic();
                                        nextStep();
                                    }}
                                    style={{ marginTop: '2rem' }}
                                >
                                    Play Music 🎵
                                </motion.button>
                            )}
                        </motion.div>
                    )}

                    {/* PAGE 2: Special Day */}
                    {step === 2 && (
                        <motion.div key="step2" variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✨</div>
                            <h2 className="main-title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>It's Your Special Day Yeyey!</h2>
                            <button className="hero-btn" onClick={nextStep} style={{ marginTop: '2rem' }}>Next ➡️</button>
                        </motion.div>
                    )}

                    {/* PAGE 3: Question */}
                    {step === 3 && (
                        <motion.div key="step3" variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition} style={{ textAlign: 'center' }}>
                            <h2 className="main-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>Do you wanna see what I made?? 🎁</h2>
                            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '3rem' }}>
                                <button className="hero-btn" onClick={nextStep}>Yes! 😍</button>
                                <button className="hero-btn" style={{ background: '#ccc', transform: 'scale(0.9)' }} onClick={() => alert("You have to say YES! 😜")}>No 😢</button>
                            </div>
                        </motion.div>
                    )}

                    {/* PAGE 4: Look at it */}
                    {step === 4 && (
                        <motion.div key="step4" variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>👀</div>
                            <h2 className="main-title" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>Have a look at it, Madam Jiii</h2>
                            <button className="hero-btn" onClick={nextStep} style={{ marginTop: '2rem' }}>Let's Go 🚀</button>
                        </motion.div>
                    )}

                    {/* PAGE 5: Finale with Cake */}
                    {step === 5 && (
                        <motion.div key="step5" variants={pageVariants} initial="initial" animate="in" exit="out" transition={pageTransition} style={{ textAlign: 'center' }}>
                            <h2 className="main-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)' }}>Make a Wish! 🎂</h2>
                            <p className="sub-title">Blow out the candles!</p>

                            {/* Reverted: onAllBlown calls handleFinalStart directly */}
                            <Cake onAllBlown={() => setTimeout(handleFinalStart, 1000)} />

                            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', opacity: 0.7 }}>
                                {/* Fallback button */}
                                <button className="hero-btn" onClick={handleFinalStart} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem' }}>Skip & Open Gift 🎁</button>
                            </div>
                        </motion.div>
                    )}

                </AnimatePresence>
            </div>
        </div>
    );
};

export default Hero;
