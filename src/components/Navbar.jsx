"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  const links = (
    <>
      <li>
        <Link
          href={"/"}
          className={`text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            isActive("/")
              ? "text-yellow-300 bg-white/20 px-3 py-1 rounded-lg"
              : "text-white hover:text-purple-300"
          }`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/products"}
          className={`text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            isActive("/products")
              ? "text-yellow-300 bg-white/20 px-3 py-1 rounded-lg"
              : "text-white hover:text-purple-300"
          }`}
        >
          Products
        </Link>
      </li>
      <li>
        <Link
          href={"/features"}
          className={`text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            isActive("/features")
              ? "text-yellow-300 bg-white/20 px-3 py-1 rounded-lg"
              : "text-white hover:text-purple-300"
          }`}
        >
          Features
        </Link>
      </li>
      <li>
        <Link
          href={"/about-us"}
          className={`text-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            isActive("/about-us")
              ? "text-yellow-300 bg-white/20 px-3 py-1 rounded-lg"
              : "text-white hover:text-purple-300"
          }`}
        >
          About us
        </Link>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50">
      <div className="navbar bg-linear-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg backdrop-blur-md bg-opacity-90">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-white hover:bg-white hover:bg-opacity-20"
            >
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow-lg"
            >
              {links}
            </ul>
          </div>
          <Link
            href={"/"}
            className="text-3xl font-bold text-white hover:text-yellow-300 transition-colors duration-300 transform hover:scale-110"
          >
            Next Store
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          {!session ? (
            <>
              <Link
                href={"/login"}
                className="btn bg-white text-purple-600 hover:bg-yellow-300 hover:text-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Log In
              </Link>
              <Link
                href={"/register"}
                className="btn bg-linear-to-r from-yellow-400 to-orange-500 text-white hover:from-orange-500 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Sign up
              </Link>
            </>
          ) : (
            <div className="relative group">
              <button className="px-4 py-2 bg-white text-purple-600 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg">
                {session.user.name}
              </button>
              <div className="hidden group-hover:block absolute right-0 mt-2 bg-white border rounded-lg shadow-xl animate-fade-in">
                <Link
                  href="/dashboard/add-product"
                  className="block px-4 py-2 hover:bg-purple-50 transition-colors"
                >
                  Add Product
                </Link>
                <Link
                  href="/dashboard/manage-products"
                  className="block px-4 py-2 hover:bg-purple-50 transition-colors"
                >
                  Manage Products
                </Link>
                <button
                  onClick={() => signOut()}
                  className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition-colors"
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
