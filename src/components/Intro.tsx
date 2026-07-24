import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiGift } from "react-icons/fi";

interface IntroProps {
  onOpen: () => void;
  onFinish: () => void;
}

export default function Intro({ onOpen, onFinish }: IntroProps) {
  const [isOpening, setIsOpening] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, []);

  const openGift = () => {
    if (isOpening) return;

    setIsOpening(true);
    onOpen();
    timerRef.current = window.setTimeout(onFinish, 1450);
  };

  return (
    <main className="intro-page">
      <motion.img
        src="/photos/tram18.jpg"
        alt=""
        aria-hidden="true"
        className="intro-backdrop"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1.02 }}
        transition={{ duration: 8, ease: "easeOut" }}
      />
      <div className="intro-overlay" />
      <div className="intro-grain" aria-hidden="true" />

      <motion.section
        className="intro-content"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        aria-labelledby="gift-title"
      >
        <motion.p
          className="intro-kicker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
        >
          Một món quà nhỏ dành riêng cho
        </motion.p>

        <h1 id="gift-title" className="intro-title">
          Chị Trâm
          <span aria-hidden="true"> ♡</span>
        </h1>

        <div
          className={`envelope-scene ${isOpening ? "is-opening" : ""}`}
          aria-hidden="true"
        >
          <div className="envelope">
            <div className="envelope-back" />
            <div className="letter">
              <span className="letter-date">Gửi chị Trâm,</span>
              <strong>Mỗi bức ảnh là một điều thật đẹp.</strong>
              <span className="letter-signature">— Rio ♡</span>
            </div>
            <div className="envelope-front-left" />
            <div className="envelope-front-right" />
            <div className="envelope-front-bottom" />
            <div className="envelope-flap" />
            <div className="wax-seal">R</div>
          </div>
        </div>

        <motion.p
          className="intro-note"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65 }}
        >
          Có những khoảnh khắc nhỏ, nhưng khi nhớ lại lại thấy thật dịu dàng.
        </motion.p>

        <motion.button
          type="button"
          className="gift-button"
          onClick={openGift}
          disabled={isOpening}
          whileHover={isOpening ? undefined : { y: -2, scale: 1.02 }}
          whileTap={isOpening ? undefined : { scale: 0.98 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85 }}
        >
          <FiGift aria-hidden="true" />
          {isOpening ? "Đang mở món quà..." : "Mở món quà"}
        </motion.button>
      </motion.section>

      <motion.span
        className="intro-corner-note"
        initial={{ opacity: 0, rotate: -8 }}
        animate={{ opacity: 1, rotate: -5 }}
        transition={{ delay: 1.05 }}
        aria-hidden="true"
      >
        made with Rio
      </motion.span>
    </main>
  );
}
