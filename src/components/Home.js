import React from 'react';
import { useTranslation } from 'react-i18next';
import "../styles/Home.css";

function Home() {
  const { t } = useTranslation();

  return (
    <div className="Home">
      <h1>{t('home.title')}</h1>
      <p>{t('home.welcome')}</p>
    </div>
  );
}

export default Home;

