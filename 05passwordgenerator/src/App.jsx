import { use, useEffect } from "react";
import { useCallback, useState ,useRef} from "react";

function App() {
  const [length, setLength] = useState(8); //default value 8
  const [numberAllowed, setNumberAllowed] = useState(false); //initially checkbox is false
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState(""); //optimisation memorisiation ke liye responsible hai
  // useRef hook for refrence purpose
  const passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); //optionally select ho raha hai
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]); //optimisation due to password dependence
  //password generator
  //useCallback is a hook that lets yoa a cache a function definition between re-renders
  //useCallback(function,[dependencies])
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) string += "0123456789";
    if (charAllowed) string += ",./;'[]<>?:{}";

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * string.length + 1); //why +1 ??
      pass += string.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]); //optimization

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, setPassword]); //kuch bhi chedh chadhh ho to change karo

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          ref={passwordRef}
        ></input>
        <button
          onClick={copyPasswordToClipboard}
          className=" className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          ></input>
          <label>Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          ></input>
          <labels htmlFor="numberInput"> Numbers</labels>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev); //learn from it
            }}
          ></input>
          <labels htmlFor="characterInput"> Character</labels>
        </div>
      </div>
    </div>
  );
}

export default App;
