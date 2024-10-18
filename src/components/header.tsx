"use client";

import React, { useState } from "react";

import Image from "next/image";
import { Container, Group } from "@mantine/core";
import classes from "./header.module.css";

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

export function Header() {
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
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
    <header className={classes.header}>
      <Container size="xxl" className={classes.inner}>
        <Logo />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>
      </Container>
    </header>
  );
}
