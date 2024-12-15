"use client";

import React from "react";
import { Card, Title, Image, Group, List, ThemeIcon, rem } from "@mantine/core";
import { IconSeedingFilled } from "@tabler/icons-react";

import cardStyles from "./../Card.module.scss";
import styles from "./Food.module.scss";
import foodData from "../../data/food-data.json";

interface FoodItem {
  img: string;
  name: string;
  types: string[];
}

interface FoodData {
  food: FoodItem[];
}

export const Food = () => {
  return (
    <Card
      radius="xl"
      className={cardStyles.card}
      styles={{ root: { backgroundColor: "#D8E0A5" } }}
    >
      <Title
        order={2}
        className={cardStyles.card_title}
        c="var(--mantine-color-mainGreen-8)"
      >
        Jedzonka
      </Title>

      <Group className={styles.cards_section} pt={"xl"}>
        {(foodData as FoodData).food.map((item, index) =>
          foodCard(item, index),
        )}
      </Group>
    </Card>
  );
};

const foodCard = (item: FoodItem, index: number): React.ReactElement => {
  return (
    <Card key={index} radius="xl" className={styles.small_card}>
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
          <ThemeIcon color="#81964c" size={24} radius="xl">
            <IconSeedingFilled style={{ width: rem(16), height: rem(16) }} />
          </ThemeIcon>
        }
      >
        {item.types.map((type, typeIndex) => (
          <List.Item key={typeIndex}>{type}</List.Item>
        ))}
      </List>
    </Card>
  );
};
