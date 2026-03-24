function Profile() {
  const user = {
    name: "Ayman A",
    email: "ayman@email.com",
    joined: "2024",
  };

  return (
    <div className="profile-page">

      <h1>Profiel</h1>

      <div className="profile-container">

        {/* PROFIEL INFO */}
        <div className="profile-card">
          <h3>Gebruiker</h3>

          <p><strong>Naam:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Lid sinds:</strong> {user.joined}</p>
        </div>

        {/* INSTELLINGEN */}
        <div className="profile-card">
          <h3>Instellingen</h3>

          <button className="profile-btn">Wachtwoord wijzigen</button>
          <button className="profile-btn">Account verwijderen</button>
        </div>

      </div>
    </div>
  );
}

export default Profile;