import React from 'react';
import {createRoot} from 'react-dom/client';
import ColorProvider from './components/ColorProvider';
import App from './App';

createRoot(document.getElementById('root')).render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
