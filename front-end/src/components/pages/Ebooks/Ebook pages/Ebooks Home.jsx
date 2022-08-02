import React from 'react';
import Explore from '../Explore';
import Featured from '../Featured';
import Highlights from '../Highlights';
import Landing from '../Landing';

const EbooksHome = () => {
    return (
        <>
            <Landing />
            <Highlights />
            <Featured />
            <Explore />
        </>
    );
}

export default EbooksHome;
