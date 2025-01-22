import React from 'react';

function SchedulePickup() {
  return (
    <div>
      <h2>Schedule a Pickup</h2>
      <form>
        <input type="date" placeholder="Pickup Date" />
        <input type="text" placeholder="Waste Type" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SchedulePickup;
