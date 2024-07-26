import Navbar from "@/components/navbar";
import Image from "next/image";
import bg from '../assets/hero-bg.jpeg'
import Hero from "@/components/hero";

export default function Home() {
  return (
    <main>
      <section className="main-pr flex flex-col">
        <Navbar />
        <Hero />
      </section>
    </main>
  );
}
