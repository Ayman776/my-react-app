import { useState } from "react";
import {
  FaUsers,
  FaCar,
  FaEuroSign,
  FaTrash,
  FaSearch,
  FaUserShield,
} from "react-icons/fa";

function Admin() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ayman",
      email: "ayman@email.com",
      role: "Admin",
      trips: 24,
    },
    {
      id: 2,
      name: "Sara",
      email: "sara@email.com",
      role: "User",
      trips: 12,
    },
    {
      id: 3,
      name: "Tom",
      email: "tom@email.com",
      role: "User",
      trips: 8,
    },
     {
      id: 4,
      name: "Jan",
      email: "jan@email.com",
      role: "User",
      trips: 10,
    },
  ]);

  const [search, setSearch] = useState("");

  const totalTrips = users.reduce((acc, user) => acc + user.trips, 0);

  const revenue = totalTrips * 4.5;

  const deleteUser = (id) => {
    const confirmDelete = window.confirm(
      "Weet je zeker dat je deze gebruiker wilt verwijderen?"
    );

    if (confirmDelete) {
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Beheer gebruikers, trips en statistieken</p>
        </div>

        <div className="search-box">
          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Zoek gebruiker..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="admin-stats">
        <div className="admin-card">
          <FaUsers className="admin-icon" />
          <h3>Gebruikers</h3>
          <p>{users.length}</p>
        </div>

        <div className="admin-card">
          <FaCar className="admin-icon" />
          <h3>Trips</h3>
          <p>{totalTrips}</p>
        </div>

        <div className="admin-card">
          <FaEuroSign className="admin-icon" />
          <h3>Omzet</h3>
          <p>€{revenue.toFixed(2)}</p>
        </div>
      </div>

      <div className="users-section">
        <h2>Gebruikers beheren</h2>

        {filteredUsers.length === 0 ? (
          <p>Geen gebruikers gevonden</p>
        ) : (
          filteredUsers.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="user-left">
                <div className="avatar">
                  {user.name.charAt(0)}
                </div>

                <div>
                  <h3>{user.name}</h3>
                  <p>{user.email}</p>

                  <div className="user-meta">
                    <span className="role">
                      <FaUserShield />
                      {user.role}
                    </span>

                    <span>{user.trips} trips</span>
                  </div>
                </div>
              </div>

              <button
                className="delete-btn"
                onClick={() => deleteUser(user.id)}
              >
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Admin;