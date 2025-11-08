import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScaleIn from './components/scaleIn';
function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <ScaleIn />
      <Benefits />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
