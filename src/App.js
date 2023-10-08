import Intro from "./components/intro/intro";
import Header from "./components/Header/header";
import Skills from "./components/Skills/skills";
import Experience from "./components/Experience/experience";
import Project from "./components/Projects/projects";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <Skills />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
