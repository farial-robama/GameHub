import React, { useState } from "react";
import { useEffect } from "react";
import GameCard from "./GameCard";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const PopularGames = () => {
  const [games, setGames] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => setGames(data));
  }, []);

  const popularGames = [...games]
    .sort((a, b) => b.ratings - a.ratings)
    .slice(0, 6);

  return (
    <div className="text-center py-10 px-6">
      <h1 className="font-bold text-2xl">Popular Games</h1>
      <p className="text-sm text-[#627382] mt-2 mb-6">
        Explore all popular games on market developed by us.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {popularGames.map((game, i) => (
          <motion.div
            key={game.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.06 }}
          >
            <GameCard game={game}></GameCard>
          </motion.div>
        ))}
      </div>

      <button
        onClick={() => navigate("/games")}
        className="btn btn-active bg-linear-to-br from-[#7A85C1] to-[#9F62F2] text-white mt-7 px-5"
      >
        See All Games
      </button>
    </div>
  );
};

export default PopularGames;
