import React, { useState } from 'react';
import { useEffect } from 'react';
import GameCard from './GameCard';

const PopularGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch("/games.json")
        .then(res => res.json())
        .then(data => setGames(data))
    },[])

    const popularGames = [...games].sort((a,b) => b.ratings - a.ratings).slice(0,3)
    return (
        <div>
            <h1></h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    popularGames.map(game => <GameCard key={game.id} game={game}></GameCard>)
                }

            </div>
            
        </div>
    );
};

export default PopularGames;