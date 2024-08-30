import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from './About';
import Projects from './Project';
import Experience from './Experience';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <h1>Reagan Bourne</h1>
      <div className="text-container">
      <p>Hi I'm Reagan! I am a senior pursuing a B.S. in Computer Science at FSU. 
        Please look through this website to learn more about me :)  </p>
        <h3 style={{ textAlign: 'left'}}>Experience: </h3>
        <p style={{ textAlign: 'left' }}>Over the summer (2024) I had the priviledge of being a Software Engineer Intern for L3Harris.
          Some of the skills that I increased my knowledge of are Java, shell scripting, DevSecOps, Jenkins, and so much more.  
        I also have a Data Science Fellowship for FSU Libraries, and I have been in this position for the last 2 years. 
        Within this role I created and organized the Empowering Minds through Machine Learning Symposium. This symposium showcased student research at FSU within data science and machine learning, to inspire, educate and connect students. 
        I have also had the opportunity to create various learning materials and blog posts about data science topics, for students at FSU. 
        This year I also started a Peer Mentor role in the Freshman Seminar in Critical Thinking and Information Literacy course at FSU. </p>
        </div>
        <h3>Research Experience: </h3>

        <h3>Extracurriculers: </h3>
        <img src={logo} className="App-logo" alt="logo" />

      </header>
    </div>
    </Router>
  );
}

export default App;
