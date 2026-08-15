"use client";

import { motion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function AnimatedText({
  text,
  className = "",
  tag = "p",
  wordByWord = true,
  delay = 0,
}) {
  const Tag = tag;

  if (!wordByWord) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        <Tag className={className}>{text}</Tag>
      </motion.div>
    );
  }

  const words = text.split(" ");

  return (
    <Tag className={`${className} overflow-hidden`}>
      <span className="flex flex-wrap gap-x-2 gap-y-0">
        {words.map((word, i) => (
          <motion.span
            key={i}
            custom={i + delay * 10}
            variants={wordVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-30px" }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
