import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [password, setPassword] = useState()
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordRef = useRef(null)

  const generatePassword = useCallback(()=>{
    let pass =''
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*()_+[]{}<>?,./"

    for (let i = 1; i < length; i++) {
      const char = Math.floor(Math.random() * str.length +1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },[length, numberAllowed, charAllowed])

  const copyPasswordToClipboard= ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }

  useEffect(() => {
    generatePassword()
  }, [length, numberAllowed, charAllowed])
  

return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          🔐 Password Generator
        </h1>

        {/* Password Display */}
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            readOnly
            value={password}
            ref={passwordRef}
            className="w-full px-4 py-2 text-lg border rounded-md bg-gray-100 focus:outline-none"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-500 text-white px-3 py-2 rounded-md hover:bg-blue-600"
          >
            📋
          </button>
        </div>

        {/* Length Slider */}
        <div className="mb-4">
          <label className="block font-medium text-gray-700 mb-1">
            Password Length: <span className="font-bold">{length}</span>
          </label>
          <input
            type="range"
            min="6"
            max="50"
            value={length}
            onChange={(e) => setLength((e.target.value))}
            className="w-full accent-blue-500"
          />
        </div>
        <div className='flex justify-center items-center gap-3'>
          <div className="mb-4">
          <label className=" font-medium text-gray-700 mb-1">
            Numbers:{" "}
          </label>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((numberAllowed)=> !numberAllowed)}
          />
        </div>
        <div className="mb-4">
          <label className=" font-medium text-gray-700 mb-1">
            Charactors:{" "}
          </label>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((charAllowed)=> !charAllowed)}
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App
