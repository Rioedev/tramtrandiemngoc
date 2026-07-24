import { motion } from "framer-motion";

export default function FloatingHearts() {
  const hearts = Array.from({ length: 15 });

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {hearts.map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-400"
          initial={{
            opacity: 0,
            y: "100vh",
            x: Math.random() * window.innerWidth,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: ["100vh", "-10vh"],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          💕
        </motion.span>
      ))}
    </div>
  );
}
