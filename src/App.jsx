import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Main from "./component/Main";
import Navbar from "./component/Navbar";
import Skills from "./component/Skills";
import Work from "./component/Work";

const App = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Skills />
      <About />
      <Work />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
