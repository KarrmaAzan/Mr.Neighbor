import  { useState, useEffect } from 'react';


const LandingPage = () => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const video = document.getElementById('intro-video');
      if (video) video.play();
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnd = () => {
    setShowLogo(true);
  };

  return (
    <div className="landing-page">
      {!showLogo ? (
        <video
          id="intro-video"
          className="landing-video"
          src="/assets/intro_video.mp4"
          muted
          onEnded={handleVideoEnd}
        ></video>
      ) : (
        <div className="landing-logo-container">
          <img src="/assets/logo.png" alt="Logo" className="logo-appear" />
          <p className="scroll-prompt">Scroll to Begin</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
