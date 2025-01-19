"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { Box } from "@mantine/core";
import { useInView } from "motion/react";

import styles from "./SectionContainer.module.scss";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
}

function mergeRefs<T>(
  ...refs: (React.Ref<T> | undefined)[]
): React.RefCallback<T> {
  return (node: T | null) => {
    refs.forEach((ref) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref && typeof ref === "object") {
        (ref as React.MutableRefObject<T | null>).current = node;
      }
    });
  };
}

const SectionContainer = ({
  id,
  ref: externalRef,
  className,
  children,
  backgroundColor,
}: SectionContainerProps) => {
  const internalRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(internalRef, {
    margin: "-50% 0px -50% 0px",
    once: false,
  });

  useEffect(() => {
    if (isInView && id) {
      window.history.pushState(null, "", `#${id}`);
      window.dispatchEvent(new Event("custom-hashchange"));
    }
  }, [isInView, id]);

  return (
    <Box
      id={id}
      ref={mergeRefs(internalRef, externalRef)}
      className={clsx(className, styles.box)}
      bg={backgroundColor}
    >
      <Box className={styles.container}>{children}</Box>
    </Box>
  );
};

export default SectionContainer;
