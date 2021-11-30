
import React from 'react';
import Contact from '../../Contact/Contact';
import Project from '../../Project/Project';
import Skills from '../../Skills/Skills';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Skills></Skills>
            <Project></Project>
            <Contact></Contact>
        </div>
    );
};

export default Home;