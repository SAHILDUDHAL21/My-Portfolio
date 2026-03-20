import React, {useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../Components/Page Layout/Layout';

const Projects = () => {
    const navigate = useNavigate();
    const [isAnimatingClose, setIsAnimatingClose] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const pendingRedirect = useRef(null);
    

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
        y: {
            description: 'Confirm redirection',
            fn: function () {
                if (pendingRedirect.current) {
                    const url = pendingRedirect.current;
                    pendingRedirect.current = null;
                    setTimeout(function () {
                        window.open(url, '_blank');
                    }, 500);
                    return 'Directing you right now...';
                }
                return "Command 'y' not recognized! Enter 'ls' for available commands.";
            }
        },
        n: {
            description: 'Cancel redirection',
            fn: function () {
                if (pendingRedirect.current) {
                    pendingRedirect.current = null;
                    return 'Redirection cancelled. Enter a new command to continue.';
                }
                return "Command 'n' not recognized! Enter 'ls' for available commands.";
            }
        },
        ls: {
            description: 'List all projects on the page',
            fn: function () {
                // return 'Here are the project names. Enter a name to learn more:\nTrisha_Bakers\nCalculator\nThe_Famous_Biryani_Bro\nLeetCode_Unofficial_Mobile_App\nLibre_PaperWall\nThreat_Analyzer';
                return 'Here are the project names. Enter a name to learn more:\nLeetCode_Unofficial_Mobile_App\nLibre_PaperWall\nThreat_Analyzer';
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

/*
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
*/

        LeetCode_Unofficial_Mobile_App: {
                description: 'Go to LeetCode Unofficial Mobile App Project',
                fn: function () {
                    pendingRedirect.current = 'https://github.com/SAHILDUDHAL21/LeetCode-Unofficial-Mobile-App';
                    return `This is a mobile application developed in Flutter that integrates seamlessly with LeetCode. \nIt allows you to view profiles, solve data structure problems, and check out statistics.\n \nDo you want to redirect to the project repo? (y/n)`;
                }
        },

        Libre_PaperWall: {
                description: 'Go to Libre PaperWall',
                fn: function () {
                    pendingRedirect.current = 'https://sahildudhal21.github.io/Libre-PaperWall-Web/';
                    return `Libre PaperWall is an open-source stunning wallpaper sharing and viewing portal. \nIt features dynamic aesthetic scaling, categorization, and a beautiful UI.\n \nDo you want to redirect to the high-quality live site? (y/n)`;
                }
        },

        Threat_Analyzer: {
                description: 'Go to Threat Analyzer',
                fn: function () {
                    pendingRedirect.current = 'https://github.com/SAHILDUDHAL21/Threat-Analyzer';
                    return `A sophisticated cybersecurity tool designed to scan, analyze, and mitigate potential threats.\nIt integrates external APIs like VirusTotal to analyze APKs efficiently.\n \nDo you want to redirect to the project repo? (y/n)`;
                }
        },
       

        
    };

    return (
        <Layout commands={commands} welcomeMessage="Enter command 'ls' to see some cool stuff I built. Use 'cd' to go back to the main page." >
    
           
        </Layout>
    );
};

export default Projects;
