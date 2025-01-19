import React from "react";
import clsx from "clsx";
import { Box } from "@mantine/core";

import styles from "./SectionContainer.module.scss";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

const SectionContainer = ({
  id,
  ref,
  className,
  children,
  backgroundColor,
}: SectionContainerProps) => {
  return (
    <Box
      id={id}
      ref={ref}
      className={clsx(className, styles.box)}
      bg={backgroundColor}
    >
      <Box className={styles.container}>{children}</Box>
    </Box>
  );
};

export default SectionContainer;
