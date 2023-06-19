import React from "react";
import DisplayLanguage from "./DisplayLanguage";
import {LanguageContext} from "./LanguageContext";

export default function App() {

  const [language, setLanguage] = React.useState("en");
  
   const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };
  
  return (
    <div>
      <LanguageContext.Provider value={language}>
        <DisplayLanguage />

        <select value={language} onChange={handleLanguageChange}>
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="de">Deutch</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
          <option value="tr">Türkçe</option>
        </select>
      </LanguageContext.Provider>
    </div>
  );
};
