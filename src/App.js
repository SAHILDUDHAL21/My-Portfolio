import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Projects from './pages/Projects';
import MainPage from './pages/MainPage';

const App = () => (
    <Router>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<MainPage />} />
        </Routes>
    </Router>
);

export default App;
