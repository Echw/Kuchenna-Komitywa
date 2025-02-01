"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";
import { Box } from "@mantine/core";
import { useInView, motion, useScroll, useTransform } from "motion/react";

import styles from "./SectionContainer.module.scss";

interface SectionContainerProps {
  id?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  isFirstSection?: boolean;
}

const SectionContainer = ({
  id,
  className,
  children,
  backgroundColor,
  isFirstSection,
}: SectionContainerProps) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: isFirstSection ? ["end 10%", "start"] : ["end 5%", "end 75%"],
  });

  const opacity = useTransform(scrollYProgress, [0.7, 0], [1, 0]);
  const filter = useTransform(
    scrollYProgress,
    [0.7, 0],
    ["blur(0px)", "blur(30px)"],
  );

  const isInView = useInView(ref, {
    margin: "-50% 0px -50% 0px",
    once: false,
  });

  useEffect(() => {
    if (isInView && id) {
      window.history.pushState(null, "", `#${id}`);
      window.dispatchEvent(new Event("custom-hashchange"));
    }

    if (!isInView && id === "why" && window.location.hash === "#why") {
      window.history.pushState(null, "", `#hero`);
      window.dispatchEvent(new Event("custom-hashchange"));
    }
  }, [isInView, id]);

  return (
    <Box
      id={id}
      ref={ref}
      className={clsx(className, styles.box)}
      bg={backgroundColor}
    >
      <motion.div style={{ opacity, filter }} className={styles.container}>
        {children}
      </motion.div>
    </Box>
  );
};

export default SectionContainer;
