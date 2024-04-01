import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Carousel.css';
import EventsImg from './img/1200x400img.jpg';

const CarouselPage = () => {
  // Önceki buton için render fonksiyonu
  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 15 }}>
        &#10094; {/* Sol ok simgesi */}
      </button>
    );

  // Sonraki buton için render fonksiyonu
  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 15 }}>
        &#10095; {/* Sağ ok simgesi */}
      </button>
    );

  const arrowStyles = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: 2,
    background: 'none',
    border: 'none',
    fontSize: '40px', 
    color: '#333', 
  };

  return (
    <Carousel 
      autoPlay 
      interval={5000}
      infiniteLoop
      renderArrowPrev={renderArrowPrev} 
      renderArrowNext={renderArrowNext}
    >
      <div>
         <img src={EventsImg} alt="Event 1" />
       </div>
       <div>
         <img src={EventsImg} alt="Event 2" />
       </div>
      <div>
      <img src={EventsImg} alt="Event 3" />
     </div>
   </Carousel>
  );
};

export default CarouselPage;
