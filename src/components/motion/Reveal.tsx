import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "up" (default) slides in from below; "none" is a plain fade. */
  direction?: "up" | "none";
}

/**
 * Wraps content in a subtle scroll-triggered fade + slide-up reveal.
 * Animates once, the moment the element enters the viewport — cheap,
 * no layout thrash, and respects prefers-reduced-motion automatically
 * via framer-motion's built-in handling.
 */
const Reveal = ({ children, className, delay = 0, direction = "up" }: RevealProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y: direction === "up" ? 24 : 0 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

export default Reveal;
