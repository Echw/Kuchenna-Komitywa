"use client";

import { Box, Title, Text, Group } from "@mantine/core";
import { Variants, motion } from "motion/react";
import clsx from "clsx";

import styles from "./Hero.module.scss";
import { ScrollIcon } from "./ScrollIcon";
import SectionContainer from "../common/SectionContainer";

const containerVariants: Variants = {
  animate: {
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

const Hero = () => {
  return (
    <SectionContainer id="HeroSection">
      <Box className={styles.container}>
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
        <Text className={styles.description} size="xl" mt="xl">
          Lorem ipsum dolor sit amet consectetur. Leo auctor consequat at non
          cras.
        </Text>
        <ScrollIcon />
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
    </SectionContainer>
  );
};

export default Hero;
