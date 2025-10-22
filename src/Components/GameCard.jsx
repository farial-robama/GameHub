import React from 'react';

const GameCard = ({game}) => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={game.coverPhoto}/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {game.title}
    </h2>
    <p>{game.description}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{game.ratings}</div>
      <div className="badge badge-outline">{game.developer}</div>
    </div>
  </div>
</div>
    );
};

export default GameCard;