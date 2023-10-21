
import './App.css';
import React from 'react';
function App() {
  return (
    <div className="portfolio">
      <header className="header">
        <h1>Narasimha Swaroop</h1>
      </header>

      <div className="content">
        <section className="section">
          <h2>Introduction</h2>
          <p>
            Myself swaroop, swaroop narasimha, a B.Tech student fully on to a deep learning models creation.
          </p>
        </section>

        <section className="section">
          <h2>Skills</h2>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>Data Structures</li>
            <li>HTML & CSS</li>
            <li>SQL</li>
            <li>JavaScript</li>
          </ul>
        </section>

        <section className="section">
          <h2>Projects</h2>
          <ul>
            <li>Fake currency detection</li>
            <li>currency classification</li>
            <li>farming application</li>
            <li>farmers chatbot</li>
          </ul>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <a href="mailto:mahendrapachipala123@gmail.com">Email me</a>
        </section>
      </div>
    </div>
  );
}

export default App; // Add this export statement to make the component available for use in other parts of your application
