import React from "react";
import Image from "next/image";
import integrations from "@/assets/data/integrations";

const Integrationcolumn = () => {
  return (
    <div className="flex flex-col gap-4 pb-6">
      {integrations.map((integration) => (
        <div
          key={integration.name}
          className="bg-neutral-900 border border-white/10 rounded-3xl p-6 shadow-inner"
        >
          <div className="flex justify-center">
            <Image src={integration.icon} alt={`${integration.name} icon`} className="size-20" />
          </div>
          <h3 className="text-2xl text-center mt-6 font-semibold">{integration.name}</h3>
          <p className="text-center text-white/50 mt-2 text-base">
            {integration.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Integrationcolumn;
