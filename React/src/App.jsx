// frontend/src/App.js
import React, { useState, useEffect } from 'react';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch('/api/data')
          .then(response => response.json())
          .then(data => {
              console.log('Received data:', data);
              setData(data);
          })
          .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  

    return (
        <div>
            <h1>React Frontend</h1>
            <p>{data ? data.message : 'Loading...'}</p>
        </div>
    );
}

export default App;
