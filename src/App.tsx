import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Benefits />
      <Clients />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
