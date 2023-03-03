import React from "react";

export default function Card() {
  return (
    <div className="px-8 mt-5">
      <div className="card w-96 bg-violet-500 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center text-white">
          <h2 className="card-title">Shoes!</h2>
          <div className="card-actions">
            <button className="btn btn-neutral-content">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
