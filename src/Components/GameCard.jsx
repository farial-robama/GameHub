import React from 'react';
import { Link } from 'react-router';

const GameCard = ({game}) => {
    return (
        <Link to={`/game-details/${game.id}`}>
        <div className="card bg-[#F7F7F7] w-full shadow-sm">
  <figure className='h-50 m-4 rounded-md'>
    <img
      src={game.coverPhoto}/>
  </figure>
  <div className="card-body flex flex-col">
    <h2 className="card-title flex items-start">
      {game.title}
    </h2>
    <p className='flex items-start text-gray-500'>Developed by: {game.developer}</p>
    <div className="card-actions flex gap-10 justify-between mt-1">
      <p className='flex items-center gap-2'><img className='w-7' src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000" alt="" /><span>{game.ratings}</span></p>
      <p className='flex items-center gap-2'><img className='w-7' src="https://img.icons8.com/?size=100&id=DSWMfvLschFy&format=png&color=000000" alt="" /><span>{game.category}</span></p>
    </div>
  </div>
</div>
        </Link>
    );
};

export default GameCard;