import React from 'react';
import './Gallery.css';
import { motion } from 'framer-motion';

const photos = [
    { id: 1, src: './01.jpeg' },
    { id: 2, src: './02.jpeg' },
    { id: 3, src: './03.jpeg' },
    { id: 4, src: './04.jpeg' },
    { id: 5, src: './05.jpeg' },
    { id: 6, src: './06.jpeg' },
    { id: 7, src: './07.jpeg' },
    { id: 8, src: './08.jpeg' },
    { id: 9, src: './09.jpeg' },
    { id: 10, src: './10.jpeg' },
    { id: 11, src: './11.jpeg' },
    { id: 12, src: './12.jpeg' },
];

const Gallery = () => {
    return (
        <section className="gallery-section">
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Memories
            </motion.h2>

            <div className="gallery-grid">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        className="gallery-item"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <img src={photo.src} alt="Memory" className="gallery-img" />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Gallery;
