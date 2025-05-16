"use client";
import signUpOptionsData from "../assets/data/signUpOptionsData";
import DropCard from "@/components/ui/dropCard";
import Tags from "@/components/ui/tags";
import React, { useState } from "react";




const SignUpOptions = () => {
  return (
    <section className="py-24 px-4 flex items-center justify-center" id="signUpOptions">
      <div className="container">
        <div className="flex justify-center">
          <Tags title={"Sign Up Options"} />
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          {signUpOptionsData.map((item) => (
            <DropCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignUpOptions;
