"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Image } from "@mantine/core";
import clsx from "clsx";

import styles from "./WhySection.module.scss";
import SectionTitle from "../common/SectionTitle";
import TextContainer from "../common/TextContainer";

const images = [
  { src: "/assets/why_section/leaf_1.png", alt: "leafs 1", width: 135 },
  { src: "/assets/why_section/leaf_2.png", alt: "leafs 2", width: 305 },
  { src: "/assets/why_section/leaf_3.png", alt: "leafs 3", width: 116 },
  { src: "/assets/why_section/leaf_4.png", alt: "leafs 4", width: 166 },
  { src: "/assets/why_section/leaf_5.png", alt: "leafs 5", width: 230 },
  { src: "/assets/why_section/leaf_6.png", alt: "leafs 6", width: 380 },
];

const texts = [
  {
    title: "100% roślinne i naturalne składniki",
    description:
      "Wszystkie nasze produkty są w pełni wegańskie, bez sztucznych dodatków, konserwantów i barwników. Tworzymy je z najwyższej jakości składników, które są zdrowe i odżywcze.",
    circleCx: 940,
    circleCy: 228.5,
  },
  {
    title: "Zrównoważona produkcja",
    description:
      "Działamy z myślą o środowisku, wykorzystując lokalne, sezonowe produkty i ograniczając zużycie plastiku.",
    circleCx: 139.5,
    circleCy: 1025.5,
  },
  {
    title: "Doskonały smak i różnorodność",
    description:
      "Nasze menu oferuje unikalne połączenia smaków, które zadowolą zarówno miłośników kuchni roślinnej, jak i tych, którzy dopiero odkrywają wegańskie jedzenie.",
  },
  {
    title: "Korzystne ceny",
    description:
      "Oferujemy wegański catering w przystępnych cenach, bez kompromisów na jakości. Dzięki temu możesz cieszyć się zdrowymi, roślinnymi daniami bez nadwyrężania budżetu.",
    circleCx: 950.5,
    circleCy: 752.5,
  },
  {
    title: "Wygoda i oszczędność czasu",
    description:
      "Nasze dania w słoikach są idealne dla osób, które chcą zdrowo jeść, ale nie mają czasu na codzienne gotowanie. Wystarczy je podgrzać i cieszyć się pełnowartościowym posiłkiem w kilka minut.",
    circleCx: 964.5,
    circleCy: 1303.5,
  },
];

const pointVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    // y: 20,
  },
  visible: {
    opacity: 1,
    // y: 0,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
};

const WhySection = () => {
  const [pathLength, setPathLength] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 50%"],
  });

  const strokeDashoffset = useTransform(
    scrollYProgress,
    [0, 1],
    [pathLength, 0],
  );

  useEffect(() => {
    if (!pathRef.current) return;

    const length = pathRef.current.getTotalLength();
    setPathLength(length);
    pathRef.current.style.strokeDasharray = `${length} ${length}`;
  }, []);

  return (
    <div ref={containerRef}>
      <SectionTitle
        title="Dlaczego kuchnia roślinna?"
        color="var(--mantine-color-mainGreen-8)"
      />
      <motion.div
        className={styles.points}
        variants={textVariants}
        initial="hidden"
        animate="visible"
      >
        <svg
          className={styles.path}
          viewBox="0 0 1034 1470"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            ref={pathRef}
            d="M546.61 1C554.11 57.5 625.11 78.4745 687.61 73C756.11 67 844.61 68.5188 877.61 91C918.61 118.931 940.61 180.5 940.61 246.5C940.61 262.508 929.45 344.017 847.11 363C673.61 403 417.443 369 224.61 363C198.276 365.5 148.21 358.1 158.61 308.5C171.61 246.5 230.61 322 205.11 445.5C179.61 569 227.554 592.752 257.5 613.5C327.5 662 806.715 608.867 877.61 636C958.61 667 972.909 787.175 918.11 855C857.11 930.5 262.5 858 192 909.5C121.5 961 116.5 1109.2 192 1154C267.5 1198.8 413.023 1176.35 566 1180.5C692 1183.91 898.8 1148.6 946 1231C967.5 1258 970 1396 917 1435.5C841 1492.14 689.5 1438 543 1426.5C502.797 1423.34 309.5 1377.5 168.5 1438C27.5 1498.5 17 1448 1.5 1438"
            stroke="var(--mantine-color-mainGreen-11)"
            strokeWidth="4"
            style={{
              strokeDashoffset,
            }}
          />
          {texts.map((text, index) => {
            if (!text.circleCx || !text.circleCy) return null;

            return (
              <motion.g
                key={index}
                variants={pointVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  amount: 0.5,
                  margin: "0px 0px -5%",
                }}
                style={{
                  transformOrigin: "center",
                }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.5,
                }}
              >
                <circle
                  cx={text.circleCx}
                  cy={text.circleCy}
                  r="20.5"
                  fill="white"
                />
                <circle
                  cx={text.circleCx}
                  cy={text.circleCy}
                  r="10.5"
                  fill="#F1753F"
                />
              </motion.g>
            );
          })}
        </svg>
        {texts.map((text, index) => {
          const delay = index * 0.3;
          return (
            <motion.div
              key={index}
              className={styles.text_container}
              variants={textVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: delay,
                duration: 0.5,
              }}
            >
              <TextContainer
                variant="big"
                isTitle
                lh="xl"
                c="var(--mantine-color-mainGreen-9)"
              >
                {text.title}
              </TextContainer>
              <TextContainer className={clsx(styles.why, styles.description)}>
                {text.description}
              </TextContainer>
            </motion.div>
          );
        })}
      </motion.div>
      {images.map((image, index) => (
        <Image
          key={`leaf-${index}`}
          src={image.src}
          alt={image.alt}
          w={image.width}
          className={styles.img}
        />
      ))}
    </div>
  );
};

export default WhySection;
