import React from 'react';

const slides = [
    "/pubg.png",
    "/valorant.png",
    "/minecraft.png"
]

const Banner = () => {
    return (
        <div className='relative overflow-hidden h-64 md:h-96 flex items-center justify-center gap-7'>
            {
                slides.map((img,index) => (
                    <img key={index} src={img} alt="" className="max-w-md rounded-lg shadow-2xl" />
                ))
            }
            
        </div>
    );
};

export default Banner;