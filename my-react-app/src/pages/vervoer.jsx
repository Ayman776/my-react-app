import { FaCar, FaTrain, FaBicycle, FaBus } from "react-icons/fa";

function Vervoer() {
  const transportData = [
    { type: "Auto", trips: 8, cost: 36, km: 220 },
    { type: "Trein", trips: 4, cost: 28, km: 100 },
    { type: "Bus", trips: 12, cost: 22, km: 50 },
    { type: "Fiets", trips: 6, cost: 0, km: 5 },
  ];

  const getIcon = (type) => {
    const icons = {
      Auto: <FaCar />,
      Trein: <FaTrain />,
      Fiets: <FaBicycle />,
      Bus: <FaBus />,
    };
    return icons[type];
  };

  const totalTrips = transportData.reduce((acc, i) => acc + i.trips, 0);
  const totalKm = transportData.reduce((acc, i) => acc + i.km, 0);
  const totalCost = transportData.reduce((acc, i) => acc + i.cost, 0);

  return (
    <div className="vervoer">
      <h1>Vervoer overzicht</h1>

      <div className="summary">
        <div className="card">
          <h3>{totalTrips}</h3>
          <p>Trips</p>
        </div>
        <div className="card">
          <h3>{totalKm} km</h3>
          <p>Afstand</p>
        </div>
        <div className="card">
          <h3>€{totalCost}</h3>
          <p>Kosten</p>
        </div>
      </div>

      <div className="card">
        <h2>Verdeling vervoer</h2>

        {transportData.map((item, i) => {
          const percentage = (item.trips / totalTrips) * 100;

          return (
            <div className="progress-item" key={i}>
              <div className="label">
                <span className="icon">{getIcon(item.type)}</span>
                <span>
                  {item.type} ({item.trips})
                </span>
                <span className="percentage">
                  {percentage.toFixed(0)}%
                </span>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: percentage + "%" }}
                ></div>
              </div>

              <div className="extra">
                <small>{item.km} km</small>
                <small>€{item.cost}</small>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Vervoer;