import  { useState } from 'react';


const PortfolioPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const portfolioItems = [
    { type: 'image', src: '/assets/portfolio1.jpg' },
    { type: 'video', src: '/assets/portfolio1.mp4' },
    { type: 'image', src: '/assets/portfolio2.jpg' },
  ];

  const handleNext = () => setCurrentSlide((prev) => (prev + 1) % portfolioItems.length);
  const handlePrev = () => setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);

  return (
    <div className="portfolio-page">
      <h1>Our Work</h1>
      <div className="carousel">
        <button onClick={handlePrev} className="carousel-button">◀</button>
        {portfolioItems[currentSlide].type === 'image' ? (
          <img src={portfolioItems[currentSlide].src} alt="Portfolio" />
        ) : (
          <video src={portfolioItems[currentSlide].src} controls />
        )}
        <button onClick={handleNext} className="carousel-button">▶</button>
      </div>
    </div>
  );
};

export default PortfolioPage;
