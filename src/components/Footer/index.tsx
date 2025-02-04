import { rem } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

import styles from "./Footer.module.scss";
import SectionTitle from "../common/SectionTitle";
import TextContainer from "../common/TextContainer";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_info}>
        <div>
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
        </div>
        <TextContainer c="var(--mantine-color-mainGreen-3)">
          +66 666 666 666
        </TextContainer>
        <TextContainer c="var(--mantine-color-mainGreen-3)">
          fantomek@gmail.com
        </TextContainer>
      </div>
      <div className={styles.footer_title}>
        <SectionTitle title="Kuchenna" color="var(--mantine-color-orange-6)" />
        <SectionTitle title="Komitywa" color="var(--mantine-color-orange-6)" />
      </div>
      <p className={styles.copyright}>
        ©2025 Kuchenna Komitywa. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
