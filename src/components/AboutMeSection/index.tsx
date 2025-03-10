import { useRef } from "react";
import { Image } from "@mantine/core";
import { motion, useScroll, useTransform, Variants } from "motion/react";

import styles from "./AboutMeSection.module.scss";
import SectionTitle from "../common/SectionTitle";
import TextContainer from "../common/TextContainer";

const ANIMATIONS: Record<string, Variants> = {
  imageContainer: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  },
  description: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  },
  text: {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0.5) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.75, delay },
    }),
  },
};

const AboutMeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const leafRotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const leafScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div ref={sectionRef} className={styles.section} id="about">
      <motion.div
        variants={ANIMATIONS.imageContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={styles.image_container}
      >
        <Image
          src="/assets/tomek.jpg"
          alt="Mistrz kuchni"
          className={styles.main_image}
        />
      </motion.div>

      <motion.div
        className={styles.description}
        variants={ANIMATIONS.description}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <SectionTitle title="O mnie" color="var(--mantine-color-orange-6)" />

        <motion.div
          custom={0.5}
          variants={ANIMATIONS.text}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TextContainer c="white" pt="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
          </TextContainer>
        </motion.div>

        <motion.div
          custom={0.7}
          variants={ANIMATIONS.text}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <TextContainer c="white" pt="md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </TextContainer>
        </motion.div>
      </motion.div>

      <motion.div
        className={styles.leaf_container}
        style={{
          rotate: leafRotate,
          scale: leafScale,
        }}
      >
        <Image
          src={`/assets/about_deco.png`}
          alt="leafs"
          className={styles.leaf_image}
          height={100}
        />
      </motion.div>
    </div>
  );
};

export default AboutMeSection;
