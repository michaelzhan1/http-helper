import { useState } from 'react';

// Extend the Window interface to include 'eel'
declare global {
  interface Window {
    eel: {
      set_host: (host: string) => void;
      say_hello_py: (
        message: string,
      ) => (callback: (response: string) => void) => void;
    };
  }
}

// Point Eel web socket to the instance
export const eel = window.eel;
eel.set_host('ws://localhost:5169');

function App() {
  const [input, setInput] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  return (
    <div className='App'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Type something...'
      />
      <button
        onClick={() =>
          eel.say_hello_py(input)((response: string) => setResponse(response))
        }
      >
        Send to Python
      </button>

      <div>
        <h1>Response</h1>
        <p>{response}</p>
      </div>
    </div>
  );
}

export default App;
