import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div className="App">
      {data ? (
        <div>
          <p>temperature: {data.temperature}</p>
          <p>humidity: {data.humidity}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Data;