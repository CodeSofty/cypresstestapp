"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define what items are expected 
interface Item {
  name: string;
  description: string;
}

const DisplayContents: React.FC = () => {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  // Fetches data on mount
  const fetchData = async () => {
    try {
      const response = await axios.get<Item[]>('/api/dataRoute');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  // Displays data 
  return (
    <div className="results-container">
      <ul>
        {data.map((item, index) => (
          <li className="result-item" key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayContents;
