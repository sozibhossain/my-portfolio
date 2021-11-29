import React from 'react';
import Contact from '../../Contact/Contact';
import Footer from '../../Footer/Footer';
import Project from '../../Project/Project';
import Navigation from '../../Shared/Navigation/Navigation';
import Skills from '../../Skills/Skills';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;