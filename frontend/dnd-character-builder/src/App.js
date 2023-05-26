import './App.css';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Profile from './components/Profile.js'
import ProtectedRoute from './components/ProtectedRoute'
import { Route, Routes, Navigate } from 'react-router-dom'
import { UserContext } from './context/UserProvider'
import { useContext } from 'react'

function App() {
  const { token, logout } = useContext(UserContext)
  return (
    <div className="App">
      { token && <Navbar logout={logout}/> }
        <Routes>
          <Route
            path="/"
            element={ token ? <Navigate to="/profile/"/> : <Auth />}
          />
          <Route
            path="/profile"
            element={<ProtectedRoute token={token}> <Profile /> </ProtectedRoute>} 
          />
        </Routes>
    </div>
  );
}

export default App;
