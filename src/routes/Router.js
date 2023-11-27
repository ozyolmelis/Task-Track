import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import MainContent from '../components/MainContent';


const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<MainContent />} />
                <Route path='/about' element={<AboutUs />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;