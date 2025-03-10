"use client";

import { useRef } from "react";
import { Button, TextInput, Textarea } from "@mantine/core";
import { motion, Variants } from "motion/react";

import styles from "./ContactForm.module.scss";
import SectionTitle from "../common/SectionTitle";
import TextContainer from "../common/TextContainer";

const FORM_FIELDS = [
  { name: "name", label: "Imię", type: "input", required: true },
  { name: "email", label: "E-mail", type: "input", required: true },
  {
    name: "message",
    label: "Wiadomość",
    type: "textarea",
    required: true,
    minRows: 1,
    maxRows: 10,
  },
];

const ANIMATIONS: Record<string, Variants> = {
  title: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.1,
      },
    },
  },
  description: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  },
  formField: {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 * i + 0.3,
      },
    }),
  },
  button: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 1.0,
        type: "spring",
        stiffness: 200,
      },
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const FormField = ({ field, index }: { field: any; index: number }) => {
  const FieldComponent = field.type === "textarea" ? Textarea : TextInput;

  return (
    <motion.div
      className={styles.line}
      custom={index}
      variants={ANIMATIONS.formField}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <FieldComponent
        required={field.required}
        name={field.name}
        label={field.label}
        c="white"
        minRows={field.minRows}
        maxRows={field.maxRows}
      />
    </motion.div>
  );
};

const ContactForm = () => {
  const formRef = useRef<HTMLDivElement>(null);

  return (
    <div className={styles.contact_form} ref={formRef} id="contact">
      <div className={styles.contact_description}>
        <motion.div
          variants={ANIMATIONS.title}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <SectionTitle title="Kontakt" color="var(--mantine-color-orange-6)" />
        </motion.div>

        <motion.div
          variants={ANIMATIONS.description}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <TextContainer pt={"xl"} c="white">
            Masz pytanie? Skontaktuj się z nami!
          </TextContainer>
        </motion.div>
      </div>

      <div className={styles.form}>
        {FORM_FIELDS.map((field, index) => (
          <FormField key={field.name} field={field} index={index} />
        ))}

        <motion.div
          variants={ANIMATIONS.button}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          style={{ width: "100%" }}
        >
          <Button
            fullWidth
            mt="xl"
            bg="var(--mantine-color-orange-6)"
            c="#31582B"
          >
            Wyślij
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
