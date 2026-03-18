import Chart from "../components/Chart";
import Stats from "../components/Stats";
import Header from "../Header";


function Dashboard() {
    const balance = 50;
    const trips = 12;
    const km = 320;

    const recentTrips = [
        { from: "Utrecht", to: "Amsterdam", time: "25 min", type: "Auto", cost: "€4.50" },
        { from: "Amsterdam", to: "Rotterdam", time: "40 min", type: "Trein", cost: "€7.20" },
        { from: "Utrecht", to: "Den Haag", time: "35 min", type: "Auto", cost: "€5.10" },
    ];

    return (
        <div className="dashboard">

          
            <Header />

        
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

       
            <div className="recent">
                <h3>Recente Trips</h3>

                <div className="trip-list">
                    {recentTrips.map((trip, index) => (
                        <div className="trip-row" key={index}>
                            <div className="trip-left">
                                <span className="trip-route">{trip.from} → {trip.to}</span>
                                <span className="trip-sub">{trip.time} • {trip.type}</span>
                            </div>
                            <div className="trip-cost">{trip.cost}</div>
                        </div>
                    ))}
                </div>
            </div>

         
            <div className="dashboard-row">
                <div className="chart-box">
                    <Chart />
                </div>

                <div className="stats-box">
                    <Stats />
                </div>
            </div>

        </div>
    );
}

export default Dashboard;