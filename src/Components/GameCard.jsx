import React from "react";
import { Link } from "react-router";

const GameCard = ({ game }) => {
  return (
    <Link to={`/game-details/${game.id}`}>
      <div className="card bg-[#F7F7F7] w-full h-96 shadow-sm">
        <figure className="h-50 m-4 rounded-md">
          <img src={game.coverPhoto} />
        </figure>
        <div className="card-body flex flex-col">
          <h2 className="card-title flex items-start">{game.title}</h2>
          <p className="flex items-start text-gray-500">
            Developed by: {game.developer}
          </p>
        </div>
        <div className="card-actions flex flex-row justify-between mx-6 mt-2 mb-4">
          <p className="flex items-center gap-2">
            <img
              className="w-5"
              src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000"
              alt=""
            />
            <span className="text-xs">{game.ratings}</span>
          </p>
          <p className="flex items-center gap-2">
            <img
              className="w-5"
              src="https://img.icons8.com/?size=100&id=DSWMfvLschFy&format=png&color=000000"
              alt=""
            />
            <span className="text-xs">{game.category}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
