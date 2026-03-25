import { useState } from "react";

function Profile() {
  const [name, setName] = useState("Ayman A");
  const [isEditing, setIsEditing] = useState(false);

  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    emailVisible: false,
    activityVisible: true
  });

  const handleSave = () => {
    setIsEditing(false);
    console.log("Nieuwe naam:", name);
  };

  const handleToggle = (setting) => {
    setPrivacy({
      ...privacy,
      [setting]: !privacy[setting]
    });
  };

  const savePrivacy = () => {
    console.log("Privacy settings:", privacy);
  };

  return (
    <div className="profile-page">
      <h1>Profiel</h1>

      <div className="profile-container">

        {/* PROFIEL INFO */}
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
              <button
                className="edit-btn"
                onClick={() => setIsEditing(true)}
              >
                Bewerken
              </button>
            ) : (
              <button
                className="save-btn"
                onClick={handleSave}
              >
                Opslaan
              </button>
            )}
          </div>

          <p><strong>Email:</strong> ayman@email.com</p>
          <p><strong>Lid sinds:</strong> 2024</p>
        </div>

        {/* INSTELLINGEN */}
        <div className="profile-card">
          <h3>Instellingen</h3>

          <button className="profile-btn">Wachtwoord wijzigen</button>
          <button className="profile-btnn">Account verwijderen</button>
        </div>

        {/* PRIVACY */}
        <div className="profile-card">
          <h3>Privacy instellingen</h3>

          <label className="toggle">
            <input
              type="checkbox"
              checked={privacy.profileVisible}
              onChange={() => handleToggle("profileVisible")}
            />
            Profiel openbaar
          </label>

          <label className="toggle">
            <input
              type="checkbox"
              checked={privacy.emailVisible}
              onChange={() => handleToggle("emailVisible")}
            />
            Email zichtbaar
          </label>

          <label className="toggle">
            <input
              type="checkbox"
              checked={privacy.activityVisible}
              onChange={() => handleToggle("activityVisible")}
            />
            Activiteit zichtbaar
          </label>

          <button className="save-btn" onClick={savePrivacy}>
            Privacy opslaan
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;