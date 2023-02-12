import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/AboutUs/AboutUs";
import AppContext from "./AppContext";
import { IntlProvider } from "react-intl";
import en from "./Dictionaries/en.json";
import es from "./Dictionaries/es.json";
import SignUp from "./Pages/SignUp/SignUp";
import { useAlert } from "react-alert";
import CombatMain from "./Pages/CombatMain/CombatMain";




const nthElement = (arr, n = 0) => (n > 0 ? arr.slice(n, n + 1) : arr.slice(n))[0];
function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function App() {
  const alert = useAlert()

  // stablish default language at navigator's storage (if not previously existent)
  let storedLanguage = localStorage.getItem('language');
  if (!storedLanguage) {
    localStorage.setItem('language', navigator.language);
    storedLanguage = navigator.language;
  }

  const [languageSettings, setLanguageSettings] = useState({ messages: storedLanguage.startsWith("es") ? es : en, locale: storedLanguage });

  function setLang(lang) {
    const updatedLang = { messages: undefined, locale: lang };
    if (lang.startsWith(navigator.language.slice(0, 2))) {
      updatedLang.locale = navigator.language;
    }
    updatedLang.messages = updatedLang.locale.startsWith("es") ? es : en;
    localStorage.setItem("language", updatedLang.locale);
    setLanguageSettings(updatedLang);
  }
 

  return (
    <div className="App">
      <AppContext.Provider
        value={{ 
                languageSettings, setLang
              }}
      >
        <IntlProvider
          locale={languageSettings.locale}
          messages={languageSettings.messages}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/services" exact element={<Services />} />
              <Route path="/combat" exact element={<CombatMain/>} />
              <Route path="/roleplay" exact element={<AboutUs />} />
              <Route path="/signup" exact element={<SignUp />} />
              
            </Routes>
          </BrowserRouter>
        </IntlProvider>
      </AppContext.Provider>
    </div>
  );
}

export default App;
