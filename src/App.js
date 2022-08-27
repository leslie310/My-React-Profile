import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Contact from './components/Contact';
import About from './components/About';
import Resume from './components/Resume';


function App() { 
  const [currentTab] = useState();

  // This method is checking to see what the value of `currentTab` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderTab = () => {
    if (currentTab === "About") {
      return <About />;
    }
    if (currentTab === "Contact") {
      return <Contact />;
    }
    if (currentTab === "Resume") {
      return <Resume />;
    }
   
  };

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer/>
      <main>{renderTab()}</main>
    </div>
     
  );
}

export default App;
