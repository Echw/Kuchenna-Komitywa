"use client";

import { Box, Title, Group } from "@mantine/core";
import { Variants, motion } from "motion/react";
import clsx from "clsx";

import styles from "./Hero.module.scss";
import { ScrollIcon } from "./ScrollIcon";
import TextContainer from "../common/TextContainer";

const containerVariants: Variants = {
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
};

const childVariants: Variants = {
  animate: {
    rotate: [0, 5],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const titleGroupVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.25, // Appears after images
    },
  },
};

const descriptionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1, // Appears after titles
    },
  },
};

const scrollIconVariants: Variants = {
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
      ease: "easeOut", // Appears the last
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="animate"
      className={styles.hero}
    >
      <Box className={styles.container}>
        <motion.div variants={titleGroupVariants}>
          <Group gap={2} className={styles.title_group}>
            <Title order={1} className={clsx(styles.title, styles.title1)}>
              {["K", "u", "c", "h", "e", "n", "n", "a"].map((letter, index) => (
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

        <motion.div variants={descriptionVariants}>
          <TextContainer className={styles.description} mt="xl">
            Lorem ipsum dolor sit amet consectetur. Leo auctor consequat at non
            cras.
          </TextContainer>
        </motion.div>

        <motion.div
          variants={scrollIconVariants}
          className={styles.scroll_icon}
          style={{ bottom: "0%" }} // Initial position
        >
          <ScrollIcon />
        </motion.div>
      </Box>

      <motion.div
        className={styles.hero_img_group}
        variants={containerVariants}
        initial="hidden"
        animate="animate"
      >
        {[...Array(9)].map((_, index) => {
          return (
            <motion.img
              key={index}
              src={`/assets/Group-${index}.png`}
              className={styles[`img_${index}`]}
              variants={childVariants}
              animate={{
                rotate: 5,
              }}
              initial={{
                rotate: 0,
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Hero;
