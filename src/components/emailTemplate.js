import React from "react";

export const EmailTemplate = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2 className="text-stone-300">Data from {name}</h2>
      <p>{data}</p>
    </div>
  );
};
