import { useState } from "react";
import Chart from "../components/Chart";
import Stats from "../components/Stats";
import Header from "../Header";
import { FaCar, FaEuroSign } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

function Dashboard() {
  const [balance, setBalance] = useState(50);
  const [trips] = useState(12);
  const [km] = useState(320);

  const [showTripModal, setShowTripModal] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [addAmount, setAddAmount] = useState("");

  const recentTrips = [
    { from: "Utrecht", to: "Amsterdam", time: "25 min", type: "Auto", cost: 4.5, date: "Vandaag" },
    { from: "Amsterdam", to: "Rotterdam", time: "40 min", type: "Trein", cost: 7.2, date: "Gisteren" },
  ];

  const totalCost = recentTrips.reduce((acc, t) => acc + t.cost, 0);

  const addBalance = () => {
    const amount = Number(addAmount);
    if (!amount) return;
    setBalance(balance + amount);
    setAddAmount("");
    setShowBalanceModal(false);
  };

  return (
    <div className="dashboard">
      <Header />

      <div className="actions">
        <button className="btn primary" onClick={() => setShowTripModal(true)}>
          + Nieuwe trip
        </button>

        <button className="btn" onClick={() => setShowBalanceModal(true)}>
          Saldo opladen
        </button>
      </div>

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

      <div className="chart-box">
        <Chart />
      </div>

      <div className="insights">
        <h3>Inzichten</h3>
        <p><MdTrendingUp /> Meer activiteit deze week</p>
        <p><FaEuroSign /> €{totalCost.toFixed(2)} kosten</p>
        <p><FaCar /> Meest gebruikt: Auto</p>
      </div>

      <div className="bottom-section">
        <Stats />
      </div>

      {showBalanceModal && (
  <div className="modal-overlay">
    <div className="modal">
      <h3>Saldo opladen</h3>

      <input
        type="number"
        placeholder="Bedrag"
        value={addAmount}
        onChange={(e) => setAddAmount(e.target.value)}
      />

      <div className="modal-actions">
        <button onClick={() => setShowBalanceModal(false)}>
          Annuleren
        </button>
        <button className="primary" onClick={addBalance}>
          Opladen
        </button>
      </div>
    </div>
  </div>
)}


{showTripModal && (
  <div className="modal-overlay">
    <div className="modal">
      <h3>Nieuwe trip</h3>

      <input placeholder="Van" />
      <input placeholder="Naar" />
      <input placeholder="Type vervoer" />

      <div className="modal-actions">
        <button onClick={() => setShowTripModal(false)}>
          Sluiten
        </button>
        <button className="primary">Opslaan</button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}

export default Dashboard;