"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { Box } from "@mantine/core";
import { useInView, motion, useScroll, useTransform, progress } from "motion/react";

import styles from "./SectionContainer.module.scss";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  ref?: React.RefObject<HTMLDivElement | null>;
  range: [number, number];
  targetScale: number;
  progress: any;
}

function mergeRefs<T>(...refs: (React.Ref<T> | undefined)[]): React.RefCallback<T> {
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
  range,
  targetScale,
  progress,
}: SectionContainerProps) => {
  const internalRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: internalRef,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(progress, [0, 1], range, [targetScale, 1]);
  const opacity = useTransform(progress, [0, 1], [1, 0]);
  const filter = useTransform(progress, [0, 1], ["blur(0px)", "blur(30px)"]);

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
      <motion.div style={{}} className={styles.container}>
        {children}
      </motion.div>
    </Box>
  );
};

export default SectionContainer;
