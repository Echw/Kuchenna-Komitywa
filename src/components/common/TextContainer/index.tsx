import { ReactNode } from "react";
import { Text, TextProps } from "@mantine/core";
import clsx from "clsx";

import styles from "./TextContainer.module.scss";

interface TextContainerProps extends TextProps {
  children: ReactNode;
  variant?: "default" | "big" | "bigger";
  isTitle?: boolean;
}

const variants = {
  default: {
    base: 16,
    md: 22,
    lg: 22,
  },
  big: {
    base: 22,
    md: 28,
    lg: 30,
  },
  bigger: {
    base: 24,
    md: 32,
    lg: 38,
  },
};

const TextContainer = ({
  children,
  variant = "default",
  isTitle,
  ...props
}: TextContainerProps) => {
  return (
    <Text
      fz={variants[variant]}
      className={clsx(styles.text, isTitle && styles.title)}
      {...props}
    >
      {children}
    </Text>
  );
};

export default TextContainer;
