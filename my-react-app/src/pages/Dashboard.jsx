import { useState } from "react";
import Chart from "../components/Chart";
import Stats from "../components/Stats";
import Header from "../Header";
import { FaCar, FaEuroSign } from "react-icons/fa";
import { MdTrendingUp } from "react-icons/md";

function Dashboard() {
  const [balance, setBalance] = useState(50);
  const [km] = useState(320);

  const [showTripModal, setShowTripModal] = useState(false);
  const [showBalanceModal, setShowBalanceModal] = useState(false);
  const [addAmount, setAddAmount] = useState("");

  const [tripsList, setTripsList] = useState([
    { from: "Utrecht", to: "Amsterdam", type: "Auto", cost: 4.5, date: "Vandaag" },
    { from: "Amsterdam", to: "Rotterdam", type: "Trein", cost: 7.2, date: "Gisteren" },
  ]);

  const [trip, setTrip] = useState({
    from: "",
    to: "",
    type: "",
    cost: "",
  });

  const handleSaveTrip = () => {
    if (!trip.from || !trip.to || !trip.type) {
      alert("Vul alle velden in");
      return;
    }

    const newTrip = {
      ...trip,
      cost: Number(trip.cost) || 0,
      date: "Vandaag",
    };

    setTripsList([newTrip, ...tripsList]);

    setTrip({ from: "", to: "", type: "", cost: "" });
    setShowTripModal(false);
  };

  const handleAddBalance = () => {
    const amount = Number(addAmount);
    if (!amount) return;

    setBalance((prev) => prev + amount);
    setAddAmount("");
    setShowBalanceModal(false);
  };

  const totalCost = tripsList.reduce((acc, t) => acc + t.cost, 0);

  const mostUsed = tripsList.reduce((acc, t) => {
    acc[t.type] = (acc[t.type] || 0) + 1;
    return acc;
  }, {});

  const topType =
    Object.entries(mostUsed).sort((a, b) => b[1] - a[1])[0]?.[0] || "Auto";

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
          <p>{tripsList.length}</p>
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
        <p><MdTrendingUp /> Activiteit overzicht</p>
        <p><FaEuroSign /> €{totalCost.toFixed(2)} kosten</p>
        <p><FaCar /> Meest gebruikt: {topType}</p>
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
              <button className="primary" onClick={handleAddBalance}>
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

            <input
              placeholder="Van"
              value={trip.from}
              onChange={(e) => setTrip({ ...trip, from: e.target.value })}
            />

            <input
              placeholder="Naar"
              value={trip.to}
              onChange={(e) => setTrip({ ...trip, to: e.target.value })}
            />

            <input
              placeholder="Type vervoer"
              value={trip.type}
              onChange={(e) => setTrip({ ...trip, type: e.target.value })}
            />

            <input
              type="number"
              placeholder="Kosten"
              value={trip.cost}
              onChange={(e) => setTrip({ ...trip, cost: e.target.value })}
            />

            <div className="modal-actions">
              <button onClick={() => setShowTripModal(false)}>
                Sluiten
              </button>

              <button className="primary" onClick={handleSaveTrip}>
                Opslaan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Dashboard;