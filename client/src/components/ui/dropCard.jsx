"use client";
import React, { useState } from "react";

const dropletData = [
  { id: "01", color: "pink", radius: "57% 43% 43% 57% / 43% 43% 57% 57%" },
  { id: "02", color: "purple", radius: "73% 27% 59% 41% / 57% 59% 41% 43%" },
  { id: "03", color: "blue", radius: "49% 51% 70% 30% / 51% 58% 42% 49%" },
];

const WaterDropletCards = () => {
  return (
    <div className="w-full px-50 py-12">
      <div className="flex gap-30 flex-nowrap w-max">
        {dropletData.map((item) => (
          <DropletCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const DropletCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
  
    return (
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          borderRadius: isHovered ? "50%" : item.radius,
          transition: "border-radius 0.5s ease-in-out",
        }}
        className={`
          relative w-[300px] h-[300px] p-6 
          bg-white/10 backdrop-blur-2xl
          shadow-[inset_10px_10px_15px_rgba(255,255,255,0.05),_10px_10px_20px_rgba(0,0,0,0.4)]
          border border-white/10
          transition-all duration-500 ease-in-out
        `}
      >
        {/* Reflective Droplets */}
        <div className="absolute top-6 left-6 w-8 h-8 bg-white/70 rounded-full blur-[3px] shadow-inner" />
        <div className="absolute top-4 right-6 w-4 h-4 bg-white/60 rounded-full blur-[2px] shadow-inner" />
  
        {/* Content */}
        <div className="flex flex-col items-center justify-center h-full text-center space-y-4 text-white">
          <div
            className={`text-3xl font-bold w-14 h-14 flex items-center justify-center rounded-full bg-${item.color}-500 shadow-lg`}
          >
            {item.id}
          </div>
          <p className="text-gray-300 font-medium text-sm px-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            commodi.
          </p>
          <button
            className={`mt-2 px-5 py-2 rounded-full bg-${item.color}-500 text-white font-semibold hover:opacity-90 transition`}
          >
            Signup
          </button>
        </div>
      </div>
    );
  };
  

export default WaterDropletCards;
