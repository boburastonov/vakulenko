import Navbar from "@/components/navbar";
import Image from "next/image";
import bg from '../assets/hero-bg.jpeg'

export default function Home() {
  return (
    <main>
      <section className="main-pr flex flex-col">
        <Navbar />
      </section>
    </main>
  );
}
