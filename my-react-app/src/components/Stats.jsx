function Stats() {
  const goal = 100; 
  const current = 65; 

  const percentage = (current / goal) * 100;

  return (
    <div className="stats-container">
      <h3>Maanddoel</h3>

      <p>{current} / {goal} km</p>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>

      <div className="stats-extra">
        <p>Gemiddeld: 12 km per rit</p>
        <p>Ritten deze week: 8</p>
      </div>
    </div>
  );
}

export default Stats;