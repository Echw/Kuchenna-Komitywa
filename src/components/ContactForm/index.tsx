import { Button, TextInput, Textarea } from "@mantine/core";

import styles from "./ContactForm.module.scss";
import SectionTitle from "../common/SectionTitle";
import TextContainer from "../common/TextContainer";

const ContactForm = () => {
  return (
    <div className={styles.contact_form}>
      <div className={styles.contact_description}>
        <SectionTitle title="Kontakt" color="var(--mantine-color-orange-6)" />
        <TextContainer pt={"xl"} c="white">
          Masz pytanie? Skontaktuj się z nami!
        </TextContainer>
      </div>
      <div className={styles.form}>
        <div className={styles.line}>
          <TextInput required name="name" label="Imię" c="white" />
        </div>
        <div className={styles.line}>
          <TextInput required name="email" label="E-mail" c="white" />
        </div>
        <div className={styles.line}>
          <Textarea
            required
            name="message"
            label="Wiadomość"
            minRows={1}
            maxRows={10}
            c="white"
          />
        </div>
        <Button
          fullWidth
          mt="xl"
          bg="var(--mantine-color-orange-6)"
          c="#31582B"
        >
          Wyślij
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
