import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function CarouselComp() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const slides = [
    {
      src: 'https://img.freepik.com/premium-photo/model-woman-standing-holding-stylish-shopping-bag-ai_431161-14042.jpg?w=826',
      alt: 'Model woman holding a stylish shopping bag',
      title: 'Elegant Collection',
      description: 'Discover our latest arrivals.',
    },
    {
      src: 'https://img.freepik.com/premium-photo/woman-holding-bag-pose-studio_1004086-308.jpg?w=826',
      alt: 'Woman holding a bag in the studio',
      title: 'Luxury Accessories',
      description: 'Elevate your style with premium accessories.',
    },
    {
      src: 'https://img.freepik.com/premium-photo/woman-fashion-model-wearing-red-holding-red-fashion-bag-against-red-isolated-background_1273080-6845.jpg?w=900',
      alt: 'Fashion model holding a red bag against a red background',
      title: 'Bold & Beautiful',
      description: 'Make a statement with our new bold colors.',
    },
  ];

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={2000}>
      {slides.map((slide, idx) => (
        <Carousel.Item key={idx}>
          <img
            className="d-block w-100"
            src={slide.src}
            alt={slide.alt}
          />
          <Carousel.Caption>
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselComp;
