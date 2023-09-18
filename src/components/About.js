import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/About.css";

function About() {
  const { t } = useTranslation();

  return (
    <div className="About">
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
    </div>
  );
}

export default About;

