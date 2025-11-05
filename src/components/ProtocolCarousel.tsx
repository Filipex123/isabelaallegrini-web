import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

interface ProtocolCarouselProps {
  protocols: React.ReactNode[];
}

export const ProtocolCarousel: React.FC<ProtocolCarouselProps> = ({ protocols }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? protocols.length - 1 : prevIndex - 1));
  }, [protocols.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === protocols.length - 1 ? 0 : prevIndex + 1));
  }, [protocols.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    }

    if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto">
      <div ref={carouselRef} className="relative overflow-hidden touch-pan-y" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {protocols.map((protocol, index) => (
            <div key={index} className="min-w-full flex justify-center px-4 md:px-8">
              <div className="w-full max-w-2xl">{protocol}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goToPrevious}
        className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10
                   bg-white/90 hover:bg-white
                   text-neutral-800
                   rounded-full p-3 md:p-4
                   shadow-lg hover:shadow-xl
                   transition-all duration-300
                   hover:scale-110
                   backdrop-blur-sm"
        aria-label="Protocolo anterior"
      >
        <ChevronLeft size={24} className="md:w-6 md:h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10
                   bg-white/90 hover:bg-white
                   text-neutral-800
                   rounded-full p-3 md:p-4
                   shadow-lg hover:shadow-xl
                   transition-all duration-300
                   hover:scale-110
                   backdrop-blur-sm"
        aria-label="Próximo protocolo"
      >
        <ChevronRight size={24} className="md:w-6 md:h-6" />
      </button>

      <div className="flex justify-center gap-3 mt-8">
        {protocols.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`
              transition-all duration-300
              rounded-full
              ${index === currentIndex ? 'w-8 h-3 bg-neutral-800' : 'w-3 h-3 bg-neutral-300 hover:bg-neutral-400'}
            `}
            aria-label={`Ir para protocolo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
