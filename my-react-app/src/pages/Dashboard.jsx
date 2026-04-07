import { useState } from "react";
import Chart from "../components/Chart";
import Stats from "../components/Stats";
import Header from "../Header";
import { FaCar, FaEuroSign } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

function Dashboard() {
    
    const [balance] = useState(50);
    const [trips] = useState(12);
    const [km] = useState(320);
    const [filter, setFilter] = useState("week");

    const trends = {
        balance: +5.2,
        trips: -2.1,
        km: +12.4,
    };

  
    const [recentTrips] = useState([
        { from: "Utrecht", to: "Amsterdam", time: "25 min", type: "Auto", cost: 4.5, date: "Vandaag" },
        { from: "Amsterdam", to: "Rotterdam", time: "40 min", type: "Trein", cost: 7.2, date: "Gisteren" },
        { from: "Utrecht", to: "Den Haag", time: "35 min", type: "Auto", cost: 5.1, date: "Ma 2 okt" },
    ]);

    const totalCost = recentTrips.reduce((acc, trip) => acc + trip.cost, 0);
    const mostUsedType = "Auto"; 

  
    const renderTrend = (value) => (
        <span className={value >= 0 ? "trend up" : "trend down"}>
            {value >= 0 ? "↑" : "↓"} {Math.abs(value)}%
        </span>
    );

    return (
        <div className="dashboard">

            <Header />

        
            <div className="actions">
                <button className="btn primary">+ Nieuwe trip</button>
                <button className="btn">Saldo opladen</button>
            </div>

            <div className="cards">
                <div className="card">
                    <h3>Saldo</h3>
                    <p>€{balance}</p>
                    {renderTrend(trends.balance)}
                </div>

                <div className="card">
                    <h3>Trips</h3>
                    <p>{trips}</p>
                    {renderTrend(trends.trips)}
                </div>

                <div className="card">
                    <h3>Kilometers</h3>
                    <p>{km} km</p>
                    {renderTrend(trends.km)}
                </div>
            </div>

          
            <div className="chart-section">
                <div className="chart-header">
                    <h3>Overzicht</h3>

                    <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="day">Vandaag</option>
                        <option value="week">Deze week</option>
                        <option value="month">Deze maand</option>
                    </select>
                </div>

                <div className="chart-box">
                    <Chart filter={filter} />
                </div>
            </div>

           
          <div className="insights">
    <h3>Inzichten</h3>

    <p className="insight-item">
        <MdTrendingUp className="icon" />
        Je hebt {trends.km}% meer kilometers gemaakt deze periode
    </p>

    <p className="insight-item">
        <FaEuroSign className="icon" />
        Totale kosten recente trips: €{totalCost.toFixed(2)}
    </p>

    <p className="insight-item">
        <FaCar className="icon" />
        Meest gebruikte vervoer: {mostUsedType}
    </p>
</div>

        
            <div className="recent">
                <h3>Recente Trips</h3>

                <div className="trip-list">
                    {recentTrips.map((trip, index) => (
                        <div className="trip-row" key={index}>
                            <div className="trip-left">
                                <span className="trip-route">
                                    {trip.from} → {trip.to}
                                </span>

                                <span className="trip-sub">
                                    {trip.date} • {trip.time} • {trip.type}
                                </span>
                            </div>

                            <div className="trip-cost">
                                €{trip.cost.toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        
            <div className="dashboard-row">
                <div className="chart-box">
                    <Chart filter={filter} />
                </div>

                <div className="stats-box">
                    <Stats />
                </div>
            </div>

        </div>
    );
}

export default Dashboard;