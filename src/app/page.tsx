"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import AboutMeSection from "@/components/AboutMeSection";
import FoodSection from "@/components/FoodSection";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { motion, useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import SectionContainer from "@/components/common/SectionContainer";
import sectionContainerStyles from "@/components/common/SectionContainer/SectionContainer.module.scss";

export default function Home() {
  const contianer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contianer,
    offset: ["start start", "end end"],
  });

  const targetScale = 1 - scrollYProgress.current;

  return (
    <>
      <Header />
      <main ref={contianer} style={{ position: "relative", marginBottom: "100vh" }}>
        <SectionContainer
          id="hero"
          range={[0, 1]}
          targetScale={targetScale}
          progress={scrollYProgress}
        >
          <Hero />
        </SectionContainer>

        <SectionContainer
          id="why"
          backgroundColor="var(--mantine-color-white)"
          range={[0.25, 1]}
          targetScale={targetScale}
          progress={scrollYProgress}
        >
          <WhySection />
        </SectionContainer>
        <SectionContainer
          id="about-me"
          backgroundColor="var(--mantine-color-mainGreen-8)"
          range={[2 * 0.25, 1]}
          targetScale={targetScale}
          progress={scrollYProgress}
        >
          <AboutMeSection />
        </SectionContainer>
        <SectionContainer
          id="foods"
          backgroundColor="var(--mantine-color-mainGreen-10)"
          range={[3 * 0.25, 1]}
          targetScale={targetScale}
          progress={scrollYProgress}
        >
          <FoodSection />
        </SectionContainer>
        <SectionContainer
          className={sectionContainerStyles.box_gallery}
          id="gallery"
          backgroundColor="var(--mantine-color-mainGreen-8)"
          range={[4 * 0.25, 1]}
          targetScale={targetScale}
          progress={scrollYProgress}
        >
          <Gallery />
        </SectionContainer>

        <SectionContainer
          id="contact"
          backgroundColor="#31582B"
          range={[5 * 0.25, 1]}
          targetScale={targetScale}
          progress={scrollYProgress}
        >
          <ContactForm />
        </SectionContainer>
      </main>
      {/* <Footer /> */}
    </>
  );
}
