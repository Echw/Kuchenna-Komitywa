"use client";

import { useRef, useState } from "react";
import { Container, Title, Text, Group } from "@mantine/core";
import * as motion from "framer-motion/client";
import { Variants } from "framer-motion";

import styles from "./Hero.module.scss";
import { ScrollIcon } from "./ScrollIcon";

const containerVariants: Variants = {
  animate: {
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.3,
    },
  },
};

const childVariants: Variants = {
  animate: {
    rotate: [0, 5],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

function getRelativeCoordinates(event: MouseEvent, referenceElement: HTMLDivElement) {
  const position = {
    x: event.pageX,
    y: event.pageY,
  };

  const offset = {
    left: referenceElement.offsetLeft,
    top: referenceElement.offsetTop,
    width: referenceElement.clientWidth,
    height: referenceElement.clientHeight,
  };

  let reference = referenceElement.offsetParent as HTMLElement;

  while (reference) {
    offset.left += reference.offsetLeft;
    offset.top += reference.offsetTop;
    reference = reference.offsetParent as HTMLElement;
  }

  return {
    x: position.x - offset.left,
    y: position.y - offset.top,
    width: offset.width,
    height: offset.height,
    centerX: (position.x - offset.left - offset.width / 2) / (offset.width / 2),
    centerY: (position.y - offset.top - offset.height / 2) / (offset.height / 2),
  };
}

const Hero = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({
    centerX: 0,
    centerY: 0,
    width: 0,
  });
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  const handleMouseEnter = (index: number) => {
    setHoveredImage(index);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleMouseMove = (e: MouseEvent, index: number) => {
    if (!imageRefs.current[index]) return;

    const coordinates = getRelativeCoordinates(e, imageRefs.current[index]!);
    setMousePosition(coordinates);
  };

  const getImageMovement = () => {
    // console.log(mousePosition);

    let rotate = 5;
    if (mousePosition.centerX > 0 && mousePosition.centerX < mousePosition.width / 2) {
      rotate = -10;
    } else rotate = 10;

    return {
      rotate,
    };
  };

  return (
    <motion.div className={styles.hero}>
      <Container className={styles.container} size="md">
        <Group gap={2} className={styles.title_group}>
          {["K", "u", "c", "h", "e", "n", "n", "a"].map((letter, index) => (
            <Title order={1} key={index} className={styles.title}>
              {letter}
            </Title>
          ))}
        </Group>
        <Group className={styles.subtitle_group}>
          <div className={styles.subtitle_background}></div>
          <Title className={styles.title} size="h2">
            Komitywa
          </Title>
        </Group>
        <Text className={styles.description} size="xl" mt="xl">
          Lorem ipsum dolor sit amet consectetur. Leo auctor consequat at non cras.
        </Text>
        <ScrollIcon />
      </Container>
      <motion.div
        className={styles.hero_img_group}
        variants={containerVariants}
        initial="hidden"
        animate="animate"
      >
        {[...Array(7)].map((_, index) => {
          const rotate = hoveredImage === index ? getImageMovement() : { rotate: 5 };

          return (
            <motion.img
              key={index}
              ref={(el) => {
                if (el) imageRefs.current[index] = el;
              }}
              src={`/assets/Group-${index}.png`}
              className={styles[`img_${index}`]}
              variants={childVariants}
              animate={{
                rotate: 5,
              }}
              initial={{
                rotate: 0,
              }}
              transition={{
                rotate: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={(e) => handleMouseMove(e as unknown as MouseEvent, index)}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};

export default Hero;
