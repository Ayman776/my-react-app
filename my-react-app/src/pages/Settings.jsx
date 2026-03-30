import { useState, useEffect } from "react";

function Settings() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem("notifications") !== "false";
  });

  const [sound, setSound] = useState(() => {
    return localStorage.getItem("sound") !== "false";
  });

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "nl";
  });

  // Dark mode toepassen
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Opslaan instellingen
  useEffect(() => {
    localStorage.setItem("notifications", notifications);
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("sound", sound);
  }, [sound]);

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

      {/* WEERGAVE */}
      <div className="settings-card">
        <h3>Weergave</h3>
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode((prev) => !prev)}
          />
          <span>Donkere modus</span>
        </label>
      </div>

      {/* NOTIFICATIES */}
      <div className="settings-card">
        <h3>Notificaties</h3>

        <label className="switch">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications((prev) => !prev)}
          />
          <span>Email-notificaties</span>
        </label>

        <label className="switch">
          <input
            type="checkbox"
            checked={sound}
            onChange={() => setSound((prev) => !prev)}
          />
          <span>Geluid</span>
        </label>
      </div>

      {/* TAAL */}
      <div className="settings-card">
        <h3>Taal</h3>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="nl">Nederlands</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* ACCOUNT */}
      <div className="settings-card">
        <h3>Account</h3>

        <button className="profile-btn">
          Wachtwoord wijzigen
        </button>

        <button
          className="profile-btn danger"
          onClick={handleDeleteAccount}
        >
          Account verwijderen
        </button>
      </div>
    </div>
  );
}

export default Settings;