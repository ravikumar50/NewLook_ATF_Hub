import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import HomePage from './Pages/HomePage';

import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from "@azure/msal-browser";
import DownloadPage from './Pages/DownloadPage';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MsalAuthenticationTemplate interactionType={InteractionType.Redirect}>
            <HomePage />
          </MsalAuthenticationTemplate>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/download" element={<DownloadPage />} />
    </Routes>
  );
}

export default App;
