import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const LUXURY_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  yOffset?: number;
}

export const EditorialReveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  className = "",
  yOffset = 28,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay, ease: LUXURY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ImageRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const ImageReveal: React.FC<ImageRevealProps> = ({
  children,
  delay = 0,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.04, clipPath: "inset(6% 0% 0% 0%)" }}
      whileInView={{ opacity: 1, scale: 1, clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.05, delay, ease: LUXURY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface ParallaxFrameProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  speed?: number;
}

export const ParallaxFrame: React.FC<ParallaxFrameProps> = ({
  src,
  alt,
  className = "",
  imgClassName = "",
  speed = 40,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-speed, speed]);

  return (
    <div ref={ref} className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className={`w-full h-[116%] -mt-[8%] object-cover ${imgClassName}`}
      />
    </div>
  );
};
