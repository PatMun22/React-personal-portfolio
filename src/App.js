import './Styles/App.css'
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default App;
