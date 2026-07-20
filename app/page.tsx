import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Provisions from "./components/Provisions";
import Restorative from "./components/Restorative";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Provisions />
        <Restorative />
      </main>
      <Footer />
    </div>
  );
}
