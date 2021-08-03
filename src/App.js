import './App.css';
import About from './components/About';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects'

const App = () => {
  return (
    <div className="App">
      <Header />
      <Landing/>
      <About/>
      <Projects/>
    </div>
  );
}

export default App;
