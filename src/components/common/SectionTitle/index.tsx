import { Title } from "@mantine/core";
import { motion, Variants } from "motion/react";

interface SectionTitleProps {
  title: string;
  color?: string;
}

const titleGroupVariants: Variants = {
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

const SectionTitle = ({ title, color }: SectionTitleProps) => {
  return (
    <motion.div
      variants={titleGroupVariants}
      initial="hidden"
      animate="visible"
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
