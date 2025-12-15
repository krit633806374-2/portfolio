"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function Lanyard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 20 });
  const springY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-100, 100], [12, -12]);
  const rotateY = useTransform(springX, [-100, 100], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="relative flex items-center justify-center h-[400px] pointer-events-auto"
    >
      {/* เชือก */}
      <div className="absolute -top-40 h-40 w-[2px] bg-gradient-to-b from-cyan-400 via-cyan-500 to-transparent" />

      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="w-64 rounded-2xl bg-gradient-to-br from-white to-gray-100 p-6 shadow-2xl border border-gray-200"
      >
        <div className="w-full h-64 bg-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile1.png"
            alt="lanyard"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <p className="mt-3 text-center text-gray-900 font-semibold text-lg">
          Krit Intarajinda
        </p>
        <p className="text-center text-sm text-gray-600 font-medium">
          Frontend Developer
        </p>
      </motion.div>
    </div>
  );
}
