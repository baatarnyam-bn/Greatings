"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GreetingPage() {
  const [audio] = useState(
    typeof Audio !== "undefined" ? new Audio("/music.mp3") : null
  );

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.volume = 0.5;
    }
  }, [audio]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-100 to-red-200 overflow-hidden">
      {/* Мэндчилгээний текст */}
      <motion.h1
        className="text-xl md:text-4xl font-bold text-pink-500 text-center drop-shadow-lg"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        💖 Баярын мэнд хүргэе! 💖
      </motion.h1>

      {/* Сэтгэл хөдөлгөм үгс */}
      <motion.p
        className="text-sm md:text-2xl text-white mt-4 text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Lorem ipsum dolor sit amet.! 🎁 💐
      </motion.p>

      {/* Цэцэг унах анимашн */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{ left: `${Math.random() * 100}%`, top: "-10%" }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: "100vh", opacity: [1, 1, 0] }}
          transition={{ repeat: Infinity, duration: Math.random() * 5 + 3 }}
        >
          🌸
        </motion.div>
      ))}

      {/* Бөмбөлөг хөөрөх анимашн */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          style={{ right: `${Math.random() * 100}%`, bottom: "-10%" }}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: "-100vh", opacity: [1, 1, 0] }}
          transition={{ repeat: Infinity, duration: Math.random() * 4 + 3 }}
        >
          🎈
        </motion.div>
      ))}

      {/* Дуу тоглуулах товч */}
      <motion.button
        className="mt-6 px-5 py-2 bg-pink-500 text-white text-sm font-semibold rounded-full shadow-lg transition"
        whileTap={{ scale: 0.9 }}
        onClick={() => audio && audio.play()}
      >
        🎶 Ая тоглуулах
      </motion.button>
    </div>
  );
}
