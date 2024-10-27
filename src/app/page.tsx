import { Header } from "@/components/header";
import styles from "./page.module.css";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <Hero />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
