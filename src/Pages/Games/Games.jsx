import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import GameCard from "../../Components/GameCard";

const Games = () => {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
      setLoading(false)
  }, []);

  const filteredGames = games.filter((game) =>
    game.title.toLowerCase().includes(search.toLowerCase())
  );

  const sortedGames = [...filteredGames].sort((a, b) => {
    if (sort === "high") {
      return b.ratings - a.ratings;
    }
    if (sort === "low") {
      return a.ratings - b.ratings;
    }
  });

  const noGames = !loading && sortedGames.length === 0;

  return (
    <div className="text-center py-10 px-6">
      <h1 className="font-bold text-2xl">All Games</h1>
      <p className="text-sm text-[#627382] mt-2 mb-10">
        Explore all games on market developed by us.
      </p>

      {/* search+sort */}
      {!loading && !noGames &&(
        <div className="mb-5 flex justify-between items-center">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            type="search"
            required
            placeholder="Search"
          />
        </label>

        <div
          onChange={(e) => setSort(e.target.value)}
          value={sort}
          className="dropdown dropdown-start"
        >
          <div tabIndex={0} role="button" className="btn m-1">
            Sort by ⬇️
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-1 shadow-sm"
          >
            <li>
              <button onClick={() => setSort("high")}>High-Low</button>
            </li>
            <li>
              <button onClick={() => setSort("low")}>Low-High</button>
            </li>
          </ul>
        </div>
      </div>
      )}
      

      {/* gamecards */}

      <div className="grid grid-cols-3 gap-4">
        {sortedGames.length > 0 ? (
          sortedGames.map((game, i) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.06 }}
            >
              <GameCard game={game}></GameCard>
            </motion.div>
          ))
        ) : (
          <p className="text-xm text-center mt-7 text-gray-500">
            No games found
          </p>
        )}
      </div>
    </div>
  );
};

export default Games;
