"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "./button";

import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";


const generateRandomBorderRadius = () => {
  const topLeft = `${Math.floor(Math.random() * 50) + 30}%`;
  const topRight = `${Math.floor(Math.random() * 50) + 30}%`;
  const bottomLeft = `${Math.floor(Math.random() * 50) + 30}%`;
  const bottomRight = `${Math.floor(Math.random() * 50) + 30}%`;
  return `${topLeft} ${topRight} ${bottomLeft} ${bottomRight} / ${topLeft} ${topRight} ${bottomLeft} ${bottomRight}`;
};

const DropCard = ({ item }) => {
  const controls = useAnimation();

  // useEffect(() => {
  //   controls.start({
  //     borderRadius: [
  //       generateRandomBorderRadius(),
  //       generateRandomBorderRadius(),
  //       generateRandomBorderRadius(),
  //       generateRandomBorderRadius(),
  //       generateRandomBorderRadius(),
  //       generateRandomBorderRadius(),
  //     ],
  //     transition: {
  //       duration: 0.3,
  //       repeat: Infinity,
  //       repeatType: "reverse",
  //       ease: "linear",
  //     },
  //   });
  // }, [controls]);

  return (
    <motion.div
      // animate={controls}
      className={twMerge(
        `
          relative p-10 md:p-6 bg-white/10 backdrop-blur-2xl min-h-[350px]
          shadow-[inset_10px_10px_15px_rgba(255,255,255,0.05),_10px_10px_20px_rgba(0,0,0,0.4)]
          border border-white/10
          transition-all duration-500 ease-in-out overflow-hidden rounded-xl
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
        <h2 className="text-lime-400 text-3xl font-bold">{item.cta}</h2>
        <p className="font-medium text-xl px-2 leading-normal">
          {item.description}
        </p>
        <ul className="text-md text-white/80 mt-4 space-y-2">
          {item.features?.map((point, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-lime-400">✓</span> {point}
            </li>
          ))}
        </ul>

          <RegisterLink>
            <Button className={"cursor-pointer"}>Register Now</Button>
          </RegisterLink>
      </div>
    </motion.div>
  );
};

export default DropCard;
