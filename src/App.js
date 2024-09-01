import './App.css';
import { Navbar } from './components/navbar';
import { useState } from 'react';
import { AboutMePage } from './components/aboutMePage';
import { Portfolio } from './components/portfolio';
import { Footer } from './components/footer';
import { ContactForm } from './components/contact';

function App() {
  const [tab, setTab] = useState("aboutMe");
  return (
    <div>
      <Navbar tab={tab} setTab={setTab}/>
      {tab === 'aboutMe' && (
        <AboutMePage/>
      )}
      {tab === 'portfolio' && (
        <Portfolio/>
      )}
      {tab === 'contact' && (
        <ContactForm/>
      )}
      <hr />
      <Footer/>
    </div>
  );
}

export default App;
