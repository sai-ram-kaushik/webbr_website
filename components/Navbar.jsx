"use client";
import { menuList } from "@/constants";
import Link from "next/link";
import React, { useState } from "react";
import Button from "./Button";
import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleChange = () => {
    setNav(!nav);
  };
  return (
    <div className="w-full h-20">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-between w-full h-full px-5 lg:px-10">
          <h2>
            <span>&lt;/&gt;</span>Web<span>br</span>
          </h2>

          <div className="hidden lg:flex items-center gap-8">
            {menuList.map((list, index) => {
              return (
                <ul
                  key={index}
                  className="hover:text-secondary duration-300 ease-out">
                  <Link href={list.path}>
                    <li>{list.label}</li>
                  </Link>
                </ul>
              );
            })}
            <Button title="Contact Us" />
          </div>

          <div
            className="block lg:hidden bg-secondary rounded-full p-2 text-background"
            onClick={handleChange}>
            {nav ? <AiOutlineClose size={25} /> : <FiMenu size={25} />}
          </div>
        </div>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[70%] sm:w-[60%] md:w-[45%] h-screen bg-primary p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 h-screen p-10 ease-in duration-700"
          }>
          <Link href="/" onClick={handleChange}>
            <h2 className="text-background">
              <span>&lt;/&gt;</span>Web<span>br</span>
            </h2>
          </Link>
          <div className="flex flex-col items-center justify-center w-full h-full gap-10">
            {menuList.map((link, index) => (
              <ul
                key={index}
                className="text-xl text-background"
                onClick={handleChange}>
                <Link
                  href={link.path}
                  className="text-background hover:text-secondary text-center duration-200">
                  <li>{link.label}</li>
                </Link>
              </ul>
            ))}

            <Link href="/signup" onClick={handleChange}>
              <Button title="Login / SignUp" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
