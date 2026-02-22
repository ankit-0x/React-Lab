import { useState } from "react";
import LanguageItem from "./LanguageItem";

export default function LanguageVoting() {
  const [language, setLanguage] = useState(["Ts", "Js", "Java"]);

  function handleClick() {
    setLanguage(["C++", ...language]);
  }

  // Virtual Dom is lightweight copy of Real Dom
  const vDom = <h1>Hello Everyone</h1>;

  const rDom = document.createElement("h1");
  rDom.innerHTML = "Hello Everyone";

  console.log(vDom);
  console.dir(rDom);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {language.map((value, index) => (
          //   <LanguageItem key={index} value={value}></LanguageItem>
          <LanguageItem key={value} value={value}></LanguageItem>
        ))}
      </div>
      <br></br>
      <br></br>
      <br></br>
      <button onClick={handleClick}>Add Language at start</button>
    </>
  );
}
