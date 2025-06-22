import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import GlobalStyle from '@/styles/global.style';

// Extend the Window interface to include 'eel'
declare global {
  interface Window {
    eel: {
      set_host: (host: string) => void;
      make_curl_request: (
        url: string,
      ) => (callback: (response: string) => void) => void;
    };
  }
}

// Point Eel web socket to the instance
export const eel = window.eel;
eel.set_host('ws://localhost:5169');

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
