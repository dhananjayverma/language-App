import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/LanguageSelector.css";
function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="language-selector">
      <label htmlFor="language-select">Select Language:</label>
      <select
        id="language-select"
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">
          <span role="img" aria-label="English">
            🇺🇸
          </span>
          English
        </option>
        <option value="hi">
          <span role="img" aria-label="Hindi">
            🇮🇳
          </span>
          Hindi
        </option>
        <option value="fr">
          <span role="img" aria-label="French">
            🇫🇷
          </span>
          French
        </option>
      </select>
    </div>
  );
}

export default LanguageSelector;



