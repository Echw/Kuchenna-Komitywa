"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container, Group, Burger, Drawer, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import styles from "./Header.module.scss";

const links = [
  { link: "/about", label: "Dlaczego roślinna?" },
  { link: "/pricing", label: "O mnie" },
  { link: "/learn", label: "Cennik" },
  { link: "/community", label: "Blog" },
  { link: "/contact", label: "Kontakt" },
];

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [active, setActive] = useState<string | null>();

  const linkItems = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={styles.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <>
      <header className={styles.header}>
        <Container className={styles.inner} pe="xl">
          <Image src={`/assets/logo.svg`} alt="logo" width="127" height="116" />
          <Group gap={20} visibleFrom="sm">
            {linkItems}
          </Group>
          <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size="sm" />
        </Container>
      </header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        position="bottom"
        size="100%"
        padding="md"
        hiddenFrom="sm"
        zIndex={1000000}
        className={styles.mobile_menu}
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
        transitionProps={{ duration: 400, timingFunction: "ease-in-out" }}
        styles={{
          content: {
            backgroundColor: "var(--mantine-color-white)",
            borderRadius: "20px 20px 0 0",
          },
          header: {
            backgroundColor: "var(--mantine-color-white)",
          },
        }}
      >
        <Image src={`/assets/logo.svg`} alt="logo" width="127" height="116" />
        {links.map((link) => (
          <UnstyledButton
            key={link.label}
            onClick={() => {
              setActive(link.link);
              closeDrawer();
            }}
            className={styles.drawerLink}
            data-active={active === link.link || undefined}
          >
            {link.label}
          </UnstyledButton>
        ))}
      </Drawer>
    </>
  );
};

export default Header;
