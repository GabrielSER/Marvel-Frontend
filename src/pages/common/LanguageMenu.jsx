const LanguageMenu = () => {
  let storedLanguage = localStorage.getItem('language')

  if (!storedLanguage) {
    localStorage.setItem('language', navigator.language)
    storedLanguage = navigator.language
  }

  /*const [languageSettings, setLanguageSettings] = useState({
    messages: storedLanguage.startsWith('es') ? es : en,
    locale: storedLanguage
  })

  
  const setLang = (lang) => {
    const updatedLang = { messages: undefined, locale: lang }
    if (lang.startsWith(navigator.language.slice(0, 2))) {
      updatedLang.locale = navigator.language
    }
    updatedLang.messages = updatedLang.locale.startsWith('es') ? es : en
    localStorage.setItem('language', updatedLang.locale)
    setLanguageSettings(updatedLang)
  }*/

  return <div>LanguageMenu</div>
}

export default LanguageMenu
