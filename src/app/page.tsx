import classes from "./page.module.css";
import { Header } from "@/components/Header/Header";
import { Hero } from "@/components/Hero/Hero";
import { WhySection } from "@/components/WhySection/WhySection";
import { AboutMe } from "@/components/AboutMe/AboutMe";
import { Food } from "@/components/Food/Food";

export default function Home() {
  return (
    <div className={classes.page}>
      <main className={classes.main}>
        <Header />
        <Hero />
        <WhySection />
        <AboutMe />
        <Food />
      </main>
    </div>
  );
}
