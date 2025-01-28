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

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SectionContainer
          id="hero"
          isFirstSection
          className={sectionContainerStyles.overflow_hidden}
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
          className={sectionContainerStyles.box_gallery}
          id="gallery"
          backgroundColor="var(--mantine-color-mainGreen-8)"
        >
          <Gallery />
        </SectionContainer>

        <SectionContainer id="contact" backgroundColor="#31582B">
          <ContactForm />
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
