import { useState } from 'react';

import { eel } from '@/main';

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
          eel.make_curl_request(input)((response: string) =>
            setResponse(response),
          )
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
