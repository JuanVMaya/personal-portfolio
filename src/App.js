import { useState, useRef ,useEffect, useCallback} from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import ScrollToTop from './components/UI/ScrollToTop';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

const App = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const aboutRef = useRef(null);
  const projectsRef=useRef(null);
  
  const prevScrollY = useRef(0);
  const [goingUp, setGoingUp] = useState(true);

  const showContactFormHandler = () => {
    setShowContactForm(true);
  };
  const hideContactFormHandler = () => {
    setShowContactForm(false);
  };
  const aboutScrollHandler = () => scrollToRef(aboutRef);
  const projectsScrollHandler = () => scrollToRef(projectsRef);

  // The scroll listener
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div className="App" >
      {showContactForm && <ContactForm onClose={hideContactFormHandler} />}
      <Header onShowContactForm={showContactFormHandler}
      onScrollAbout={aboutScrollHandler}
      onScrollProjects={projectsScrollHandler}
      />
      <Landing />
      <div ref={aboutRef} ><About  /></div>
      <div ref={projectsRef}><Projects /></div>
      <ScrollToTop scrollUp={goingUp} />
      <Footer />
    </div>
  );
}

export default App;
