import React from 'react';
import './App.css';
import Index from "./pages";
import { AuthProvider } from './services/contexts/auth-context';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Index />
      </AuthProvider>
    </div>
  );
}

export default App;
