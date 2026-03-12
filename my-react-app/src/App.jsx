import { BrowserRouter, Routes, Route } from "react-router-dom"

import Sidebar from "./components/sidebar.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Login from "./Login.jsx"
import Register from "./Register.jsx"
import Home from "./Home.jsx"

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
            <div className="layout">
              <Sidebar />
              <Dashboard />
            </div>
          }
        />

      </Routes>

    </BrowserRouter>
  )
}

export default App