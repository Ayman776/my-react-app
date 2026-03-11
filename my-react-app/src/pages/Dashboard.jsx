function Dashboard() {

  const balance = 50
  const trips = 12
  const km = 320

const recentTrips = [
    "Utrecht → Amsterdam ",
    "Amsterdam → Rotterdam",
    "Utrecht → Den Haag"
  ]

  
  

  return (

    
    <div className="dashboard">

        

      <header className="header">
      <h1>Mobiliteit Dashboard</h1>
<div className="user">
        Ayman.A
      </div>    </header>
  

      <div className="cards">

        

        <div className="card">
          <h3>€ Saldo</h3>
          <p>€{balance}</p>
        </div>

        <div className="card">
          <h3>Trips</h3>
          <p>{trips}</p>
        </div>


        <div className="card">
          <h3>Kilometers</h3>
          <p>{km} km</p>
        </div>

           </div>

          <div className= "recent">
            
            <h3>Recente Trips</h3>
            <ul>
                {recentTrips.map((trip, index) => (
                    <li key={index}>{trip}</li>
                ))}
            </ul>
          
        </div>
 

      </div>



    
  )
}

export default Dashboard