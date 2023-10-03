"use client";

import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/images/pokedex_logo.png";

const navgationMenuItems = [
  { href: "/all_pokemons", label: "All Pokemons" },
  { href: "/captured", label: "Captured" },
  { href: "/settings", label: "Settings" },
  { href: "/about", label: "About" },
];

export default function Navigation() {
  const [menuIcon, setMenuIcon] = useState<boolean>(false);

  function handleMenuIconClick() {
    setMenuIcon(!menuIcon);
  }

  return (
    <header className="w-full top-0 fixed z-50 bg-white border-b-2 shadow-[0px_20px_15px_-20px_#00000024]">
      <nav className="max-w-[1366px] flex justify-between items-center h-[70px] mx-auto">
        <Link href={"/"}>
          <Image
            src={logo}
            width={150}
            height={70}
            alt="Pokedex Logo"
            className="ml-4"
            onClick={() => setMenuIcon(false)}
          />
        </Link>

        <ul className="hidden md:flex">
          {navgationMenuItems.map((item, index) => {
            return (
              <li key={item.label} className="p-1 mx-4">
                <Link
                  href={item.href}
                  className="hover:border-b-2 border-blue-700"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="md:hidden mr-4" onClick={handleMenuIconClick}>
          {menuIcon ? <HiOutlineX size="35" /> : <HiOutlineMenu size="35" />}
        </button>

        <ul
          className={
            menuIcon
              ? "fixed left-0 top-[70px] w-[65%] h-full bg-white p-10 ease-in-out duration-500 md:hidden shadow-[25px_0px_25px_-20px_#00000024]"
              : "fixed left-[-100%] top-[70px] w-[65%] h-full ease-in-out duration-500"
          }
        >
          <ul>
            {navgationMenuItems.map((item, index) => {
              return (
                <li key={item.label} className="p-1 mx-4 mb-3">
                  <Link
                    href={item.href}
                    className="hover:border-b-2 border-blue-700"
                    onClick={handleMenuIconClick}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </ul>
      </nav>
    </header>
  );
}

//backdrop-blur-lg
