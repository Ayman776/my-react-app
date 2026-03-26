import { useState } from "react";
import { Link } from "react-router-dom";

function ProfilePage() {
  const [name, setName] = useState("Ayman A");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    console.log("Nieuwe naam:", name);
  };

  return (
    <div className="profile-page">
      <h1>Profiel</h1>

      <div className="profile-card">
        <h3>Gebruiker</h3>
        <div className="profile-field">
          <strong>Naam:</strong>
          {isEditing ? (
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="profile-input"
            />
          ) : (
            <span className="profile-value">{name}</span>
          )}
          {!isEditing ? (
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Bewerken
            </button>
          ) : (
            <button className="save-btn" onClick={handleSave}>
              Opslaan
            </button>
          )}
        </div>

        <p><strong>Email:</strong> ayman@email.com</p>
        <p><strong>Lid sinds:</strong> 2024</p>

        {/* Link naar aparte privacy pagina */}
        <Link to="/privacy" className="profile-btn">
          Privacy instellingen
        </Link>
      </div>

     
    </div>
  );
}

export default ProfilePage;