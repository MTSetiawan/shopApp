import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div className="navbar bg-violet-900 text-white">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Shop App</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered"
          />
        </div>
      </div>

      <div className="px-8">
        <Link href="">
          <h3>Daftar</h3>
        </Link>
      </div>
    </div>
  );
}
