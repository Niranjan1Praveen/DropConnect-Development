import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const Integrationcolumn = (props) => {
  const { integrations, className } = props;
  return (
    <div className={twMerge("flex flex-col gap-4 pb-6", className)}>
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6 shadow-inner"
        >
          <div className="flex justify-center">
            <Image src={integration.icon} alt={`${integration.name} icon`} className="size-24" />
          </div>
          <h3 className="text-2xl text-center mt-6">{integration.name}</h3>
          <p className="text-center text-white/50 mt-2">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Integrationcolumn;
