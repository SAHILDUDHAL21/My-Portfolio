import MatrixRain from './MatrixRain';
import Console from 'react-console-emulator';
import React, { useState, useEffect, useRef} from 'react';
import Styles from './styles.css';

const Layout = ({ commands, children, welcomeMessage }) => {
    const [dynamicWelcome, setDynamicWelcome] = useState('');
    const [isInputAllowed, setInputAllowed] = useState(false);
    const welcomeText = welcomeMessage.split('');
    const consoleRef = useRef(null);

    useEffect(() => {
        let messageIndex = 0;
        const welcomeMessageInterval = setInterval(() => {
            if (messageIndex < welcomeText.length) {
                setDynamicWelcome((prev) => prev + welcomeText[messageIndex]);
                messageIndex++;
            } else {
                setInputAllowed(true);
                clearInterval(welcomeMessageInterval);

                setTimeout(() => {
                    const inputElement = document.querySelector('input[name="react-console-emulator__input"]');
                    if (inputElement) {
                        inputElement.focus();
                    } else {
                        console.log("Input element not found!");
                    }
                }, 1000);
            }
        }, 45);

        return () => clearInterval(welcomeMessageInterval);
    }, [welcomeMessage]);

    const terminalStyle = {
        backgroundColor: '#000000a1',
        minHeight: '310px',
        minWidth: '510px',
        maxWidth: '500%',
        maxHeight: '100%',
        borderRadius: '5px',
        margin: 0,
        padding: 0,
    };

    const terminalinput = {
        color: '#00FF00',
        fontSize: '15px',
        fontFamily: 'monospace',
    };

    const terminalinputStyle = {
        display: 'inline-flex',
        width: '100%',
    };

    const terminaltext = {
        paddingTop: '-100px',
        color: '#00FF00',
    };

    const inputstyle = {
        fontSize: '15px',
        color: '#00FF00',
        fontFamily: 'monospace',
    };

    const terminalContainerStyle = {
        position: 'absolute',
        border: '5px solid #007500',
        top: '50%',
        left: '50%',
        background: '#000000',
        opacity: '0.86',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
        margin: 0,
        padding: 0,
    };

    return (
        <div style={{ position: 'relative' }}>
            <MatrixRain style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }} />
            <div className="terminal-container" style={terminalContainerStyle}>
                <p style={{ color: '#00FF00', fontFamily: 'monospace', fontSize: '15px' }}>
                    {dynamicWelcome.replace('undefined', '')}
                </p>
                <div className={isInputAllowed ? "fadingIn" : ""}>
                    <Console
                        id="myConsole"
                        ref={consoleRef}
                        commands={commands}
                        autoFocus={true}
                        readOnly={!isInputAllowed}
                        style={terminalStyle}
                        contentStyle={terminalinput}
                        inputAreaStyle={terminalinputStyle}
                        promptLabelStyle={terminaltext}
                        inputTextStyle={inputstyle}
                        promptLabel={'Sahil@Matrix:~$'}
                    />
                </div>
            </div>
            {children}
        </div>
    );
};

export default Layout;
