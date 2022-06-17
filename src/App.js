
import './App.css';
import React from 'react';


/* Pages*/
import Home from './Components/Home';
import ProjectSection from './Components/ProjectSection';
import AboutMe from './Components/AboutMe';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Home/>
      <ProjectSection/>
      <AboutMe/>
      <Footer/>
    </div>
  );
}

export default App;
