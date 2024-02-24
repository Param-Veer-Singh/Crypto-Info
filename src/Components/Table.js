import React from 'react';

const Table = ({ crypto }) => {
  return (
    <tr>
      <td>
        <img src={crypto.image} alt={crypto.name} style={{ width: '30px', height: '30px' }} />
      </td>
      <td>{crypto.name}</td>
      <td className='symbol'>{crypto.symbol}</td>
      <td>${crypto.current_price}</td>
      <td>Mkt Cap : ${crypto.total_volume}</td>
    </tr>
  );
};

export default Table;