import React from "react";
import Navbar from "./utils/navbar";
import Carousel from "./utils/carousel";
import Card from "./utils/card";
import Link from "next/link";

export default function Landingpage() {
  return (
    <>
      <div className="bg-purple-900 h-full">
        <Navbar />
        <Carousel />
        <Card />
      </div>
    </>
  );
}
