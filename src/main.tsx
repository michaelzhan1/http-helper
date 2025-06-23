import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from '@/App';
import GlobalStyle from '@/styles/global.style';
import { EelHttpResponse, MethodType } from '@/types/http.type';

// Extend the Window interface to include 'eel'
declare global {
  interface Window {
    eel: {
      set_host: (host: string) => void;
      make_http_request: (
        url: string,
        method: MethodType,
        params: Record<string, string>,
        headers: Record<string, string>,
        body: string,
      ) => (callback: (response: EelHttpResponse) => void) => void;
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
