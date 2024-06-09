// src/App.js
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const token = localStorage.getItem('token');
  console.log('Token:', token);

  return (
    <div>
      <ThemeToggle />
      <Routes>
        {!token ? (
          <Route path="/login" element={<LoginPage />} />
        ) : (
          <>
            <Route path="/login" element={<Navigate to="/dashboard" />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </>
        )}
        <Route path="*" element={<Navigate to={!token ? "/login" : "/dashboard"} />} />
      </Routes>
    </div>
  );
}

export default App;
