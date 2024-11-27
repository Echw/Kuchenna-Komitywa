import { Header } from "@/components/Header";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero";
import { WhySection } from "@/components/WhySection";
import { AboutMe } from "@/components/AboutMe";
import { Food } from "@/components/Food";

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
      <footer className={styles.footer}></footer>
    </div>
  );
}
