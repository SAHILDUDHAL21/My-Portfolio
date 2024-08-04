import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Page Layout/Layout';

const Projects = () => {
    const navigate = useNavigate();
    const [isAnimatingClose, setIsAnimatingClose] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    

    const closeModal = (modalType) => {
        if (isClosing) return;

        setIsClosing(true);
        setTimeout(() => {
            switch(modalType) {
                               
            }
            setIsClosing(false);
        }, 1500);
    };

    const commands = {
        ls: {
            description: 'List all projects on the page',
            fn: function () {
                return 'Here are the project names. Enter a name to learn more:\nTrisha_Bakers\nCalculator\nThe_Famous_Biryani_Bro';
            }
        },

        about: {
            description: 'Go to About page',
            fn: function () {
                navigate('/about');
                return 'Redirecting to About page...';
            }
        },

        cd: {
            description: 'Go to Main page',
            fn: function () {
                setTimeout(function () {
                    navigate('/');
                }, 1200);
                return 'Redirecting to Main page...';
            }
        },

        Trisha_Bakers: {
                description: 'Go to Trisha_Bakers webstie',
                fn: function () {
                    setTimeout(function () {
                        window.open('https://sahildprojects.github.io/Trisha_Bakers/', '_blank');
                    }, 1200);
                    return 'Redirecting to the Trisha Bakers Project site...';
                }
        },

        Calculator: {
                description: 'Go to Calculator ',
                fn: function () {
                    setTimeout(function () {
                        window.open('https://sahildprojects.github.io/Calculator/', '_blank');
                    }, 1200);
                    return 'Redirecting to the Calculator Projects...';
                }
        },

        The_Famous_Biryani_Bro: {
                description: 'Go to Github profile',
                fn: function () {
                    setTimeout(function () {
                        window.open('https://sahildprojects.github.io/The-Famous-Briyani-Bro-s/', '_blank');
                    }, 1200);
                    return 'Redirecting to the The Famous Biryani bro Project site...';
                }
        },
       

        
    };

    return (
        <Layout commands={commands} welcomeMessage="Enter command 'ls' to see some cool stuff I built. Use 'cd' to go back to the main page." >
    
           
        </Layout>
    );
};

export default Projects;
