import React, { useState, useEffect } from 'react';
import Table from './Components/Table'
import './App.css';

function App() {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <table>
        <tbody>
          {cryptoData.map((crypto) => (
            <Table key={crypto.id} crypto={crypto} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
