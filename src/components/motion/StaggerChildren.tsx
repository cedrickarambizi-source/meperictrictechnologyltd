import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
}

const container = (staggerDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
};

const StaggerChildren = ({
  children,
  className,
  staggerDelay = 0.1,
  once = true,
}: StaggerChildrenProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once, margin: "-40px" }}
    variants={container(staggerDelay)}
    className={className}
  >
    {children}
  </motion.div>
);

export default StaggerChildren;
