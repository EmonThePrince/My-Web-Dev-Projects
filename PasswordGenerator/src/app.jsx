import { useState, useCallback, useEffect, useRef } from 'preact/hooks'

export function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //UseRef hook
  const passwordRef = useRef(null);

  //Generating a random password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "!@#$%^&*(){}[]`~";
    }
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  //Copying the password available in the input section 
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //HTML and CSS
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 mt-8 pb-1 text-orange-500 bg-gray-700'>
        <h1 className='text-center pt-4 text-orange-500 text-xl py-1 my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full px-2 py-1 '
            placeholder='password'
            readOnly
            ref={passwordRef}
             />
          <button onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 hover:bg-blue-600 hover:text-gray-50 duration-100 text-white px-3 py-0.5 shrink-0'>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }} />
            <label htmlFor="numberInput"> Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="CharInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }} />
            <label htmlFor="charInput"> Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}
