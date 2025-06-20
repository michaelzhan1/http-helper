import { useState } from 'react'

// Point Eel web socket to the instance
declare const window: any;
export const eel = window.eel
eel.set_host( 'ws://localhost:5169' )

// Test anonymous function when minimized. See https://github.com/samuelhwilliams/Eel/issues/363
function show_log(msg:string) {
  console.log(msg)
}
window.eel.expose(show_log, 'show_log')

function App() {
  const [input, setInput] = useState<string>('');
  const [response, setResponse] = useState<string>('');

  return (  
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type something..."
      />
      <button onClick={() => eel.say_hello_py(input)((response: string) => setResponse(response))}>Send to Python</button>

      <div>
        <h1>Response</h1>
        <p>{response}</p>
      </div>
    </div>
  )
}

export default App
