import Navbar from "@/app/[locale]/components/navbar";
import Hero from "@/app/[locale]/components/hero";
import Results from "@/app/[locale]/components/results";
import AuthForm from "@/app/[locale]/components/auth-form";
import Recommendation from "@/app/[locale]/components/recommendation";
import ClientComments from "@/app/[locale]/components/client-comments";
import Contact from "@/app/[locale]/components/contact";
import MainSolves from "@/app/[locale]/components/main-solves";
import Footer from "@/app/[locale]/components/footer";

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
      <ClientComments />
      <Contact />
      <MainSolves />
      <Footer />
    </main>
  );
}
