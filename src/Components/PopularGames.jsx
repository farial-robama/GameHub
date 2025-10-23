import React, { useState } from 'react';
import { useEffect } from 'react';
import GameCard from './GameCard';
import { useNavigate } from 'react-router';

const PopularGames = () => {
    const [games, setGames] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch("/games.json")
        .then(res => res.json())
        .then(data => setGames(data))
    },[])

    const popularGames = [...games].sort((a,b) => b.ratings - a.ratings).slice(0,6)
    return (
        <div className='text-center py-10 px-6'>
            <h1 className='font-bold text-2xl mb-8'>Popular Games</h1>
            <div className='grid grid-cols-3 gap-4'>
                {
                    popularGames.map(game => <GameCard key={game.id} game={game}></GameCard>)
                }

            </div>
          <button onClick={() => navigate("/games")} className="btn btn-active bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white mt-7 px-5">See all</button>
            
        </div>
    );
};

export default PopularGames;