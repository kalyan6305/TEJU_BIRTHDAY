import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const AudioPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    // Expose play function to global window for Hero section
    React.useEffect(() => {
        window.playMusic = () => {
            if (audioRef.current) {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
                setIsPlaying(true);
            }
        };
        return () => {
            delete window.playMusic;
        };
    }, []);

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.log("Audio play failed:", e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="audio-player-container">
            {/* Romantic Piano Birthday Theme - Using a reliable raw github URL or similar for stability */}
            <audio
                ref={audioRef}
                src=""
                loop
                onPlay={() => console.log("Audio started playing")}
                onError={(e) => console.error("Audio Load Error:", e)}
            />

            <motion.button
                onClick={togglePlay}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    boxShadow: '0 0 15px rgba(255, 0, 204, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    cursor: 'pointer'
                }}
            >
                {isPlaying ? '❚❚' : '▶'}
            </motion.button>
        </div>
    );
};

export default AudioPlayer;
