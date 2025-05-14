"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";
import Link from "next/link";

const generateRandomBorderRadius = () => {
  const topLeft = `${Math.floor(Math.random() * 50) + 30}%`;
  const topRight = `${Math.floor(Math.random() * 50) + 30}%`;
  const bottomLeft = `${Math.floor(Math.random() * 50) + 30}%`;
  const bottomRight = `${Math.floor(Math.random() * 50) + 30}%`;
  return `${topLeft} ${topRight} ${bottomLeft} ${bottomRight} / ${topLeft} ${topRight} ${bottomLeft} ${bottomRight}`;
};

const DropCard = ({ item }) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      borderRadius: [
        generateRandomBorderRadius(),
        generateRandomBorderRadius(),
        generateRandomBorderRadius(),
        generateRandomBorderRadius(),
        generateRandomBorderRadius(),
        generateRandomBorderRadius(),
      ],
      transition: {
        duration: 0.3, // Fast animation
        repeat: Infinity, // Repeat the animation
        repeatType: "reverse", // Makes it go back to previous state
        ease: "linear", // Constant rate for erratic motion
      },
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className={twMerge(
        `
          relative p-6 bg-white/10 backdrop-blur-2xl min-h-[350px]
          shadow-[inset_10px_10px_15px_rgba(255,255,255,0.05),_10px_10px_20px_rgba(0,0,0,0.4)]
          border border-white/10
          transition-all duration-500 ease-in-out
        `,
        item.className
      )}
    >
      <div className="flex flex-col items-center justify-center h-full text-center space-y-4 text-white">
        <div
          className={`text-3xl flex items-center justify-center rounded-full bg-${item.color}-500 shadow-lg w-12 h-12`}
        >
          {item.id}
        </div>
        <h2 className="text-lime-400 text-3xl font-bold">{item.title}</h2>
        <p className="font-medium text-xl px-2">{item.description}</p>
        <Button className={"cursor-pointer"}><Link href={item.to}>Register Now</Link></Button>
      </div>
    </motion.div>
  );
};

export default DropCard;
