"use client";

import React from "react";
import { Title, Text } from "@mantine/core";

import { Button, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

import styles from "./ContactForm.module.scss";
import SectionContainer from "../common/SectionContainer";

const ContactForm = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
      name: "",
      email: "",
      website: "",
      github: "",
    },
  });
  return (
    <SectionContainer id="ContactForm" backgroundColor="#31582B">
      <div className={styles.contact_form}>
        <div className={styles.contact_description}>
          <Title order={2} c="var(--mantine-color-orange-6)">
            Kontakt
          </Title>
          <Text pt={"xl"} c="white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          </Text>
        </div>
        <div className={styles.form}>
          <TextInput label="Imię" placeholder="Twoje imię" required w={"100%"} />
          <TextInput label="E-mail" placeholder="twoj@email.com" required w={"100%"} />
          <TextInput label="Wiadomość" placeholder="Wiadomość" required w={"100%"} />
          <Button fullWidth mt="xl" bg="var(--mantine-color-orange-6)" c="#31582B">
            Wyślij
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactForm;
