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

  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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

  const handleChangePassword = () => {
    if (!newPassword || !confirmPassword) {
      alert("Vul alle velden in");
      return;
    }

    if (newPassword !== confirmPassword) {
      alert("Wachtwoorden komen niet overeen");
      return;
    }

    alert("Wachtwoord gewijzigd (demo)");
    setNewPassword("");
    setConfirmPassword("");
    setShowPasswordModal(false);
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

          <button className="btn" onClick={() => setShowPasswordModal(true)}>
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

      {showPasswordModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Wachtwoord wijzigen</h3>

            <input
              type="password"
              placeholder="Nieuw wachtwoord"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />

            <input
              type="password"
              placeholder="Bevestig wachtwoord"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <div className="modal-actions">
              <button onClick={() => setShowPasswordModal(false)}>
                Annuleren
              </button>

              <button className="primary" onClick={handleChangePassword}>
                Opslaan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;