import React from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import SchedulePickup from './components/SchedulePickup';

function App() {
  return (
    <div>
      <Navbar />
      <Dashboard />
      <SchedulePickup />
    </div>
  );
}

export default App;
