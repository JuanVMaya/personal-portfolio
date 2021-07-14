import './App.css';
import About from './components/About';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects'
import Card from './components/UI/Card';

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
