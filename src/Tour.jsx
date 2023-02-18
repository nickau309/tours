import React, { useState } from "react";

export default function Tour({ image, info, name, price, removeTour }) {
  const [isShowingAll, setIsShowingAll] = useState(false);

  const toggleIsShowingAll = () => {
    setIsShowingAll((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      toggleIsShowingAll();
    }
  };

  return (
    <article className="relative rounded-2xl border border-gray-300 bg-white text-sm shadow-lg transition-shadow duration-200 hover:shadow-black/20">
      <img
        src={image}
        alt={name}
        className="h-80 w-full rounded-t-[15px] object-cover"
      />
      <span className="absolute right-0 top-0 rounded-tr-[15px] rounded-bl-[15px] bg-blue-50 py-2 px-3 text-blue-400 sm:text-base">
        ${price}
      </span>
      <div className="flex flex-col p-6">
        <h4 className="mb-2 font-bold capitalize tracking-wide sm:text-base">
          {name}
        </h4>
        <p className="mb-4 text-slate-500">
          {isShowingAll ? info : `${info.slice(0, info.indexOf(" ", 200))}...`}{" "}
          <span
            role="button"
            tabIndex="0"
            onClick={toggleIsShowingAll}
            onKeyDown={handleKeyDown}
            className="font-semibold text-blue-400"
          >
            {isShowingAll ? "Show Less" : "Read More"}
          </span>
        </p>
        <button
          onClick={removeTour}
          className="w-40 self-center rounded-full border border-red-500 py-1 tracking-wider text-red-500 duration-200 ease-in-out focus:outline-none focus:ring focus:ring-red-500/50 hocus:bg-red-500 hocus:text-white sm:w-48 sm:text-base"
        >
          Not Interested
        </button>
      </div>
    </article>
  );
}
