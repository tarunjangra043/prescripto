import React from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* -------------Left Section------------- */}
        <div>
          <img
            onClick={() => {
              navigate("/");
              scrollTo(0, 0);
            }}
            className="mb-5 w-40"
            src={assets.logo}
            alt=""
          />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* -------------Center Section------------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink onClick={() => scrollTo(0, 0)} to="/">
              <li>Home</li>
            </NavLink>
            <NavLink onClick={() => scrollTo(0, 0)} to="/about">
              <li>About us</li>
            </NavLink>
            <NavLink onClick={() => scrollTo(0, 0)} to="/">
              <li>Delivery</li>
            </NavLink>
            <NavLink onClick={() => scrollTo(0, 0)} to="/">
              <li>Privacy policy</li>
            </NavLink>
          </ul>
        </div>

        {/* -------------Right Section------------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+919350256027</li>
            <li>tarunjangra043@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* --------------Copyright Text--------------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025 @TarunJangra - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
