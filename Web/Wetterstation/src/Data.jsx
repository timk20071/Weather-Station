import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Data() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://10.10.0.152:5000/api/data')
      .then(response => {
        setData(response.data); // Store the data from the API response
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error); // Handle any error in fetching data
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="App">
      {data ? (
        <div>
          <p>Temperature: {data.temperature}</p>
          <p>Humidity: {data.humidity}</p>
        </div>
      ) : (
        <p>Loading...</p> // Show loading text while waiting for data
      )}
    </div>
  );
}

export default Data;
