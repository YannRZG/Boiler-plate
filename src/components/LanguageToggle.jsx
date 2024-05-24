import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FormCheck } from 'react-bootstrap';
import { faFlag } from '@fortawesome/free-solid-svg-icons';
import { faFlagUsa } from '@fortawesome/free-solid-svg-icons';
import { useLanguage } from '../function/LanguageContext';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <FormCheck 
            type="switch"
            id="language-switch"
            label={
                <>
                    {language === 'fr' ? (
                        <FontAwesomeIcon icon={faFlag} /> // Icône française
                    ) : (
                        <FontAwesomeIcon icon={faFlagUsa} /> // Icône anglaise
                    )}
                </>
            }
            checked={language === 'en'} // Mettez 'en' ici car le switch est activé pour l'anglais
            onChange={toggleLanguage}
        />
    );
}

export default LanguageToggle;
