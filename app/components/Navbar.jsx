'use client'
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import Logo from "../Home/_assets/AKT LOGO.png";
import SearchIcon from "../Home/_assets/SearchOutlined.png";

function Navbar() {
  const router = useRouter();  // Initialize useRouter

  // Function to handle routing when a navbar link is clicked
  const handleNavigation = (path) => {
    router.push(path);  // Navigate to the specified path
  };

  return (
    <div className="w-full h-[78px] flex justify-center items-center shadow-md">
      <div className="w-[1120px] h-[48px] flex items-center justify-between">
        <img src={Logo.src} alt="Logo" className="cursor-pointer"  onClick={() => handleNavigation('/home')}/>
        <div className="w-[447px] h-[40px] flex items-center justify-between">
          <p
            className="text-[#161616] font-semibold text-[14px] cursor-pointer"
            onClick={() => handleNavigation('/client')} // Navigate to customer page
          >
            Захиалагч
          </p>
          <p
            className="text-[#161616] font-semibold text-[14px] cursor-pointer"
            onClick={() => handleNavigation('/contractor')} // Navigate to contractor page
          >
            Гүйцэтгэгч
          </p>
          <p
            className="text-[#161616] font-semibold text-[14px] cursor-pointer"
            onClick={() => handleNavigation('/organizations')} // Navigate to organization page
          >
            Байгууллага
          </p>
          <p
            className="text-[#161616] font-semibold text-[14px] cursor-pointer"
            onClick={() => handleNavigation('/price')} // Navigate to quote page
          >
            Үнийн санал
          </p>
        </div>
        <div className="flex justify-start items-center gap-4 bg-[#F9F2E7] rounded-[50px] w-[300px] h-[38px] p-3">
          <img src={SearchIcon.src} alt="Search Icon" />
          <input
            type="text"
            placeholder="Хайлт хийх"
            className="bg-[#F9F2E7] text-[#6E7175] text-[16px] outline-none"
          />
        </div>
        <button className="text-[#F15D22] text-[18px] border-[1.8px] border-[#F15D22] w-[118px] h-[48px] rounded-[50px] cursor-pointer">
          Нэвтрэх
        </button>
      </div>
    </div>
  );
}

export default Navbar;
