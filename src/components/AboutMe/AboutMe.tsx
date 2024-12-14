import React from "react";
import { Card, Title, Image, Text } from "@mantine/core";

import cardClasses from "./../Card.module.css";
import classes from "./AboutMe.module.css";

export const AboutMe = () => {
  return (
    <Card
      radius="xl"
      className={cardClasses.card}
      styles={{ root: { backgroundColor: "var(--mantine-color-mainGreen-8)" } }}
    >
      <div className={classes.about_me}>
        <Image
          src="/assets/tomek.jpg"
          alt="Mistrz kuchnii"
          className={classes.about_me_img}
        />
        <div className={classes.about_me_description}>
          <Title
            order={2}
            className={cardClasses.card_title}
            c="var(--mantine-color-orange-6)"
          >
            O mnie
          </Title>
          <Text pt={"xl"} c="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco.
            <br />
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </div>
        <Image
          src={`/assets/about_deco.png`}
          alt="leafs"
          w={135}
          className={classes.about_deco_1}
        />
      </div>
    </Card>
  );
};
