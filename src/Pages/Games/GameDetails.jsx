import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const GameDetails = () => {
    const games = useLoaderData();
    const { id } = useParams();

    const game = games.find(g => g.id === id);

    if (!game) {
        return <p className='text-center text-gray-300 mt-10'>Game Not Found</p>
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={game.coverphoto}
    />
    <div>
      <h1 className="text-5xl font-bold">{game.title}</h1>
      <p className="py-6">
        {game.description}
      </p>
      <button className="btn btn-primary">Download</button>
    </div>
  </div>
</div>
    );
};

export default GameDetails;