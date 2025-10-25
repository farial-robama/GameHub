import React from "react";
import { useLoaderData, useParams } from "react-router";

const GameDetails = () => {
  const games = useLoaderData();
  const { id } = useParams();

  const game = games.find((g) => g.id.toString() === id);

  if (!game) {
    return (
      <p className="text-center text-xl text-gray-500 mt-10">Game Not Found.</p>
    );
  }
  return (
    <div className="hero bg-[#F7F7F7] min-h-screen rounded-2xl px-6">
      <div className="hero-content flex-col lg: text-center w-full md:w-2xl">
        <img className="h-72" src={game.coverPhoto} />
        <div>
          <h1 className=" text-center text-2xl font-bold">{game.title}</h1>
          <p className="text-gray-500 py-6">{game.description}</p>
          <div className="flex md:flex-row flex-col items-center justify-center gap-15 mb-5">
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-2xl font-semibold">Ratings</h3>
              <p className="flex items-center gap-2">
                <img
                  className="w-7"
                  src="https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000"
                  alt=""
                />
                <span>{game.ratings}</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-2xl font-semibold">Category</h3>
              <p className="flex items-center gap-2">
                <img
                  className="w-7"
                  src="https://img.icons8.com/?size=100&id=DSWMfvLschFy&format=png&color=000000"
                  alt=""
                />
                <span>{game.category}</span>
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h3 className="text-2xl font-semibold">Developed By</h3>
              <p className="flex items-center gap-2">
                <img
                  className="w-7"
                  src="https://img.icons8.com/?size=100&id=13662&format=png&color=000000"
                  alt=""
                />
                <span>{game.developer}</span>
              </p>
            </div>
          </div>
          <a
            href={game.downloadLink}
            className="btn bg-[#7eb0b5] text-white mb-4"
          >
            Download Game
          </a>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
