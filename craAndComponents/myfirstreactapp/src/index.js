import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);

const element = 
<table>
  <tr>
    <th>Name</th>
  </tr>
  <tr>
    <td>Pooja</td>
  </tr>
  <tr>
    <td>Rokade</td>
  </tr>
</table>
root.render(
  element
);



