import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About, Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { CV } from "./components/CV";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CV />
      <Contact />
      <Footer />
    </div>
  );
}
