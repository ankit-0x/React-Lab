import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  const createPassword = useCallback(() => {
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) {
      charSet += "0123456789";
    }
    if (includeSpecialChars) {
      charSet += "!@#$%^&*~";
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword += charSet[Math.floor(Math.random() * charSet.length)];
    }

    setPassword(generatedPassword);
  }, [passwordLength, includeNumbers, includeSpecialChars]);

  useEffect(() => {
    createPassword();
  }, [createPassword]);

  return (
    <>
      <h1>{password}</h1>
      <button onClick={createPassword}>Change</button>
      <div className="controls">
        <input
          type="range"
          min={5}
          max={50}
          value={passwordLength}
          onChange={(e) => setPasswordLength(Number(e.target.value))}
        />
        <label>Length ({passwordLength})</label>

        <label>
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
          Numbers
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeSpecialChars}
            onChange={() => setIncludeSpecialChars(!includeSpecialChars)}
          />
          Special Characters
        </label>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <PasswordGenerator />
);
