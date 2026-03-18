import React from 'react';
import Image from './assets/mobiliteit.png';

function Home (){
    return(
      <div className="welcome-page">
  <div className="welcome-left">
    <h1>Mobiliteit Dashboard</h1>
    <p>Volg al je trips, saldo en kilometers in één overzicht.</p>
    <div className="cta-buttons">
    <a href="/login" className="btn-login">Inloggen</a>
       <a href="/register" className="btn-register">Registeren</a>
    </div>
  </div>

  <div className="welcome-right">
    <img src="src/assets/mobiliteit.png" alt="Dashboard illustratie" />
  </div>
</div>
    ); 
}

export default Home;