import { Link } from "react-router-dom";

function Sidebar (){

    
    return(
        
<div className= "sidebar">
    <h2>Reisbalans</h2>
    <ul>
  <li><Link to="/dashboard">Dashboard</Link></li>
    <li><Link to="/vervoer">Vervoer</Link></li>
  <li><Link to="/profile">Profiel</Link></li>

  <div className="sidebar2">
  <ul>
 <li><Link to="/privacy">Privacy</Link></li>
  <li><Link to="/settings">Instellingen</Link></li>
    <li><Link to="/klantenservice">Klantenservice</Link></li>
  </ul>
  </div>
 

</ul>

    <div className="logout">
        <div className="logout"> <a href="/login">Log out</a></div>
      </div>

</div>
    );
}

export default Sidebar