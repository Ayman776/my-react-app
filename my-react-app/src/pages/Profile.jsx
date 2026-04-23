import { useState } from "react";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [name, setName] = useState("Ayman A");
  const [tempName, setTempName] = useState(name);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setName(tempName);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempName(name);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
      <h1>Profiel</h1>

      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">{name.charAt(0)}</div>
          <div>
            <h2>{name}</h2>
            <p className="sub">Gebruiker</p>
          </div>
        </div>

        <div className="profile-section">
          <h3>Gegevens</h3>

          <div className="profile-field">
            <span>Naam</span>

            {isEditing ? (
              <input
                type="text"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                className="profile-input"
              />
            ) : (
              <strong>{name}</strong>
            )}
          </div>

          <div className="profile-field">
            <span>Email</span>
            <strong>ayman@email.com</strong>
          </div>

          <div className="profile-field">
            <span>Lid sinds</span>
            <strong>2024</strong>
          </div>

          <div className="actions">
            {!isEditing ? (
              <button className="btn" onClick={() => setIsEditing(true)}>
                Bewerken
              </button>
            ) : (
              <>
                <button className="btn primary" onClick={handleSave}>
                  Opslaan
                </button>
                <button className="btn" onClick={handleCancel}>
                  Annuleren
                </button>
              </>
            )}
          </div>
        </div>

        <div className="profile-section">
          <h3>Instellingen</h3>

          <Link to="/privacy" className="link">
            Privacy instellingen
          </Link>

          <button className="link danger">
            Uitloggen
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;