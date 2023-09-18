import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Contact.css';

function Contact() {
  const { t } = useTranslation();

  return (
    <div className="Contact"> 
      <h1>{t('contact.title')}</h1>
      <p>{t('contact.message')}</p>
    </div>
  );
}

export default Contact;

