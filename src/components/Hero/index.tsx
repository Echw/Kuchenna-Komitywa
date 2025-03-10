"use client";

import { Box, Title, Group } from "@mantine/core";
import { motion, Variants } from "motion/react";
import clsx from "clsx";

import styles from "./Hero.module.scss";
import { ScrollIcon } from "./ScrollIcon";
import TextContainer from "../common/TextContainer";

const ANIMATIONS: Record<string, Variants> = {
  container: {
    hidden: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  },
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
  scrollIcon: {
    hidden: {
      opacity: 0,
      bottom: "0%",
    },
    animate: {
      opacity: 1,
      bottom: "5%",
      transition: {
        duration: 0.5,
        delay: 1.5,
        ease: "easeOut",
      },
    },
  },
};

const HeroImages = () => {
  return (
    <motion.div
      className={styles.hero_img_group}
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="animate"
    >
      {Array.from({ length: 9 }).map((_, index) => (
        <motion.img
          key={index}
          src={`/assets/hero/leaf-${index + 1}.png`}
          className={styles[`img_${index}`]}
          animate={{
            rotate: [0, 5],
            transition: {
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            },
          }}
          initial={{ rotate: 0 }}
        />
      ))}
    </motion.div>
  );
};

interface HeroProps {
  subtitle?: string;
}

const Hero = ({ subtitle }: HeroProps) => {
  const titleLetters = ["K", "u", "c", "h", "e", "n", "n", "a"];

  return (
    <motion.div
      variants={ANIMATIONS.container}
      initial="hidden"
      animate="animate"
      className={styles.hero}
    >
      <Box className={styles.container}>
        <motion.div variants={ANIMATIONS.fadeInUp} transition={{ delay: 0.25 }}>
          <Group gap={2} className={styles.title_group}>
            <Title order={1} className={clsx(styles.title, styles.title1)}>
              {titleLetters.map((letter, index) => (
                <span key={index}>{letter}</span>
              ))}
            </Title>
          </Group>
          <Group className={styles.subtitle_group}>
            <div className={styles.subtitle_background}></div>
            <Title
              order={2}
              size="h2"
              className={clsx(styles.title, styles.title2)}
            >
              Komitywa
            </Title>
          </Group>
        </motion.div>

        <motion.div variants={ANIMATIONS.fadeInUp} transition={{ delay: 1 }}>
          <TextContainer className={styles.description} mt="xl">
            {subtitle}
          </TextContainer>
        </motion.div>

        <motion.div
          variants={ANIMATIONS.scrollIcon}
          className={styles.scroll_icon}
          style={{ position: "absolute", bottom: "0%" }}
        >
          <ScrollIcon />
        </motion.div>
      </Box>

      <HeroImages />
    </motion.div>
  );
};

export default Hero;
