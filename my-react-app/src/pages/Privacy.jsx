import { useState } from "react";


function PrivacyPage() {
  const [privacy, setPrivacy] = useState({
    profileVisible: true,
    emailVisible: false,
    activityVisible: true
  });

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
    <div className="privacy-page">
      <h1>Privacy instellingen</h1>

      <div className="profile-card">
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
  );
}

export default PrivacyPage;