import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(false);

  function createPassword() {
    let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (includeNumbers) {
      charSet += "0123456789";
    }
    if (includeSpecialChars) {
      charSet += "!@#$%^&*~";
    }

    let generatedPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      generatedPassword +=
        charSet[Math.floor(Math.random() * charSet.length)];
    }

    setPassword(generatedPassword);
  }

  useEffect(() => {
    createPassword();
  }, [passwordLength, includeNumbers, includeSpecialChars]);

  return (
    <>
      <h1>{password}</h1>
      <div className="controls">
        <input
          type="range"
          min={5}
          max={50}
          value={passwordLength}
          onChange={(e) => setPasswordLength(e.target.value)}
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
