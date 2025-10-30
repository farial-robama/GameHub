import React from "react";
import useTitle from "../../Hooks/useTitle";

const About = () => {
  useTitle("About");
  
  return (
    <div className="bg-linear-to-br from-[#82cab7] to-[#E7F2EF] flex flex-col-reverse md:flex-row items-center gap-3.5 justify-between rounded-4xl p-10">
      <div className="">
        <h1 className="text-5xl mb-5 font-bold">About Us</h1>
        <p>
          Lotus Gamehub is your go-to platform for discovering, reviewing and
          supporting indie games. browse our curated collection, learn about
          developers and join a community of gamers. <br />
          Our mission is to connect passionate gamers with talented creators. We
          believe every game deserve to be seen and every developer deserves a
          stage. That's why we build Lotus GameHub - a space where discovery
          meets creativity.
        </p>
      </div>
      <div>
        <img className="p-3" src="/Fortnite.png" alt="" />
      </div>
    </div>
  );
};

export default About;
