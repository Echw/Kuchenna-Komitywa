import styles from "./page.module.scss";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { WhySection } from "@/components/WhySection/WhySection";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Food } from "@/components/Food/Food";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Hero />
        <WhySection />
        <AboutMe />
        <Food />
      </main>
    </div>
  );
}
