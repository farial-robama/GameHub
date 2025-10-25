import React, { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const slides = [
  {
    img: "/Fortnite.png",
    title: "Sign Up & Select a Game",
    desc: "Join Lotus Gamehub to explore an ever-growing library of games. Choose your favourite and start your advanture now!",
  },
  {
    img: "/pubg.png",
    title: "Challenge Others",
    desc: "Take your skills to the next level by challenging your friends and players around the globe.",
  },
  {
    img: "/Clash-of-Clans.png",
    title: "Win & Earn",
    desc: "Play, wind and earn achievements as you rise to the top of the leaderboard!.",
  },
];

const Banner = () => {
  const [loaded,setLoaded] = useState(false)

  useEffect(() => {
    let loadedCount = 0
    slides.forEach(slide => {
    const img = new Image ();
    img.src = slide.img;
    img.onload =() => {
      loadedCount++;
      if (loadedCount === slides.length) {
        setLoaded(true)
      }
    }
  })
  },[])
   if (!loaded) {
    return <LoadingSpinner></LoadingSpinner>
   }

   
  return (
    <div>
      <div className="carousel w-full h-110 rounded-3xl">
        {slides.map((slides, i) => (
          <div
            key={i}
            id={`item${i + 1}`}
            className="carousel-item relative w-full h-full"
          >
            <img
              src={slides.img}
              className="w-full h-full object-center"
              alt=""
            />
            <div className="absolute inset-0 bg-[#708993]/60 flex items-center justify-center text-center">
              <div className="text-white max-w-md brightness-200">
                <h1 className="mb-5 text-2xl md:text-4xl font-bold">
                  {slides.title}
                </h1>
                <p className="mb-5">{slides.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex w-full justify-center gap-2 py-2">
        {slides.map((_, i) => (
          <a key={i} href={`#item${i + 1}`} className="btn btn-xs">
            {i + 1}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Banner;
