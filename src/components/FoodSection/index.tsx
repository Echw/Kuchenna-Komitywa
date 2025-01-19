"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Card, Title, Image, List, ThemeIcon, rem } from "@mantine/core";
import { IconSeedingFilled } from "@tabler/icons-react";

import SectionContainer from "../common/SectionContainer";
import styles from "./FoodSection.module.scss";
import foodData from "../../data/food-data.json";
import { motion, useInView, useScroll, useTransform } from "motion/react";

interface FoodItem {
  img: string;
  name: string;
  types: string[];
}

interface FoodData {
  food: FoodItem[];
}

const FoodSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sectionHeight, setSectionHeight] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const isInView = useInView(containerRef, { once: true, margin: "-200px" });
  const [centeredCards, setCenteredCards] = useState<number[]>([]);

  useLayoutEffect(() => {
    const calculateDimensions = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.getElementsByClassName(
        styles.small_card,
      );
      if (!cards.length) return;

      const firstCard = cards[0] as HTMLElement;
      const cardWidth = firstCard.offsetWidth;

      const containerStyles = window.getComputedStyle(containerRef.current);
      const gapString = containerStyles.gap;
      const gap = parseInt(gapString, 10);

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      const centerOffset = (viewportWidth - cardWidth) / 2;
      const totalCardsWidth = (cardWidth + gap) * cards.length - gap;
      const scrollDistance = totalCardsWidth - centerOffset;

      const calculatedWidth = Math.max(0, scrollDistance);

      setContainerWidth(calculatedWidth);
      setSectionHeight(calculatedWidth);
    };

    const handleScroll = () => {
      if (!containerRef.current) return;

      const cards = containerRef.current.getElementsByClassName(
        styles.small_card,
      );
      const viewportCenter = window.innerWidth / 2;
      const threshold = 100;
      let centerIndex = -1;

      Array.from(cards).forEach((card, index) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < threshold) {
          centerIndex = index;
        }
      });

      if (centerIndex !== -1) {
        const newCenteredCards = Array.from(
          { length: centerIndex + 1 },
          (_, i) => i,
        );
        setCenteredCards(newCenteredCards);
      }
    };

    calculateDimensions();
    window.addEventListener("resize", calculateDimensions);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", calculateDimensions);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", `${containerWidth}px end`],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -containerWidth + 350]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariant = {
    hidden: {
      x: "100%",
      opacity: 0,
    },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <div ref={sectionRef} style={{ height: sectionHeight }}>
      <div className={styles.sticky_container}>
        <SectionContainer
          id="FoodSection"
          backgroundColor="var(--mantine-color-mainGreen-10)"
        >
          <div className={styles.content_wrapper}>
            <div className={styles.title_sticky}>
              <Title order={2} c="var(--mantine-color-mainGreen-8)">
                Jedzonka
              </Title>
            </div>
            <motion.div
              ref={containerRef}
              className={styles.cards_section}
              style={{ x }}
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {(foodData as FoodData).food.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariant}
                  className={`${
                    centeredCards.includes(index) ? styles.centered : ""
                  }`}
                >
                  <FoodCard item={item} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionContainer>
      </div>
    </div>
  );
};

const FoodCard = ({ item }: { item: FoodItem }) => {
  return (
    <Card radius="xl" className={styles.small_card}>
      <div className={styles.image_container}>
        <Image
          src={item.img}
          alt={item.name.toLowerCase()}
          className={styles.small_card_img}
        />
      </div>
      <Title
        order={3}
        className={styles.small_card_title}
        c="var(--mantine-color-orange-6)"
      >
        {item.name}
      </Title>
      <List
        className={styles.food_list}
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
          <List.Item key={index}>{type}</List.Item>
        ))}
      </List>
    </Card>
  );
};

export default FoodSection;
