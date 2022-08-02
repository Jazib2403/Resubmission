import React from 'react';
import HomeSection from '../../HeroSection';
import { homeObjTwo, homeObjThree, homeObjFour } from './Data'

function About() {
    return (
        <>

            <HomeSection{...homeObjTwo} />
            <HomeSection{...homeObjThree} />
            <HomeSection{...homeObjFour} />



        </>
    )
}

export default About;