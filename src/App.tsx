import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Services from './components/services';
import Certification from './components/Certification';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <About />
        <Skills />
        <Services/>
        <Projects />
        <Certification/>
        <Contact />
      </main>
      <Footer/>
    </div>
  );
}
