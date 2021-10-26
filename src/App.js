import { useState, useRef } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef=useRef(null);

  const showContactFormHandler = () => {
    setShowContactForm(true);
  };
  const hideContactFormHandler = () => {
    setShowContactForm(false);
  };
  const aboutScrollHandler = () => scrollToRef(aboutRef);
  const projectsScrollHandler = () => scrollToRef(projectsRef);

  return (
    <div className="App">
      {showContactForm && <ContactForm onClose={hideContactFormHandler} />}
      <Header onShowContactForm={showContactFormHandler} 
      onScrollAbout={aboutScrollHandler}
      onScrollProjects={projectsScrollHandler}
      />
      <Landing />
      <div ref={aboutRef}><About  /></div>
      <div ref={projectsRef}><Projects /></div>
      <Footer />
    </div>
  );
}

export default App;
