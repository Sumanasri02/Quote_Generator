import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './App.jsx'; // ✅ this will now work

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Counter/>

  </React.StrictMode>
);
