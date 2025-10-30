import React from 'react';
import Banner from '../../Components/Banner';
import PopularGames from '../../Components/PopularGames';
import Newsletter from '../../Components/Newsletter';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle("Home");

    return (
        <div>
            <Banner></Banner>
            <PopularGames></PopularGames>
            <Newsletter></Newsletter>
        </div>
    );
};


export default Home;