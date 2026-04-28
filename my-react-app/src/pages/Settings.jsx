import { useState, useEffect } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem("notifications") !== "false";
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "nl";
  });

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  useEffect(() => {
    localStorage.setItem("notifications", notifications);
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  const handleDeleteAccount = () => {
    const confirmDelete = window.confirm(
      "Weet je zeker dat je je account wilt verwijderen?"
    );
    if (confirmDelete) {
      alert("Account verwijderd (demo)");
    }
  };

  return (
    <div className="settings-page">
      <h1>Instellingen</h1>
      <p className="subtitle">Beheer je voorkeuren en account</p>

      <div className="settings-grid">
        
        <div className="settings-card">
          <h3>Weergave</h3>

          <div className="setting-item">
            <span>Donkere modus</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode((prev) => !prev)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-card">
          <h3>Notificaties</h3>

          <div className="setting-item">
            <span>Email notificaties</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications((prev) => !prev)}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-card">
          <h3>Taal</h3>

          <select
            className="select"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="nl">Nederlands</option>
            <option value="en">English</option>
          </select>
        </div>

        <div className="settings-card">
          <h3>Account</h3>

          <button className="btn">
            Wachtwoord wijzigen
          </button>

          <button
            className="btn danger"
            onClick={handleDeleteAccount}
          >
            Account verwijderen
          </button>
        </div>

      </div>
    </div>
  );
}

export default Settings;