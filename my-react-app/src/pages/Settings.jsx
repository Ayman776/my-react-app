import { useState, useEffect } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Effect om dark mode klasse op <body> te zetten
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="settings-page">
      <h1>Instellingen</h1>

      <div className="settings-card">
        <h3>Weergave</h3>
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Donkere modus
        </label>
      </div>

      <div className="settings-card">
        <h3>Notificaties</h3>
        <label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          Email-notificaties
        </label>
      </div>

      <div className="settings-card">
        <h3>Account</h3>
        <button className="profile-btn">Wachtwoord wijzigen</button>
        <button className="profile-btnn" style={{ backgroundColor: "red" }}>
          Account verwijderen
        </button>
      </div>
    </div>
  );
}

export default Settings;