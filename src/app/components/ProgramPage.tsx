'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';

type Event = {
  time: string;
  title: string;
  place: string;
}

interface ProgramPageProps {
  title: string;
  events: Readonly<Event[]>;
  theme: 'light' | 'dark';
}

const ACCESS_TOKEN = 'PATRICK-FAVEAU-2026';

const ProgramPage = ({ title, events, theme }: ProgramPageProps) => {
  const params = useSearchParams(); 
  const token = params.get('access');

  const hasEveningAccess = token === ACCESS_TOKEN;

  const visibleEvents = React.useMemo(() => {
    if (hasEveningAccess) return events;
  
    return events.filter(event => {
      const title = event.title.toLowerCase();
      const time = event.time.toLowerCase();
  
      // On cache la soirée du samedi
      const isSaturdayEvening =
        time.includes('samedi 18') &&
        (title.includes('soirée') || title.includes('dansante') || title.includes('party') || title.includes('dancing'));
  
      return !isSaturdayEvening;
    });
  }, [events, hasEveningAccess]);  

  const getEventIcon = (title: string) => {
    const titleLower = title.toLowerCase();
  
    if (titleLower.includes('civil') || titleLower.includes('civile')) {
      return '📜'; // Parchemin/document pour mariage civil
    } else if (titleLower.includes('traditionnel') || titleLower.includes('traditionnelle')) {
      return '🌿'; // Feuille pour traditionnel
    } else if (titleLower.includes('religieux') || titleLower.includes('religieuse')) {
      return '⛪'; // Église
    } else if (titleLower.includes('casse-croûte') || titleLower.includes('snack') || titleLower.includes('refreshment')) {
      return '🥪'; // Sandwich
    } else if (titleLower.includes('vin d\'honneur') || titleLower.includes('champagne') || titleLower.includes('reception')) {
      return '🥂'; // Flûte de champagne
    } else if (titleLower.includes('soirée') || titleLower.includes('dansante') || titleLower.includes('party') || titleLower.includes('dance')) {
      return '💃'; // Danse
    } else if (titleLower.includes('mariage') && titleLower.includes('civil')) {
      return '💍'; // Bague de mariage
    } else {
      // Fallback basé sur l'index comme avant
      return '🎉'; // Icône par défaut
    }
  };

  return (
    <div className="py-8 sm:py-10 px-3 sm:px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8 sm:mb-12"
      >
        <h2 className="font-wedding text-4xl md:text-6xl text-center script-linear script-linear-animated script-shadow mb-4 sm:mb-6 px-2">
          <span className="bg-linear-to-r from-[#E2725B] to-[#d7520b] bg-clip-text text-transparent break-words">
            {title}
          </span>
        </h2>
        <p className={`text-base sm:text-lg ${theme === 'dark' ? 'text-[#E2725B]' : 'text-[#d7520b]'} italic px-2`}>
          Suivez chaque moment exceptionnel de notre journée spéciale
        </p>
      </motion.div>

      <div className="relative pl-4 sm:pl-0">
        {/* Timeline line - Position ajustée pour mobile */}
        <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-linear-to-b from-[#FF9671] via-[#f78234] to-[#d7520b]" />

        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-start gap-3 sm:gap-6 mb-8 sm:mb-10 group"
          >
            {/* Timeline dot - Taille réduite sur mobile */}
            <div className="relative z-10 shrink-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: `linear-linear(135deg, ${theme === 'dark' ? '#FF9671' : '#d7520b'}, ${theme === 'dark' ? '#0389f6' : '#2435b3'})` }}
              >
                <span className="'text-[#2435b3]' font-bold text-sm sm:text-lg md:text-xl">{index + 1}</span>
              </div>
              <div className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ background: theme === 'dark' ? '#d7520b' : '#FF7A5C' }}
              />
            </div>

            {/* Event card - Layout responsive */}
            <motion.div
              whileHover={{ scale: 1.02, x: 5 }}
              className={`flex-1 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-md sm:shadow-lg border backdrop-blur-sm min-w-0 ${theme === 'dark'
                  ? 'bg-[#1a0a0a]/60 border-[#E2725B]/20'
                  : 'bg-white/70 border-[#E2725B]/30'
                }`}
            >
              {/* Header avec layout vertical sur mobile */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6 mb-3 sm:mb-4">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0 ${theme === 'dark' ? 'bg-[#2a0a0a]' : 'bg-[ba6a28]'
                    }`}>
                    <span className="text-xl sm:text-2xl">
                      {getEventIcon(event.title)}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-[#ba6a28]'} break-words`}>
                      {event.title}
                    </h3>
                    {/* Place cachée sur mobile car redondante */}
                    <p className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-[#d7520b]' : 'text-[#ba6a28]'} mt-1 hidden sm:block`}>
                      {event.place}
                    </p>
                  </div>
                </div>

                {/* Time badge - Taille adaptative */}
                <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow text-center sm:text-left w-full sm:w-auto"
                  style={{ background: theme === 'dark' ? 'linear-linear(to right, #E2725B, #d7520b)' : 'linear-linear(to right, #d7520b, #FF7A5C)' }}
                >
                  <p className="'text-[#2435b3]' font-bold text-sm sm:text-base">{event.time}</p>
                </div>
              </div>

              {/* Place visible uniquement sur mobile */}
              <div className="flex items-center gap-2 sm:hidden mt-2">
                <span className="text-base">📍</span>
                <p className={`text-xs ${theme === 'dark' ? 'text-[#d7520b]' : 'text-[#ba6a28]'} truncate`}>
                  {event.place}
                </p>
              </div>

              {/* Place version desktop (avec plus de détails) */}
              <div className="hidden sm:flex items-center gap-2 mt-2">
                <span className="text-base sm:text-lg">📍</span>
                <p className={`text-sm italic ${theme === 'dark' ? 'text-[#d7520b]' : 'text-[#ba6a28]'} break-words`}>
                  {event.place}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className={`text-center mt-12 sm:mt-16 p-6 sm:p-8 rounded-xl sm:rounded-2xl border backdrop-blur-sm mx-2 sm:mx-0 ${theme === 'dark'
            ? 'bg-linear-to-r from-[#1a0a0a] to-[#2a0a0a] border-[#E2725B]/30'
            : 'bg-linear-to-r from-[ba6a28] to-[#FFE8E0] border-[#E2725B]/50'
          }`}
      >
        <p className={`text-md sm:text-xl md:text-2xl font-serif italic ${theme === 'dark' ? 'text-[#d7520b]' : 'text-[#ba6a28]'} leading-relaxed`}>
          &quot;Nous avons hâte de partager tous ces moments magiques avec vous !&quot;
        </p>
        <motion.div
          className="flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-2xl sm:text-3xl">💕</span>
          {/* <span className="text-2xl sm:text-3xl">✨</span>
          <span className="text-2xl sm:text-3xl">🎉</span> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProgramPage;