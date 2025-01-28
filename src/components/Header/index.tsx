"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container, Group, Burger, Drawer, NavLink, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { motion, useScroll, useTransform } from "framer-motion";

import styles from "./Header.module.scss";
import { IconX } from "@tabler/icons-react";

const links = [
  { link: "#why", label: "Dlaczego roślinna?" },
  { link: "#about-me", label: "O mnie" },
  { link: "#foods", label: "Jedzonka" },
  { link: "#gallery", label: "Galeria" },
  { link: "#contact", label: "Kontakt" },
];

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [active, setActive] = useState<string | null>();

  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    window.addEventListener("custom-hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("custom-hashchange", handleHashChange);
    };
  }, []);

  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 150],
    ["transparent", "var(--mantine-color-body)"],
  );
  const borderRadius = useTransform(
    scrollY,
    [0, 150],
    ["0rem", "0 0 var(--mantine-radius-xl) var(--mantine-radius-xl)"],
  );
  const boxShadow = useTransform(
    scrollY,
    [0, 150],
    ["0 0 0 rgba(0, 0, 0, 0)", "0 4px 20px rgba(0, 0, 0, 0.1)"],
  );

  const linkItems = links.map((link) => (
    <NavLink
      key={link.label}
      className={styles.link}
      href={link.link}
      label={link.label}
      data-active={active === link.link || undefined}
    />
  ));

  return (
    <>
      <motion.header
        className={styles.header}
        style={{
          backgroundColor,
          borderRadius,
          boxShadow,
        }}
      >
        <Container className={styles.inner}>
          <NavLink
            href="#"
            className={styles.home_link}
            leftSection={
              <Image
                src={`/assets/logo.svg`}
                alt="logo"
                width="65"
                height="60"
              />
            }
          />
          <Group gap={20} visibleFrom="sm">
            {linkItems}
          </Group>
          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="sm"
            size="sm"
          />
        </Container>
      </motion.header>
      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        position="bottom"
        size="100%"
        padding="lg"
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
            height: rem(60),
            backgroundColor: "var(--mantine-color-white)",
          },
        }}
        closeButtonProps={{
          icon: <IconX size={20} stroke={2.5} />,
        }}
      >
        <Image src={`/assets/logo.svg`} alt="logo" width="127" height="116" />
        {links.map((link) => (
          <NavLink
            key={link.label}
            href={link.link}
            className={styles.drawerLink}
            data-active={active === link.link || undefined}
            onClick={() => {
              closeDrawer();
            }}
            label={link.label}
            styles={{
              body: {
                width: "auto",
              },
              description: {
                display: "none",
              },
            }}
          />
        ))}
      </Drawer>
    </>
  );
};

export default Header;
