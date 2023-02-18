import React from "react";
import Tour from "./Tour";

export default function Tours({ tours, removeTour }) {
  return (
    <section className="flex flex-col gap-8 md:gap-12">
      <div className="text-center">
        <h1 className="mb-3 text-4xl font-bold tracking-wide">Our Tours</h1>
        <hr className="mx-auto w-24 border-t-4 border-blue-400" />
      </div>
      <div className="grid items-start gap-8 md:grid-cols-2 xl:grid-cols-3">
        {tours.map((tour) => {
          const { id, ...rest } = tour;
          return <Tour key={id} removeTour={() => removeTour(id)} {...rest} />;
        })}
      </div>
    </section>
  );
}
