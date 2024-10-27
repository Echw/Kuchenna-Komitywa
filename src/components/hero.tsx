import { Container, Title, Text, Group } from "@mantine/core";
import classes from "./hero.module.css";

export function Hero() {
  return (
    <div className={classes.hero}>
      <Container className={classes.container} size="md">
        <Group gap={2} className={classes.title_group}>
          <Title className={classes.title} size="h1">
            K
          </Title>
          <Title className={classes.title} size="h1">
            u
          </Title>
          <Title className={classes.title} size="h1">
            c
          </Title>
          <Title className={classes.title} size="h1">
            h
          </Title>
          <Title className={classes.title} size="h1">
            e
          </Title>
          <Title className={classes.title} size="h1">
            n
          </Title>
          <Title className={classes.title} size="h1">
            n
          </Title>
          <Title className={classes.title} size="h1">
            a
          </Title>
        </Group>
        <Group className={classes.subtitle_group}>
          <div className={classes.subtitle_background}></div>
          <Title className={classes.title} size="h2">
            Komitywa
          </Title>
        </Group>
        <Text className={classes.description} size="xl" mt="xl">
          Lorem ipsum dolor sit amet consectetur. Leo auctor consequat at non
          cras.
        </Text>
      </Container>
      <div className={classes.hero_img_group}>
        <img src="/assets/Group.png" className={classes.img_0} />
        <img src="/assets/Group-1.png" className={classes.img_1} />
        <img src="/assets/Group-2.png" className={classes.img_2} />
        <img src="/assets/Group-3.png" className={classes.img_3} />
        <img src="/assets/Group-4.png" className={classes.img_4} />
        <img src="/assets/Group-5.png" className={classes.img_5} />
        <img src="/assets/Group-6.png" className={classes.img_6} />
      </div>
    </div>
  );
}
