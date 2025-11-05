import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import logo from '../assets/favicon.png';
import { ProtocolModal } from './ProtocolModal';

export type ProtocolsVariants = 'rose' | 'silver' | 'purple' | 'gold';

interface ProtocolCardProps {
  title: string;
  description: string;
  itens: string[];
  variant?: ProtocolsVariants;
}

interface ProtocolCardCarouselProps {
  cards: ProtocolCardProps[];
}

const variantStyles = {
  rose: {
    background: 'bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50',
    titleColor: 'text-rose-900',
    descColor: 'text-rose-800',
    itemColor: 'text-rose-950',
    accentColor: 'text-amber-700',
    decorBorder: 'border-rose-300',
  },
  silver: {
    background: 'bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100',
    titleColor: 'text-slate-900',
    descColor: 'text-slate-700',
    itemColor: 'text-slate-800',
    accentColor: 'text-slate-600',
    decorBorder: 'border-slate-400',
  },
  purple: {
    background: 'bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-50',
    titleColor: 'text-violet-900',
    descColor: 'text-violet-800',
    itemColor: 'text-violet-950',
    accentColor: 'text-fuchsia-700',
    decorBorder: 'border-violet-300',
  },
  gold: {
    background: 'bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-50',
    titleColor: 'text-amber-900',
    descColor: 'text-amber-800',
    itemColor: 'text-amber-950',
    accentColor: 'text-orange-700',
    decorBorder: 'border-amber-400',
  },
};

export const ProtocolCardCarousel: React.FC<ProtocolCardCarouselProps> = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState<ProtocolCardProps | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const getStyle = (variant: string) => {
    return variantStyles[variant as keyof typeof variantStyles] || variantStyles.rose;
  };

  const handleCardMobileClick = (card: ProtocolCardProps) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  }, [cards.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  }, [cards.length]);

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

  const renderCardDesktop = (card: ProtocolCardProps) => {
    const styles = getStyle(card.variant || 'rose');

    return (
      <div className="w-full max-w-2xl mx-24 px-4">
        <div
          className={`hidden md:block relative w-full h-full max-w-lg mx-auto  ${styles.background} border rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl  transition-all duration-500 ease-out hover:scale-[1.02]  `}
          style={{ backgroundImage: "url('./src/assets/marmore.jpg')", backgroundSize: 'cover', opacity: 0.6, backgroundBlendMode: 'multiply' }}
        >
          <div className="absolute top-8 left-8 w-32 h-[2px] bg-current opacity-30" />
          <div className="flex flex-col justify-between w-full h-full">
            <div>
              <div className="absolute top-8 right-8">
                <img src={logo} alt="Icone" className="w-24 h-24" />
              </div>

              <div className="mt-16 mb-8">
                <h3 className={`${styles.titleColor} text-xs md:text-sm tracking-[0.3em] uppercase font-normal mb-4`}>PROTOCOLO</h3>
                <h2 className={`${styles.titleColor} text-2xl md:text-3xl tracking-wide uppercase font-normal mb-6 `}>{card.title}</h2>
                <p className={`  ${styles.descColor} text-base md:text-lg leading-relaxed font-normal `}>{card.description}</p>
              </div>

              <div className="space-y-5 mb-8">
                {card.itens.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <span className={`  ${styles.itemColor} text-xl mt-0.5 transition-transform group-hover:scale-125  duration-300  `}>•</span>
                    <p className={` ${styles.itemColor}  text-sm md:text-base  leading-relaxed font-normal flex-1 `}>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative mt-12 pt-6 border-t ${styles.decorBorder} border-opacity-30`}>
              <p className={` ${styles.descColor} text-xs md:text-sm  italic font-normal  text-right opacity-80  mb-4 mr-4 `}>*cada protocolo pode ser adaptado para cada paciente</p>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-current opacity-20 rounded-br-2xl" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCardMobile = (card: ProtocolCardProps) => {
    const styles = getStyle(card.variant || 'rose');

    return (
      <button
        onClick={() => handleCardMobileClick(card)}
        className={`md:hidden relative w-full ${styles.background} border rounded-2xl p-6 shadow-md active:shadow-xl transition-all duration-300 active:scale-[0.98] text-left`}
        style={{ backgroundImage: "url('./src/assets/marmore.jpg')", backgroundSize: 'cover', opacity: 0.6, backgroundBlendMode: 'multiply' }}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-4">
            <h3 className={` ${styles.titleColor} text-[10px] tracking-[0.3em] uppercase font-normal mb-2`}>PROTOCOLO</h3>
            <h2 className={` ${styles.titleColor} text-lg tracking-wide uppercase font-normal`}>{card.title}</h2>
          </div>
          <ChevronRight className={`${styles.accentColor} flex-shrink-0`} size={24} />
        </div>
      </button>
    );
  };

  return (
    <>
      {cards.map((card, index) => (
        <div key={index} className="mb-6 md:mb-0">
          {renderCardMobile(card)}
        </div>
      ))}

      <div className="relative w-full max-w-7xl mx-auto">
        <div ref={carouselRef} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {cards.map((card) => (
              <div key={card.title} className="w-full max-w-2xl">
                {renderCardDesktop(card)}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToPrevious}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-10  bg-white/90 hover:bg-white text-neutral-800 rounded-full p-3 md:p-4shadow-lg hover:shadow-xltransition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Protocolo anterior"
        >
          <ChevronLeft size={24} className="md:w-6 md:h-6" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-neutral-800 rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 backdrop-blur-sm"
          aria-label="Próximo protocolo"
        >
          <ChevronRight size={24} className="md:w-6 md:h-6" />
        </button>

        <div className="flex justify-center gap-3 mt-8">
          {cards.map((_, index) => (
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

      {selectedCard && (
        <ProtocolModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedCard!.title}
          description={selectedCard!.description}
          itens={selectedCard!.itens}
          variant={selectedCard!.variant || 'rose'}
        />
      )}
    </>
  );
};
