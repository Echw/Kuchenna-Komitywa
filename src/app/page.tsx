import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import AboutMeSection from "@/components/AboutMeSection";
import FoodSection from "@/components/FoodSection";

import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Hero />
        <WhySection />
        <AboutMeSection />
        <FoodSection />
      </main>
    </div>
  );
}
