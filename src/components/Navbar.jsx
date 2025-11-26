"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const links = (
    <>
      <li>
        <Link href={"/"} className="text-lg font-medium">
          Home
        </Link>
      </li>
      <li>
        <Link href={"/products"} className="text-lg font-medium">
          Products
        </Link>
      </li>
      <li>
        <Link href={"/features"} className="text-lg font-medium">
          Features
        </Link>
      </li>
      <li>
        <Link href={"/about-us"} className="text-lg font-medium">
          About us
        </Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link href={"/"} className="text-2xl font-semibold">
            Next Store
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          {!session ? (
            <>
              <Link href={"/login"} className="btn">
                Log In
              </Link>
              <Link href={"/register"} className="btn">
                Sign up
              </Link>
            </>
          ) : (
            <div className="relative group">
              <button className="px-3 py-1 bg-gray-800 text-white rounded">
                {session.user.name}
              </button>
              <div className="hidden group-hover:block absolute right-0 mt-2 bg-white border rounded shadow">
                <Link href="/dashboard/add-product" className="block px-4 py-2">
                  Add Product
                </Link>
                <Link
                  href="/dashboard/manage-products"
                  className="block px-4 py-2"
                >
                  Manage Products
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 py-2 text-red-600"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
