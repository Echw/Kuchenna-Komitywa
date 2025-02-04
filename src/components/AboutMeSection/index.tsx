import { Image } from "@mantine/core";
import { motion, Variants } from "motion/react";

import styles from "./AboutMeSection.module.scss";
import SectionTitle from "../common/SectionTitle";
import TextContainer from "../common/TextContainer";

const textsVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5,
    },
  },
};

const AboutMeSection = () => {
  return (
    <div className={styles.section}>
      <Image
        src="/assets/tomek.jpg"
        alt="Mistrz kuchni"
        className={styles.main_image}
      />
      <div className={styles.description}>
        <SectionTitle title="O mnie" color="var(--mantine-color-orange-6)" />
        <motion.div variants={textsVariants} initial="hidden" animate="visible">
          <TextContainer c="white" pt="xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </TextContainer>
        </motion.div>
      </div>
      <Image
        src={`/assets/about_deco.png`}
        alt="leafs"
        w={135}
        className={styles.leaf_image}
      />
    </div>
  );
};

export default AboutMeSection;
