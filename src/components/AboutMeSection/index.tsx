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
            Tomek - naczelny Fantomek kuchni roślinnej! 🌱👨‍🍳 Z pasją i
            kreatywnością przygotowuję przepyszne, roślinne obiady, które
            zachwycają smakiem i aromatem. Uwielbiam eksperymentować z
            przyprawami, sezonowymi składnikami i nietypowymi połączeniami,
            tworząc dania, które udowadniają, że kuchnia roślinna to czysta
            magia na talerzu! 🍽️✨
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
          src={`flower.svg`}
          alt="leafs"
          className={styles.leaf_image}
          height={100}
        />
      </motion.div>
    </div>
  );
};

export default AboutMeSection;
