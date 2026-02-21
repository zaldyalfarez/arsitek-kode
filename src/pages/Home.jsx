import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Workflow from "../sections/Workflow";
import TechStack from "../sections/TechStack";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Value from "../sections/Value";
import ScrollToTop from "../components/ScrollToTop";
import Break from "../components/Break";

export const Home = () => {
  return (
    <>
      <Hero />
      <Break className="mt-0 mb-32" />
      <Services />
      <Break className="mt-24 mb-24" />
      <Value />
      <Break className="mt-24 mb-24" />
      <Workflow />
      <Break className="mt-24 mb-24" />
      <TechStack />
      <Break className="mt-24 mb-24" />
      <Projects />
      <Break className="mt-24 mb-24" />
      <Contact />

      <ScrollToTop />
    </>
  );
};

export default Home;
