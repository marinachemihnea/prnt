import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{fontFamily: 'system-ui, -apple-system, sans-serif', padding: 20}}>
      Loading...
    </div>
  );
}

const el = document.getElementById('root');
if (el) {
  createRoot(el).render(<App />);
}
