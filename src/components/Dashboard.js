import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Update this import

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate(); // Replace useHistory with useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (!token) {
      navigate('/login'); // Use navigate instead of history.push
    } else {
      setUser({ name: 'John Doe' }); // Example static user data
    }
  }, [navigate]);

  return (
    <div>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <p>Your personalized nutrition dashboard will be here.</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard;
