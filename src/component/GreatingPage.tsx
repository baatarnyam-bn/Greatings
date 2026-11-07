"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GreetingPage() {
  const [audio] = useState(
    typeof Audio !== "undefined" ? new Audio("/music.mp3") : null,
  );

  const [flowerPositions, setFlowerPositions] = useState<number[]>([]);
  const [balloonPositions, setBalloonPositions] = useState<number[]>([]);
  const [playing, setPlaying] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showText2, setShowText2] = useState(false);

  useEffect(() => {
    if (audio) {
      audio.loop = true;
      audio.volume = 0.5;
      audio.onended = () => setPlaying(false);
    }
  }, [audio]);

  useEffect(() => {
    setFlowerPositions(Array.from({ length: 10 }, () => Math.random() * 100));
    setBalloonPositions(Array.from({ length: 5 }, () => Math.random() * 100));
  }, []);

  const handlePlay = () => {
    if (audio) {
      audio.play();
      setPlaying(true);
      setTimeout(() => setShowText(true), 4000);
      setTimeout(() => setShowText2(true), 16000);
    }
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(to bottom, #ffdde1, #ee9ca7)" }}
    >
      {/* Гэрэлтэх эффект */}
      {playing && (
        <motion.div
          className="absolute inset-0 bg-white opacity-10"
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ repeat: Infinity, duration: 3 }}
        />
      )}

      {/* Мэндчилгээний текст */}
      <motion.h1
        className="text-xl md:text-4xl font-bold text-center drop-shadow-lg"
        style={{ color: "#f6339a" }}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        💖 Хөөрхөн Ариукаадаа зориуллаа🌸 💖
      </motion.h1>

      {!playing && (
        <motion.p
          className="text-sm md:text-2xl text-white mt-4 text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          💐 Ая тоглуулаад хүлээгээрэй! 💐
        </motion.p>
      )}

      {/* 5 сек-ийн дараа гарч ирэх текст */}
      {showText && (
        <motion.div
          className="text-sm font-semibold mt-6 text-center px-4 leading-relaxed max-w-lg"
          style={{ color: "#be185d" }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          💕 Чамайг харах бүрдээ өөрийн эрхгүй инээмсэглэж, зүрх минь мааш их
          баяр хөөрөөр дүүрдэг юм шүү. Ийм хөөрхөн чамайгаа хайрлахад ганцхан
          нас минь хүрэлцэхгүй байхаа гэж, нүд салгалгүй ширтэж байхдаа боддог
          байсан. Өдөр бүр хамт байх жижигхэн шалтгааныг олж хором мөч бүрээ
          нандигнан хайрлахыг хүсдэг. 💕
        </motion.div>
      )}

      {/* 12 сек-ийн дараа гарч ирэх текст */}
      {showText2 && (
        <motion.div
          className="text-xs font-semibold text-white mt-6 text-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          💐 Дуустал нь уншсанд баярлалаа🌸 Би нь хүлээж байгаа шүү 💐
        </motion.div>
      )}

      {/* 🌸 Цэцэг унах анимашн */}
      {flowerPositions.map((left, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{ left: `${left}%`, top: "-10%" }}
          initial={{ y: -100, opacity: 0, rotate: 0 }}
          animate={{ y: "100vh", opacity: [1, 1, 0], rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 5 + 3,
            ease: "easeIn",
          }}
        >
          🌸
        </motion.div>
      ))}

      {/* 🎈 Бөмбөлөг хөөрөх анимашн */}
      {balloonPositions.map((right, i) => (
        <motion.div
          key={i}
          className="absolute text-3xl"
          style={{ right: `${right}%`, bottom: "-10%" }}
          initial={{ y: 100, opacity: 0, x: 0 }}
          animate={{
            y: "-100vh",
            opacity: [1, 1, 0],
            x: [-10, 10, -10, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: Math.random() * 4 + 3,
            ease: "easeOut",
          }}
        >
          🎈
        </motion.div>
      ))}

      {playing &&
        Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-lg text-yellow-300"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 2 + 1,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.div>
        ))}

      {/* 🎶 Дуу тоглуулах товч */}
      <motion.button
        style={{
          backgroundColor: playing ? "#22c55e" : "#f6339a",
        }}
        className="mt-6 px-5 py-2 text-white text-sm font-semibold rounded-full shadow-lg transition"
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          if (playing) {
            audio?.pause();
            setPlaying(false);
            setShowText(false);
          } else {
            handlePlay();
          }
        }}
      >
        {playing ? "🔊 Тоглож байна..." : "🎶 Ая тоглуулах"}
      </motion.button>
    </div>
  );
}
