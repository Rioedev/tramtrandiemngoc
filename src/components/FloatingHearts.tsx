import { useMemo } from "react";
import { motion } from "framer-motion";

export default function FloatingHearts() {
  const hearts = useMemo(
    () =>
      Array.from({ length: 7 }, (_, index) => ({
        id: index,
        left: `${8 + ((index * 17) % 84)}%`,
        duration: 9 + (index % 3) * 1.6,
        delay: index * 0.85,
        size: 13 + (index % 3) * 4,
      })),
    [],
  );

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden" aria-hidden="true">
      {hearts.map((heart) => (
        <motion.span
          key={heart.id}
          className="absolute bottom-[-2rem] text-rose-300/75"
          style={{ left: heart.left, fontSize: heart.size }}
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 0.75, 0],
            y: [0, "-108vh"],
            x: [0, heart.id % 2 === 0 ? 18 : -18, 0],
            rotate: [0, 12, -8],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  );
}
