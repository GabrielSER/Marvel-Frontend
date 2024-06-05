import React, { useState, useEffect } from 'react';
import AnimationComponent from './AnimationComponent';
import HomeComponent from './HomeComponent';

const HomePage = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem('animationPlayed');

    if (!hasPlayed) {
      setShowAnimation(true);
      localStorage.setItem('animationPlayed', 'true');
    }
  }, []);

  return (
    <div className="home-page">
      {showAnimation && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'red',
            zIndex: 1000,
          }}
        >
          <AnimationComponent onComplete={() => setShowAnimation(false)} />
        </div>
      )}
      {!showAnimation && <HomeComponent />}
    </div>
  );
};

export default HomePage;
