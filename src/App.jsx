import React, { useState } from 'react';
import './App.css';
import Hero from './sections/Hero';
import MemoryBook from './sections/MemoryBook';
import Wishes from './sections/Wishes';
import Footer from './components/Footer';
import AudioPlayer from './components/AudioPlayer';
import MagicCursor from './components/MagicCursor';
import Balloons from './components/Balloons';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showContent, setShowContent] = useState(false);

  return (
    <div className="app-container">
      <MagicCursor />
      <Balloons />
      <AudioPlayer />

      {/* 
          If content is NOT shown, Hero behaves as the Intro Wizard.
          Once onComplete is called, we can either unmount Hero or keep it.
          To keep the "Open Gift" effect, we can unmount Hero and mount content 
          or just render content below and scroll to it.
          
          Based on "separated page", let's unmount Hero so it feels like a transition.
      */}

      <AnimatePresence mode='wait'>
        {!showContent ? (
          <Hero key="hero" onComplete={() => setShowContent(true)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <MemoryBook />
            <Wishes />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
