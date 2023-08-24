import './Styles/App.css'
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
    </div>
  );
};

export default App;
