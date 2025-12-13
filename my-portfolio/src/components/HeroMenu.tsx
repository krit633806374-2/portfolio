'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const menuItems = ['Home', 'AboutMe', 'Stack&Tools', 'Experience'];

export default function HeroMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('Home');

  return (
    <motion.div
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
      initial={false}
    >
      <motion.div
        className="flex items-center gap-0 rounded-full px-6 py-4 cursor-pointer transition-colors"
        style={{ backgroundColor: '#33333366' }}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        layout
      >
        {/* Menu Text */}
        <motion.span
          className="text-white font-bold text-sm whitespace-nowrap overflow-hidden"
          animate={{
            opacity: isOpen ? 0 : 1,
            width: isOpen ? 0 : 'auto',
            marginRight: isOpen ? 0 : 8
          }}
          transition={{ duration: 0.2 }}
        >
          menu
        </motion.span>

        {/* Menu Items */}
        <motion.div className="flex items-center gap-0" layout>
          {menuItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              animate={isOpen ? {
                opacity: 1,
                width: 'auto',
                paddingLeft: 8,
                paddingRight: 8
              } : {
                opacity: 0,
                width: 0,
                paddingLeft: 0,
                paddingRight: 0
              }}
              transition={{ duration: 0.2 }}
              className={`text-white font-bold text-sm whitespace-nowrap transition-colors px-0.5 py-1 w-fit relative ${
                selectedItem === item ? 'after:content-[\'\'] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-white after:rounded-full' : 'hover:text-gray-300'
              }`}
              onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                setSelectedItem(item);
                if (item.toLowerCase() === 'home') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                  const section = document.querySelector(`[data-section="${item.toLowerCase()}"]`);
                  section?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
