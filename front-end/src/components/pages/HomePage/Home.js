import React from 'react';
import HomeSection from '../../HeroSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data'

function Home() {
    return (
        <>
            <HomeSection{...homeObjOne} />
            <HomeSection{...homeObjThree} />
            <HomeSection{...homeObjTwo} />
            <HomeSection{...homeObjFour} />


        </>
    )
}

export default Home;
