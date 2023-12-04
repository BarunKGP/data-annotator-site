"use client";

import React from "react";

function TwoButtons({ b1Name, b2Name, b1Click, b2Click }) {
  return (
    <div className="flex justify-center gap-5">
      <button
        className="px-4 py-2 bg-green-600 text-stone-300 text-xl font-semibold rounded-md"
        onClick={b1Click}
      >
        {b1Name}
      </button>
      <button
        className="px-4 py-2 bg-orange-600 text-stone-300 text-xl font-semibold rounded-md"
        onClick={b2Click}
      >
        {b2Name}
      </button>
    </div>
  );
}

export default TwoButtons;
