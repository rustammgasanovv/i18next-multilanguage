import i18n from "i18next"
import LangauageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next"
import Backend from 'i18next-http-backend'

i18n.use(LangauageDetector).use(initReactI18next).use(Backend).init({
    debug: true,
    lng: "az",

})