import Hero from './components/Hero';
import Pain from './components/Pain';
import Solution from './components/Solution';
import About from './components/About';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className="md:snap-y md:snap-mandatory h-screen overflow-y-scroll scroll-smooth">
      <Hero />
      <Pain />
      <Solution />
      <About />
      <Certifications />
    </div>
  );
}

export default App;
