import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  
  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };
  
  return (
    <button onClick={toggleLanguage} className="language-switcher">
      {i18n.language === 'es' ? '🇬🇧 EN' : '🇪🇸 ES'}
    </button>
  );
}

export default LanguageSwitcher;