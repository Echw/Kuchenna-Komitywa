import { Image, Text } from "@mantine/core";
import styles from "./AboutMeSection.module.scss";
import SectionTitle from "../common/SectionTitle/SectionTitle";

const AboutMeSection = () => {
  return (
    <>
      <div className={styles.about_me}>
        <Image src="/assets/tomek.jpg" alt="Mistrz kuchni" className={styles.about_me_img} />
        <div className={styles.about_me_description_container}>
          <SectionTitle title="O mnie" color="var(--mantine-color-orange-6)" />
          <Text pt={"xl"} c="white" className={styles.about_me_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
        <Image src={`/assets/about_deco.png`} alt="leafs" w={135} className={styles.about_deco_1} />
      </div>
    </>
  );
};

export default AboutMeSection;
