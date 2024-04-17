import React from "react";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar"; 
import './About_us.css'

function About_us() {
    return (
        <div>
          <NavBar></NavBar>
          <main className="audit-x-container">
            <section className="section">
              <h1 className="section-title">Project Description: "Audit-X"</h1>
              <p className="section-content">
                Audit-X is an innovative project designed to enhance accessibility for individuals with visual impairments. This project combines two key functionalities: translating standard text into braille and converting braille text into audio, providing a comprehensive solution for users with specific accessibility needs.
              </p>
            </section>
    
            <section className="section">
              <h2 className="section-subtitle">Key Features:</h2>
              {/* Features like Translation from Arabic Text to Braille could be components */}
              <div className="feature">
                <h3 className="feature-title">Translation from Arabic Text to Braille:</h3>
                <p className="feature-description">- The Audit-X application allows users to input text in Arabic...</p>
                {/* More descriptions */}
              </div>
              {/* ... Other features ... */}
            </section>
    
            <section className="section">
              <h2 className="section-subtitle">Objectives and Benefits:</h2>
              <ul className="benefits-list">
                <li>Universal Accessibility: Audit-X aims to make information more accessible...</li>
                {/* More list items */}
              </ul>
            </section>
    
            <section className="section">
              <h2 className="section-subtitle">Potential Uses:</h2>
              <ul className="uses-list">
                <li>Education: Audit-X can be employed in educational institutions...</li>
                {/* More list items */}
              </ul>
            </section>
    
            <section className="section">
              <h2 className="section-subtitle">Conclusion:</h2>
              <p className="section-content">
                In summary, Audit-X represents an innovative project leveraging technology to promote inclusion and accessibility...
              </p>
            </section>
          </main>
          <Footer></Footer>
        </div>
      );
    }
    
    export default About_us;