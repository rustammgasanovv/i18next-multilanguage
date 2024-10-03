import { changeLanguage } from 'i18next'; // Use the imported changeLanguage function
import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
    {code: 'en', lang: 'English'},
    {code: 'ru', lang: 'Russian'},
    {code: 'az', lang: 'Azerbaijan'}
];

const languageSelector = () => {

  return (
    <div className='btn-container'>
        {
            languages.map((lng) => {
                return (
                    <button key={lng.code} onClick={() => changeLanguage(lng.code)}>
                        {lng.lang}
                    </button>
                );
            })
        }
    </div>
  );
}

export default languageSelector;
