import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';

import { useIsAuthenticated } from "@azure/msal-react";

function App() {
  const isAuthenticated = useIsAuthenticated();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          isAuthenticated ? <HomePage /> : <Navigate to="/login" />
        }
      />
    </Routes>
  );
}

export default App;

