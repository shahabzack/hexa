import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white font-montserrat selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
      </main>
      <Footer />
    </div>
  );
}

export default App;
