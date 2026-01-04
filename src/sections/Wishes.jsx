import React from 'react';
import './Wishes.css';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const wishes = [
    {
        id: 1,
        text: "Happy Birthday Teja! May your day be filled with joy, laughter, and unforgettable moments. Keep shining bright!",
        author: "Bestie"
    },
    {
        id: 2,
        text: "Wishing you another year of success and happiness. You deserve all the best things in life. Enjoy your day!",
        author: "Friend Group"
    },
    {
        id: 3,
        text: "Cheers to another trip around the sun! Hope this year brings you everything you've ever wished for.",
        author: "Family"
    }
];

const Wishes = () => {
    return (
        <section className="wishes-section">
            <div style={{ textAlign: 'center' }}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Warm Wishes
                </motion.h2>
            </div>

            <div className="wishes-grid">
                {wishes.map((wish, index) => (
                    <Tilt key={wish.id} tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
                        <motion.div
                            className="wish-card"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                        >
                            <p className="wish-text">"{wish.text}"</p>
                            <span className="wish-author">- {wish.author}</span>
                        </motion.div>
                    </Tilt>
                ))}
            </div>
        </section>
    );
};

export default Wishes;
