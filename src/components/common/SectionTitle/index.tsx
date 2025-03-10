import { Title } from "@mantine/core";
import { motion, Variants } from "motion/react";

const titleVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.25,
    },
  },
};

interface SectionTitleProps {
  title: string;
  color?: string;
}

const SectionTitle = ({ title, color }: SectionTitleProps) => {
  return (
    <motion.div
      variants={titleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Title
        fz={{ base: 38, md: 48, lg: 56 }}
        order={2}
        c={color}
        style={{ textAlign: "center" }}
      >
        {title}
      </Title>
    </motion.div>
  );
};

export default SectionTitle;
