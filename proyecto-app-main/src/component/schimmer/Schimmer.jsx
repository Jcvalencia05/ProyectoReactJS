import React from "react";

export default function Schimmer() {
  return (
    <main className="w-full pt-[120px] overflow-hidden px-5">
      <div className="max-w-[1200px] h-[83vh] mx-auto overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {Array(8)
          .fill("")
          .map(() => {
            return (
              <div key={Math.random()} className="h-[330px] w-full bg-slate-200 rounded-lg"></div>
            );
          })}
      </div>
    </main>
  );
}
