import React, { useState, useEffect } from 'react';
import { FormCheck } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import daySound from '../components/Audio/jour.wav';
import nightSound from '../components/Audio/nuit.wav';

const lightTheme = 'light-theme';
const darkTheme = 'dark-theme';

const Dark = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [dayAudio] = useState(new Audio(daySound));
    const [nightAudio] = useState(new Audio(nightSound));

    useEffect(() => {
        
        document.body.classList.toggle(lightTheme, !isDarkMode);
        document.body.classList.toggle(darkTheme, isDarkMode);

        
    }, [isDarkMode]);
    
    useEffect(() => {
        
        const savedDarkMode = JSON.parse(localStorage.getItem('isDarkMode'));
        if (savedDarkMode !== null) {
            setIsDarkMode(savedDarkMode);
        }
    }, []);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('isDarkMode', !isDarkMode);
        if (isDarkMode) {
            dayAudio.play();
        } else {
            nightAudio.play();
        }
    };
    
    return (
        <div className="App">
            <FormCheck 
                type="switch"
                id="custom-switch"
                label={
                    <>
                        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="mr-2" />
                    </>
                }
                checked={isDarkMode}
                onChange={toggleDarkMode}
            />
        </div>
    );
};

export default Dark;
