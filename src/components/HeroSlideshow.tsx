'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slideshowImages = [
  'IMG_0000.jpg',
  'IMG_5097.jpg',
  'IMG_4959.jpg',
  'IMG_1514.jpg',
  'IMG_1659.jpg',
  'IMG_1756.jpg',
  'IMG_1815.jpg',
  'IMG_2065.jpg',
  'IMG_2071.jpg',
  'IMG_2267.jpg',
  'IMG_2298.jpg',
  'IMG_2327.jpg',
  'IMG_2587.jpg',
  'IMG_2728.jpg',
  'IMG_2882.jpg',
  'IMG_2895.jpg',
  'IMG_2931.jpg',
  'IMG_3069.jpg',
  'IMG_3092.jpg',
];

const exhibitionWings = [
  'Wheels & Rims Wing',
  'Automotive Mechanics',
  'Future Automotive Technology',
  'Art, Film and Television',
  'Living Automotive History',
  'Automotive Restoration',
  'Motorsport Heritage',
  'Hypercars and Supercars',
  'The American Muscle Era',
  'Alternative Energy & EVs',
  'Coachbuilding & Custom Design',
  'Interactive STEM Driving Labs',
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWingIdx, setCurrentWingIdx] = useState(0);
  const [flipActive, setFlipActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideshowImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipActive(true);
      setTimeout(() => {
        setCurrentWingIdx((prev) => (prev + 1) % exhibitionWings.length);
        setFlipActive(false);
      }, 350);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="banner"
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: '650px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#0B0F19',
      }}
    >
      {/* 19 authentic client photos in crossfade */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        {slideshowImages.map((imgName, index) => (
          <div
            key={imgName}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1.2s ease-in-out',
              zIndex: currentSlide === index ? 2 : 1,
            }}
          >
            <Image
              src={`/images/slideshow/${imgName}`}
              alt={`New York Auto Museum exhibit ${index + 1}`}
              fill
              priority={index === 0}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>
        ))}
      </div>

      {/* Cinematic Gradient Shade transitioning into Light Theme #F8FAFC */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            'linear-gradient(to bottom, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.4) 40%, rgba(15, 23, 42, 0.75) 80%, #F8FAFC 100%)',
          zIndex: 3,
        }}
      />

      {/* Hero Content */}
      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          maxWidth: '900px',
          padding: '0 24px',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 5.5vw, 4.8rem)',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            color: '#FFFFFF',
            textShadow: '0 4px 30px rgba(0, 0, 0, 0.9)',
            marginBottom: '20px',
          }}
        >
          New York Auto Museum
        </h1>

        {/* 3D Flip Rolling Wings Text */}
        <div
          style={{
            fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)',
            color: '#F8FAFC',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '36px',
            textShadow: '0 2px 16px rgba(0, 0, 0, 0.9)',
          }}
        >
          <span style={{ color: '#E2E8F0' }}>Permanent Exhibitions &amp; Wings:</span>
          <div
            className="flip-container"
            style={{
              display: 'inline-block',
              minWidth: '280px',
              textAlign: 'left',
            }}
          >
            <span
              className="flip-text"
              style={{
                color: '#EF4444',
                fontWeight: 800,
                borderBottom: '2px solid rgba(239, 68, 68, 0.8)',
                paddingBottom: '2px',
                transform: flipActive ? 'rotateX(90deg)' : 'rotateX(0deg)',
                opacity: flipActive ? 0 : 1,
              }}
            >
              {exhibitionWings[currentWingIdx]}
            </span>
          </div>
        </div>

        {/* Learn More Button */}
        <div>
          <a
            href="#past-future"
            className="btn btn-primary"
            style={{
              padding: '15px 36px',
              fontSize: '1rem',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              fontWeight: 700,
            }}
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Slide Navigation Dots & Image Counter */}
      <div
        style={{
          position: 'absolute',
          bottom: '36px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 15,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#334155',
            marginRight: '8px',
          }}
        >
          {String(currentSlide + 1).padStart(2, '0')} / {String(slideshowImages.length).padStart(2, '0')}
        </span>
        {slideshowImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            style={{
              width: currentSlide === idx ? '24px' : '6px',
              height: '6px',
              borderRadius: '3px',
              backgroundColor: currentSlide === idx ? '#DC2626' : 'rgba(51, 65, 85, 0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
