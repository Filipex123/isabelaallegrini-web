import { X } from 'lucide-react';
import React, { useEffect } from 'react';
import { ProtocolsVariants } from './ProtocolCard';

interface ProtocolModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  itens: string[];
  variant: ProtocolsVariants;
}

const variantStyles = {
  rose: {
    background: 'bg-gradient-to-br from-rose-100 via-pink-50 to-amber-50',
    titleColor: 'text-rose-900',
    descColor: 'text-rose-800',
    itemColor: 'text-rose-950',
    accentColor: 'text-amber-700',
    decorBorder: 'border-rose-300',
    buttonBg: 'bg-rose-900',
    buttonHover: 'hover:bg-rose-800',
  },
  silver: {
    background: 'bg-gradient-to-br from-slate-100 via-gray-50 to-zinc-100',
    titleColor: 'text-slate-900',
    descColor: 'text-slate-700',
    itemColor: 'text-slate-800',
    accentColor: 'text-slate-600',
    decorBorder: 'border-slate-400',
    buttonBg: 'bg-slate-900',
    buttonHover: 'hover:bg-slate-800',
  },
  purple: {
    background: 'bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-50',
    titleColor: 'text-violet-900',
    descColor: 'text-violet-800',
    itemColor: 'text-violet-950',
    accentColor: 'text-fuchsia-700',
    decorBorder: 'border-violet-300',
    buttonBg: 'bg-violet-900',
    buttonHover: 'hover:bg-violet-800',
  },
  gold: {
    background: 'bg-gradient-to-br from-amber-100 via-yellow-50 to-orange-50',
    titleColor: 'text-amber-900',
    descColor: 'text-amber-800',
    itemColor: 'text-amber-950',
    accentColor: 'text-orange-700',
    decorBorder: 'border-amber-400',
    buttonBg: 'bg-amber-900',
    buttonHover: 'hover:bg-amber-800',
  },
};

export const ProtocolModal: React.FC<ProtocolModalProps> = ({ isOpen, onClose, title, description, itens, variant }) => {
  const styles = variantStyles[variant];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto" onClick={onClose}>
      <div className="flex min-h-screen px-4 py-8">
        <div
          className={`
            flex flex-col w-full justify-between items-start
            relative max-w-2xl mx-auto
            ${styles.background}
            rounded-3xl
            shadow-2xl
            p-8
            animate-in fade-in zoom-in duration-300
          `}
          onClick={(e) => e.stopPropagation()}
          style={{ backgroundImage: "url('./src/assets/marmore.jpg')", backgroundSize: 'cover', backgroundBlendMode: 'multiply' }}
        >
          <div>
            <button
              onClick={onClose}
              className={`
              absolute top-6 right-6
              ${styles.buttonBg} ${styles.buttonHover}
              text-white
              rounded-full
              p-2
              transition-all duration-300
              hover:scale-110
              z-10
            `}
              aria-label="Fechar modal"
            >
              <X size={24} />
            </button>

            <div className="absolute top-8 left-8 w-24 h-[2px] bg-current opacity-30" />

            <div className="mt-12 mb-8">
              <h3
                className={`
                ${styles.titleColor}
                text-xs
                tracking-[0.3em]
                uppercase
                font-normal
                mb-4
              `}
              >
                PROTOCOLO
              </h3>
              <h2
                className={`
                ${styles.titleColor}
                text-2xl
                tracking-wide
                uppercase
                font-normal
                mb-6
                pr-12
              `}
              >
                {title}
              </h2>
              <p
                className={`
                ${styles.descColor}
                text-base
                leading-relaxed
                font-normal
              `}
              >
                {description}
              </p>
            </div>

            <div className="space-y-5 mb-8">
              {itens.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span
                    className={`
                    ${styles.itemColor}
                    text-xl
                    mt-0.5
                  `}
                  >
                    •
                  </span>
                  <p
                    className={`
                    ${styles.itemColor}
                    text-sm
                    leading-relaxed
                    font-normal
                    flex-1
                  `}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative mt-12 pt-6 border-t ${styles.decorBorder} border-opacity-30`}>
            <p
              className={`
                ${styles.descColor}
                text-xs
                italic
                font-normal
                text-right
                opacity-80
              `}
            >
              *cada protocolo pode ser adaptado para cada paciente
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
