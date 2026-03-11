function Sidebar (){
    return(
<div className= "sidebar">
    <h2>Reisbalans</h2>
    <ul>
        <li>Dashboard</li>
        <li>Trips</li>
        <li>Saldo</li>
        <li>Instellingen</li>
    </ul>

    <div className="logout">
        <div className="logout"> <a href="/login">Log out</a></div>
      </div>

</div>
    );
}

export default Sidebar