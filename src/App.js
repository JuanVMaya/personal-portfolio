import './App.css';
import About from './components/About';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Landing/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
