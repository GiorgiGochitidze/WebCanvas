import React, { useEffect, useRef } from 'react';
import './CSS/StartingInfo.css';

const StartingInfo = () => {
  const startinfoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (startinfoRef.current) {
        const scrollY = window.scrollY;
        const parallaxOffset = scrollY * 0.5; // Adjust the parallax effect by changing the multiplier
        startinfoRef.current.style.backgroundPositionY = `calc(50% + ${parallaxOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="startinfo-container" ref={startinfoRef}>
      <div className="startinfo-overlay"></div>
      <h1 data-aos='fade-up' style={{zIndex: 2, fontSize: '80px'}}>Web Canvas</h1>
      <p data-aos="fade-up" data-aos-delay='400' style={{zIndex: 2}}>🌟A place where digital creativity comes to life🌟</p>
    </div>
  );
};

export default StartingInfo;
