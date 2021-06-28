import './App.css';
import About from './components/About';
import Header from './components/Header';
import Landing from './components/Landing';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Landing/>
      <About/>
    </div>
  );
}

export default App;
