"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Card, Image, List, ThemeIcon, rem } from "@mantine/core";
import { IconSeedingFilled } from "@tabler/icons-react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  Variants,
} from "motion/react";
import { useMediaQuery } from "@mantine/hooks";
import clsx from "clsx";

import styles from "./FoodSection.module.scss";
import foodData from "../../data/food-data.json";
import SectionTitle from "../common/SectionTitle";
import TextContainer from "../common/TextContainer";

interface FoodItem {
  img: string;
  name: string;
  types: string[];
}

interface FoodData {
  food: FoodItem[];
}

const ANIMATIONS: Record<string, Variants> = {
  container: {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  },
  cardWrapper: {
    hidden: { x: "100%", opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  },
};

const FoodSection = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [sectionHeight, setSectionHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    margin: "-20%",
  });

  useLayoutEffect(() => {
    const calculateDimensions = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.querySelectorAll(
        `.${styles.small_card}`,
      );
      if (!cards.length) return;

      const firstCard = cards[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth;
      const containerComputedStyles = window.getComputedStyle(
        containerRef.current,
      );
      const gap = parseInt(containerComputedStyles.gap, 10) || 0;
      const viewportWidth = window.innerWidth;
      const centerOffset = (viewportWidth - cardWidth) / 2;
      const totalCardsWidth = (cardWidth + gap) * cards.length - gap;
      const scrollDistance =
        totalCardsWidth - (isMobile ? viewportWidth / 2 : centerOffset);

      const calculatedDistance = Math.max(0, scrollDistance);
      setContainerWidth(calculatedDistance);
      setSectionHeight(calculatedDistance);
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
  }, [isMobile]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", `${containerWidth}px end`],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -containerWidth + (isMobile ? 100 : 350)],
  );

  return (
    <div
      ref={sectionRef}
      style={{ height: sectionHeight }}
      className={styles.wrapper}
    >
      <div className={styles.sticky}>
        <SectionTitle
          title="Jedzonka"
          color="var(--mantine-color-mainGreen-8)"
        />
        <div className={styles.cards_section_overflow}>
          <motion.div
            ref={containerRef}
            className={styles.cards_section}
            style={{ x }}
            variants={ANIMATIONS.container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {(foodData as FoodData).food.map((item, index) => (
              <motion.div key={index} variants={ANIMATIONS.cardWrapper}>
                <FoodCard item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface FoodCardProps {
  item: FoodItem;
}

const FoodCard = ({ item }: FoodCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isVisible = useInView(cardRef, {
    amount: 0.9,
    once: true,
  });

  return (
    <Card
      radius="xl"
      className={clsx(styles.small_card, isVisible ? styles.visible : "")}
      ref={cardRef}
    >
      <div className={styles.image_container}>
        <Image src={item.img} alt={item.name.toLowerCase()} />
      </div>
      <div className={styles.small_card_title}>
        <TextContainer variant="big" isTitle c="var(--mantine-color-orange-6)">
          {item.name}
        </TextContainer>
      </div>
      <div className={styles.food_list}>
        <List
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon
              c="var(--mantine-color-mainGreen-7)"
              bg="transparent"
              size={24}
              radius="xl"
            >
              <IconSeedingFilled style={{ width: rem(16), height: rem(16) }} />
            </ThemeIcon>
          }
        >
          {item.types.map((type, index) => (
            <List.Item key={index}>
              <TextContainer c="black">{type}</TextContainer>
            </List.Item>
          ))}
        </List>
      </div>
    </Card>
  );
};

export default FoodSection;
