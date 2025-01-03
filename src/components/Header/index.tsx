"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Container, Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

import styles from "./Header.module.scss";

export function Logo() {
  return <Image src={`/assets/logo.svg`} alt="logo" width="127" height="116" />;
}

const links = [
  { link: "/about", label: "Dlaczego roślinna?" },
  { link: "/pricing", label: "O mnie" },
  { link: "/learn", label: "Cennik" },
  { link: "/community", label: "Blog" },
  { link: "/contact", label: "Kontakt" },
];

const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState<string | null>();

  const items = links.map((link) => (
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
    <header className={styles.header}>
      <Container size="xxl" className={styles.inner}>
        <Logo />
        <Group gap={20} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};

export default Header;
