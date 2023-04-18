import './App.css';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Profile from './components/Profile.js'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Auth />}
          />
          <Route
            path="/profile"
            element={<Profile />} 
          />
        </Routes>
    </div>
  );
}

export default App;
