
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LanguageToggleProps {
  lang: string;
  setLang: (lang: string) => void;
  theme: 'light' | 'dark';
}

const LanguageToggle = ({ lang, setLang, theme }: LanguageToggleProps) => {
  return (
    <motion.div 
      className="fixed top-6 right-6 flex gap-3 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {[
        { code: 'fr', flag: '🇫🇷', label: 'Français' },
        { code: 'en', flag: '🇬🇧', label: 'English' }
      ].map((l) => (
        <motion.button
          key={l.code}
          onClick={() => setLang(l.code)}
          className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all duration-300 ${
            lang === l.code 
              ? 'bg-linear-to-r from-[#2435b3] to-[#292C43] text-white shadow-lg' 
              : theme === 'dark'
                ? 'bg-[#bc4408] backdrop-blur-sm text-[#feded5] border border-[#2435b3]/30'
                : 'bg-white/90 backdrop-blur-sm text-[#292C43] border border-[#2435b3]/30'
          } hover:scale-105`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="font-semibold tracking-wider">{l.code.toUpperCase()}</span>
        </motion.button>
      ))}
    </motion.div>
  );
};

export default LanguageToggle;