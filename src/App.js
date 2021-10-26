import { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Landing from './components/Landing';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App = () => {
  const [showContactForm,setShowContactForm]=useState(false);

  const showContactFormHandler=()=>{
    setShowContactForm(true);
  };
  const hideContactFormHandler=()=>{
    setShowContactForm(false);
  };

  return (
    <div className="App">
      {showContactForm && <ContactForm onClose={hideContactFormHandler}/>}
      <Header onShowContactForm={showContactFormHandler}/>
      <Landing/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
