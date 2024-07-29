import Navbar from "@/components/navbar";
import Image from "next/image";
import bg from "../assets/hero-bg.jpeg";
import Hero from "@/components/hero";
import Results from "@/components/results";
import AuthForm from "@/components/auth-form";
import Recommendation from "@/components/recommendation";

export default function Home() {
  return (
    <main>
      <section className="main-pr flex flex-col">
        <Navbar />
        <Hero />
      </section>
      <Results />
      <AuthForm />
      <Recommendation />
    </main>
  );
}
