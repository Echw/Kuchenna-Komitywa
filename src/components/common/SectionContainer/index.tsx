import React from "react";
import cx from "clsx";
import { Box, Container } from "@mantine/core";

import styles from "./SectionContainer.module.scss";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
}

const SectionContainer = ({
  id,
  className,
  children,
  backgroundColor,
}: SectionContainerProps) => {
  return (
    <Box id={id} className={cx(className, styles.box)} bg={backgroundColor}>
      <Container className={styles.container}>{children}</Container>
    </Box>
  );
};

export default SectionContainer;
