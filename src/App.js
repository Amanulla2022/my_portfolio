import Intro from "./components/intro/intro";
import Header from "./components/Header/header";
import Skills from "./components/Skills/skills";
import Experience from "./components/Experience/experience";
import Project from "./components/Projects/projects";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
