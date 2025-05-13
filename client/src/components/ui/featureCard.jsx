import React from "react";

function FeatureCard({title, description,children}) {
  return (
    <div className="bg-neutral-900 border border-white/10 p-6 rounded-3xl">
        <div className="aspect-video">{children}</div>
      <div>
        <h3 className="text-2xl font-medium mt-6">{title}</h3>
        <p className="text-white/50 mt-2">{description}</p>
      </div>
    </div>
  );
}

export default FeatureCard;
