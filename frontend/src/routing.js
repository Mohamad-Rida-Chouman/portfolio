import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Routing = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/experience" element={<Experience />} />
            </Routes>
        </Router>
    );
}
 
export default Routing;