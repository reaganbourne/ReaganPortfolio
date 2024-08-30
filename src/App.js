import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
//import myImage from 'portfolio1/reagan-portfolio1/public/reaganAstronaut.png';

//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
      <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#experience">Experience</a></li>
            <li><a href="#extracurriculars">Extracurriculars</a></li>
            <li><a href="#research">Research Experience</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </nav>
      <h1>Reagan Bourne</h1>
      <img src="/reaganAstronaut.png" className="App-logo" alt="logo" />
      <p>Hi I'm Reagan! I am a senior pursuing a B.S. in Computer Science at FSU. 
        Please look through this website to learn more about me :)  </p>
      </header>

      <main>
        <section id="experience" className="section-style"> 
        <h2 style={{ textAlign: 'left'}}>Experience: </h2>
        <div className="text-container">
        <p style={{ textAlign: 'left' }}>Over the summer of 2024, I had the priviledge of serving as a Software Engineer Intern for L3Harris, where I 
         improved my skills in Java, shell scripting, DevSecOps, Jenkins, among other technologies. 
         This experience allowed me to engage in real-world projects that improved my technical skills, and solidified my understanding of the software engineering methodologies.
        In addition to my internship, I have held a Data Science Fellowship for FSU Libraries for the past two years. 
        Within this role I created and organized the Empowering Minds through Machine Learning Symposium. This symposium showcased student research at FSU within data science and machine learning, to inspire, educate and connect students. 
        I have also had the opportunity to create various learning materials, workshops and blog posts about data science topics, for students at FSU. 
        This year I also started a Peer Mentor role in the Freshman Seminar in Critical Thinking and Information Literacy course at FSU. In this role I guide and support first-year students in challenges within their academic life, and help them build strong foundations in critical thinking and research skills. </p>
        </div>

        </section>

        <section id="research" className="section-style">
        <h2 style={{ textAlign: 'left'}}>Research Experience: </h2>
        <div className="text-container">

        <p style={{ textAlign: 'left'}}>In my time at FSU I have also had the opportunity to participate in two research projects, that have deepened my understanding of both neural networks and artificial intelligence in the context of real-world applications. 
          The first research project was part of the Directed Reading Program for the Graduate Math Department. My research project was about "Understanding Neural Networks and their Utilization in Health Care Data Visualization". 
          This project allowed me to understand and explore the complex algorithms behind neural networks and their potential to transform how health care data is visualized and used. 
          I had the opportunity to present my research at the Graduate Student Seminar, and at the Undergraduate Computer Science Exposition 2023 where I was awarded first place.
          The second research project was a Directed Individual Study on "Artificial Intelligence Powered Smart Cities", under the Computer Science Department. 
          I mainly focused on a comprehensive literature review to better understand the challenges and opportunities related to electric vehicle adoption in rural areas. I also did some data analysis and created data visualizations to highlight insights. </p>
        </div>
        </section>

        <section id="extracurriculars" className="section-style">
        <h2 style={{ textAlign: 'left'}}>Extracurriculers: </h2>
        <div className="text-container">

        <p style={{ textAlign: 'left'}}>Outside of my coursework, I have been actively involved in several leadership positions on campus. I am currently the Vice President of Women in Computer Science, and the Recruitment Chair for Connecting Girls to STEM. 
          Our goals are to create a supportive community for women and empower them to achieve their professional goals within the STEM field. I am also a member of STARS Alliance, where our mission is to broaden participating in computing through best practices and community building. 
          I am also a member of the Cyber Security Club, and the Association for Computing Machinery. Also, last year I had the opportunity to teach a workshop about DeepFakes to the Cyber Security club. 
          I am also a member of the honor society Order of Omega, which recognizes students for their academic achievements and leadership within the Greek Community. Additionally I am a member of the sorority Alpha Chi Omega, where I contribute to our philanthropic efforts and initiatives. 
          </p>
          </div>

          </section>
          <section id="contact" className="section-style">
          <h2 style={{ textAlign: 'left'}}>Contact Me: </h2>
          
          <p style={{ textAlign: 'left'}}> 
          Please feel free to contact me through email 
          <a href="mailto:reaganebourne@gmail.com"> reaganebourne@gmail.com </a> 
              or connect with me on 
              <a href="https://www.linkedin.com/in/reaganbourne" target="_blank" rel="noopener noreferrer"> LinkedIn!</a>.
          </p>
            </section>
          </main>
        </div>

    </Router>
  );
}

export default App;
