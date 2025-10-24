import React from 'react';

const slides = [
    
    {
        img: "/Fortnite.png",
        title: "Sign Up & Select a Game",
        desc: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
    },
    {
        img: "/pubg.png",
        title: "Challenge Others",
        desc: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
    },
    {
        img: "/Clash-of-Clans.png",
        title: "Win & Earn",
        desc: "Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."
    }
    
]

const Banner = () => {
    return (
        <div>
            <div className='carousel w-full h-96'>
                {
                    slides.map((slides,i) => (
                        <div key={i} id={`item${i+1}`} className='carousel-item relative w-full h-full'>
                            <img src={slides.img} className='w-full h-full object-center' alt="" />
                            <div className='absolute inset-0 bg-[#708993]/70 flex items-center justify-center text-center'>
                                <div className='text-white max-w-md'>
                                    <h1 className='mb-5 text-2xl md:text-4xl font-semibold'>{slides.title}</h1>
                                    <p className='mb-5'>{slides.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
          {
            slides.map((_,i) => (
                <a key={i} href={`#item${i+1}`} className='btn btn-xs'>
                    {i+1}
                </a>
            ))
          }
</div>
        </div>

    );
};

export default Banner;