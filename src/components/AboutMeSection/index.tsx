import { Title, Image, Text } from "@mantine/core";

import styles from "./AboutMeSection.module.scss";
import SectionContainer from "../common/SectionContainer";

const AboutMeSection = () => {
  return (
    <SectionContainer
      id="about-me"
      backgroundColor="var(--mantine-color-mainGreen-8)"
    >
      <div className={styles.about_me}>
        <Image
          src="/assets/tomek.jpg"
          alt="Mistrz kuchni"
          className={styles.about_me_img}
        />
        <div className={styles.about_me_description_container}>
          <Title order={2} c="var(--mantine-color-orange-6)">
            O mnie
          </Title>
          <Text pt={"xl"} c="white" className={styles.about_me_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
        <Image
          src={`/assets/about_deco.png`}
          alt="leafs"
          w={135}
          className={styles.about_deco_1}
        />
      </div>
    </SectionContainer>
  );
};

export default AboutMeSection;
