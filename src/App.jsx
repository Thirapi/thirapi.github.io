import { BsPersonVcard, BsArchive, BsTelephoneForward, BsSpotify } from "react-icons/bs";
import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { GiPistolGun } from "react-icons/gi";
import Menu from './components/Menu'
import { SpotifyProvider } from './components/SpotifyProvider';
import NowPlaying from './components/NowPlaying';
import './App.css'

function App() {
  const openInNewTab = () => {
    window.open('https://thirapi.vercel.app/', '_blank', 'noopener,noreferrer');
  };

  const commingSoon = () => {
    alert("under construction")
  }

  const [position, setPosition] = useState({ x: 700, y: 100 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    console.log(position.x, position.y);
  };

  return (
    <div className="background" onMouseMove={handleMouseMove}>
      <div className="blur-layer"></div>
      <motion.div
        className="circle box"
        animate={{ x: `${position.x}px`, y: `${position.y}px` }}
        transition={{
          ease: "easeInOut",
        }}
      />
      <motion.main
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}  
      >
      <div className='main--header'><motion.img 
      src="https://avatars.githubusercontent.com/u/132630759" 
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      />
      <motion.span
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        thirapi
      </motion.span>
      </div>
      <hr/>
      <div className='main--body'>
        <motion.span
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="main--body--items"
        >
          A student passionate about technology and always eager to learn more.
        </motion.span>
      </div>
      <hr/>
      <SpotifyProvider>
          <NowPlaying icon={<BsSpotify />}/>
     </SpotifyProvider>
      </motion.main>
    </div>
  )
}

export default App
