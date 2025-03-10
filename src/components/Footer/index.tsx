"use client";

import { rem } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";
import { motion, Variants } from "motion/react";

import styles from "./Footer.module.scss";
import SectionTitle from "../common/SectionTitle";
import TextContainer from "../common/TextContainer";

const ANIMATIONS: Record<string, Variants> = {
  icons: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 },
    },
  },
  contactText: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.3 + i * 0.2 },
    }),
  },
  sectionTitle: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.7 + i * 0.2 },
    }),
  },
  copyright: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 1.1 },
    },
  },
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <motion.div
        className={styles.footer_info}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={ANIMATIONS.icons}>
          <IconBrandInstagram
            style={{
              width: rem(50),
              height: rem(50),
              color: "var(--mantine-color-orange-6)",
            }}
          />
          <IconBrandFacebook
            style={{
              width: rem(50),
              height: rem(50),
              color: "var(--mantine-color-orange-6)",
            }}
          />
        </motion.div>
        <motion.div custom={0} variants={ANIMATIONS.contactText}>
          <TextContainer c="var(--mantine-color-mainGreen-3)">
            +66 666 666 666
          </TextContainer>
        </motion.div>
        <motion.div custom={1} variants={ANIMATIONS.contactText}>
          <TextContainer c="var(--mantine-color-mainGreen-3)">
            fantomek@gmail.com
          </TextContainer>
        </motion.div>
      </motion.div>
      <div className={styles.footer_title}>
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATIONS.sectionTitle}
        >
          <SectionTitle
            title="Kuchenna"
            color="var(--mantine-color-orange-6)"
          />
        </motion.div>
        <motion.div
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={ANIMATIONS.sectionTitle}
        >
          <SectionTitle
            title="Komitywa"
            color="var(--mantine-color-orange-6)"
          />
        </motion.div>
      </div>
      <motion.p
        className={styles.copyright}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={ANIMATIONS.copyright}
      >
        ©2025 Kuchenna Komitywa. All Rights Reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
