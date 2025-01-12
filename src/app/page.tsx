import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
// import AboutMeSection from "@/components/AboutMeSection";
// import FoodSection from "@/components/FoodSection";
// import Gallery from "@/components/Gallery";
// import ContactForm from "@/components/ContactForm";
// import Footer from "@/components/Footer";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Hero />
        <WhySection />
        {/* <AboutMeSection /> */}
        {/* <FoodSection /> */}
        {/* <Gallery /> */}
        {/* <ContactForm /> */}
        {/* <Footer /> */}
      </main>
    </div>
  );
}
