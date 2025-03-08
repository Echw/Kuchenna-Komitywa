"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Container, Group, Burger, Drawer, NavLink, rem } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import { useLenis } from "lenis/react";
import { IconX } from "@tabler/icons-react";

import styles from "./Header.module.scss";

const NAVIGATION_LINKS = [
  { link: "#why", label: "Dlaczego roślinna?" },
  { link: "#about-me", label: "O mnie" },
  { link: "#foods", label: "Jedzonka" },
  { link: "#gallery", label: "Galeria" },
  { link: "#contact", label: "Kontakt" },
];

const animations = {
  header: {
    initial: { y: -100, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  },
  link: {
    initial: { y: -20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        delay: 0.2 + i * 0.1,
        ease: "easeOut",
      },
    }),
  },
  mobileMenu: {
    initial: { y: 20, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.1 + i * 0.05,
        ease: "easeOut",
      },
    }),
  },
};

interface NavItemProps {
  link: string;
  label: string;
  index: number;
  mobile?: boolean;
  active: string | null;
  handleLinkClick: (link: string) => void;
}

const NavItem = ({
  link,
  label,
  index,
  mobile = false,
  active,
  handleLinkClick,
}: NavItemProps) => (
  <motion.div
    custom={index}
    initial="initial"
    animate="animate"
    variants={mobile ? animations.mobileMenu : animations.link}
  >
    <NavLink
      className={mobile ? styles.drawerLink : styles.link}
      href={link}
      label={label}
      data-active={active === link || undefined}
      onClick={() => handleLinkClick(link)}
      leftSection={
        <Image
          className={styles.nav_icon}
          src="/assets/nav_icon.png"
          alt="nav icon"
          width={30}
          height={14}
        />
      }
      styles={
        mobile
          ? {
              body: { width: "auto" },
              description: { display: "none" },
            }
          : undefined
      }
    />
  </motion.div>
);

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const lenis = useLenis();
  const [active, setActive] = useState<string | null>(null);

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
  const logoScale = useTransform(scrollY, [0, 150], [1, 0.9]);

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

  const handleLinkClick = (link: string) => {
    setActive(link);
    lenis?.scrollTo(link);
    closeDrawer();
  };

  return (
    <>
      <motion.header
        className={styles.header}
        style={{ backgroundColor, borderRadius, boxShadow }}
        initial="initial"
        animate="animate"
        variants={animations.header}
      >
        <Container className={styles.inner}>
          <motion.div style={{ scale: logoScale }}>
            <NavLink
              href="#"
              onClick={() => lenis?.scrollTo("top")}
              className={styles.home_link}
              leftSection={
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width={isMobile ? 40 : 60}
                  height={isMobile ? 40 : 60}
                />
              }
            />
          </motion.div>
          <Group gap={5} visibleFrom="sm">
            {NAVIGATION_LINKS.map((link, index) => (
              <NavItem
                key={link.label}
                link={link.link}
                label={link.label}
                index={index}
                active={active}
                handleLinkClick={handleLinkClick}
              />
            ))}
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
        <AnimatePresence>
          {drawerOpened && (
            <>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={styles.logoContainer}
              >
                <Image
                  src="/assets/logo.svg"
                  alt="logo"
                  width="127"
                  height="116"
                />
              </motion.div>
              {NAVIGATION_LINKS.map((link, index) => (
                <NavItem
                  key={link.label}
                  link={link.link}
                  label={link.label}
                  index={index}
                  mobile
                  active={active}
                  handleLinkClick={handleLinkClick}
                />
              ))}
            </>
          )}
        </AnimatePresence>
      </Drawer>
    </>
  );
};

export default Header;
