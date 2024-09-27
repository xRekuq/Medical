import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Activity from './components/Activity';
import LeadingMedicine from './components/LeadingMedicine';
import Doctors from './components/Doctors';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <Activity />
            <LeadingMedicine />
            <Doctors />
            <Pricing />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
