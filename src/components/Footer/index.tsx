"use client";

import { Title, Text, rem } from "@mantine/core";
import SectionContainer from "../common/SectionContainer";
import styles from "./Footer.module.scss";
import sectionContainerStyles from "../common/SectionContainer/SectionContainer.module.scss";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

const Footer = () => {
  return (
    <SectionContainer
      className={sectionContainerStyles.box_footer}
      id="ContactForm"
      backgroundColor="var(--mantine-color-mainGreen-9)"
    >
      <footer className={styles.footer}>
        <div className={styles.footer_info}>
          <div>
            <IconBrandInstagram
              style={{ width: rem(50), height: rem(50), color: "var(--mantine-color-orange-6)" }}
            />
            <IconBrandFacebook
              style={{ width: rem(50), height: rem(50), color: "var(--mantine-color-orange-6)" }}
            />{" "}
          </div>
          <Text c="var(--mantine-color-mainGreen-3)">+66 666 666 666</Text>
          <Text c="var(--mantine-color-mainGreen-3)">fantomek@gmail.com</Text>
        </div>
        <div className={styles.footer_title}>
          <Title order={2} c="var(--mantine-color-mainGreen-3)">
            Kuchenna
          </Title>
          <Title order={2} c="var(--mantine-color-mainGreen-3)">
            Komitywa
          </Title>
        </div>
        <p className={styles.copyright}>©2025 Kuchenna Komitywa. All Rights Reserved.</p>
      </footer>
    </SectionContainer>
  );
};

export default Footer;
