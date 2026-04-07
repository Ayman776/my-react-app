import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Profile from "./pages/Profile.jsx";
import Privacy from "./pages/Privacy.jsx";
import Settings from "./pages/settings.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";



function App() {
  return (
    <BrowserRouter>
      <Routes>
    
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      
        <Route
          path="/dashboard"
          element={
            <div className="layout" style={{ display: "flex" }}>
              <Sidebar />
              <Dashboard />
            </div>
          }
        />

        <Route
          path="/profile"
          element={
            <div className="layout" style={{ display: "flex" }}>
              <Sidebar />
              <Profile />
            </div>
          }
        />

        <Route
          path="/privacy"
          element={
            <div className="layout" style={{ display: "flex" }}>
              <Sidebar />
              <Privacy />
            </div>
          }
        />

        <Route
          path="/settings"
          element={
            <div className="layout" style={{ display: "flex" }}>
              <Sidebar />
              <Settings />
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;