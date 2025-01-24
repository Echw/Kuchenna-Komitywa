"use client";

import { Text, Button, TextInput, Textarea } from "@mantine/core";

import styles from "./ContactForm.module.scss";
import SectionContainer from "../common/SectionContainer";
import SectionTitle from "../common/SectionTitle/SectionTitle";

const ContactForm = () => {
  return (
    <div className={styles.contact_form}>
      <div className={styles.contact_description}>
        <SectionTitle title="Kontakt" color="var(--mantine-color-orange-6)" />
        <Text pt={"xl"} c="white">
          Masz pytanie? Skontaktuj się z nami!
        </Text>
      </div>

      <div className={styles.form}>
        <div className={styles.line}>
          <TextInput
            placeholder=""
            required
            w={"100%"}
            className={styles.input_name}
            name="name"
            label="Imię"
          />
        </div>
        <div className={styles.line}>
          <TextInput
            placeholder=""
            required
            w={"100%"}
            className={styles.input_email}
            name="email"
            label="   E-mail"
          />
        </div>
        <div className={styles.line}>
          <Textarea
            placeholder=""
            required
            w={"100%"}
            className={styles.input_message}
            name="message"
            label="Wiadomość"
            minRows={1}
            maxRows={10}
            styles={{
              input: {
                height: "200px",
              },
            }}
          />
        </div>
        <Button fullWidth mt="xl" bg="var(--mantine-color-orange-6)" c="#31582B">
          Wyślij
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
