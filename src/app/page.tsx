"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import AboutMeSection from "@/components/AboutMeSection";
import FoodSection from "@/components/FoodSection";
import Gallery from "@/components/Gallery";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import SectionContainer from "@/components/common/SectionContainer";
import sectionContainerStyles from "@/components/common/SectionContainer/SectionContainer.module.scss";
import { Lenis } from "@/components/Lenis";

export default function Home() {
  return (
    <Lenis>
      <Header />
      <main>
        <SectionContainer
          id="hero"
          isFirstSection
          className={sectionContainerStyles.hero}
          backgroundColor="var(--mantine-color-mainGreen-6)"
        >
          <Hero />
        </SectionContainer>
        <SectionContainer id="why" backgroundColor="var(--mantine-color-white)">
          <WhySection />
        </SectionContainer>
        <SectionContainer
          id="about-me"
          backgroundColor="var(--mantine-color-mainGreen-8)"
        >
          <AboutMeSection />
        </SectionContainer>
        <SectionContainer
          id="foods"
          backgroundColor="var(--mantine-color-mainGreen-10)"
        >
          <FoodSection />
        </SectionContainer>
        <SectionContainer
          className={sectionContainerStyles.gallery}
          id="gallery"
          backgroundColor="var(--mantine-color-mainGreen-8)"
        >
          <Gallery />
        </SectionContainer>
        <SectionContainer id="contact" backgroundColor="#31582B">
          <ContactForm />
        </SectionContainer>
      </main>
      <SectionContainer
        className={sectionContainerStyles.footer}
        id="footer"
        backgroundColor="var(--mantine-color-mainGreen-9)"
      >
        <Footer />
      </SectionContainer>
    </Lenis>
  );
}
