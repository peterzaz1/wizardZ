import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Services from "./components/Services";
import CTA from "./components/CTA";
import CaseStudy from "./components/CaseStudy";

function App() {
  return (
    <div className="mx-6 md:mx-16  lg:mx-32">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <CTA />
      <CaseStudy />
    </div>
  );
}

export default App;
