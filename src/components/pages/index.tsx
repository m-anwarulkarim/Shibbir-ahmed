import Portfolio from "./Portfolio";
import Services from "./Services";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";

const MainHome = () => {
  return (
    <div>
      <Home />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default MainHome;
