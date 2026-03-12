import React from 'react';
import Image from './assets/mobiliteit.png';

function Home (){
    return(
        <div className= "home-page">
            <h1>Welkom bij Mobiliteit</h1>
            <img src={Image} alt="Mobiliteit" />
            <p>Log in of registreer om je mobiliteit dashboard te bekijken.</p>
           <div className="home-buttons">
  <a href="/login" className="home-btn">Login</a>
  <a href="/register" className="home-btn">Registreren</a>
</div>
        </div>

    ); 
}

export default Home;