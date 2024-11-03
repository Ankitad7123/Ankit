import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>Ankit Dubey</h1>
      </header>
      <main className='main'>
        <p>Experienced in Golang, React, Sql and Django. Passionate about building efficient, scalable web applications.</p>
      </main>
      <footer>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/ankitdprofile/" target="_blank" rel="noopener noreferrer">
              <img style={{marginTop:"4px"}}src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
            </a>
          </li>
          <li style={{marginTop:"8px" , width:"70px"}}>
            <a href="https://x.com/GoReactDevAnkit" target="_blank" rel="noopener noreferrer">
              <img style={{width:"40px"}} src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" alt="X" />
            </a>
          </li>
          <li>
            <a href="mailto:ankit11akhil@gmail.com">
              <img style={{marginTop:"4px"}} src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png" alt="Email" />
            </a>
          </li>
        </ul>
        <img className="background-image" src="https://www.inventateq.com/assets/python/small.gif" alt="Background Animation" />
      </footer>
    </div>
  );
}

export default App;
