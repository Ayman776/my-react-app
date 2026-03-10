function Dashboard() {

  const balance = 50
  const trips = 12
  const km = 320
  

  return (
    <div className="dashboard">

      <h1>Dashboard</h1>

      <div className="cards">

        <div className="card">
          <h3>Saldo</h3>
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

    </div>
  )
}

export default Dashboard