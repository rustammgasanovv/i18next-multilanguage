import React from 'react'
import { useTranslation } from 'react-i18next'
import LanguageSelector from './languageSelector'

const App = () => {
  const {t} = useTranslation()
  return (
    <div>
      <LanguageSelector/>
      <p>{t("our_graduates")}</p>
    </div>
  )
}

export default App