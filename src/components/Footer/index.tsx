"use client";

import { Text, rem } from "@mantine/core";
import { IconBrandInstagram, IconBrandFacebook } from "@tabler/icons-react";

import styles from "./Footer.module.scss";
import SectionContainer from "../common/SectionContainer";
import sectionContainerStyles from "../common/SectionContainer/SectionContainer.module.scss";
import SectionTitle from "../common/SectionTitle/SectionTitle";

const Footer = () => {
  return (
    <SectionContainer
      className={sectionContainerStyles.footer}
      id="footer"
      backgroundColor="var(--mantine-color-mainGreen-9)"
    >
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
          <Text c="var(--mantine-color-mainGreen-3)">+66 666 666 666</Text>
          <Text c="var(--mantine-color-mainGreen-3)">fantomek@gmail.com</Text>
        </div>
        <div className={styles.footer_title}>
          <SectionTitle
            title="Kuchenna"
            color="var(--mantine-color-orange-6)"
          />
          <SectionTitle
            title="Komitywa"
            color="var(--mantine-color-orange-6)"
          />
        </div>
        <p className={styles.copyright}>
          ©2025 Kuchenna Komitywa. All Rights Reserved.
        </p>
      </footer>
    </SectionContainer>
  );
};

export default Footer;
