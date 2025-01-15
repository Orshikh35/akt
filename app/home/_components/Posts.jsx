import React from "react";
import Logo from "../_assets/Ellipse 126.png";
import Book from "../_assets/bookmark_border.png";
import Location from "../_assets/Group 48097111.png";
import Clock from "../_assets/Icon.png";
import Money from "../_assets/Icon2.png";
import Time from "../_assets/access_time.png";

function Posts() {
  return (
    <div className="mb-32">
      <div className="grid grid-cols-2 gap-6">
        {Array(8)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="w-[465px] h-[330px] rounded-[25px] bg-[#F9F2E7] flex justify-center items-center flex-col gap-2">
              <div className="w-[445px] h-[282px] rounded-[20px] bg-[#FFFFFF] flex flex-col gap-3 justify-start items-center">
                <div className="flex items-center justify-between py-4 w-[425px] h-[66px] border-b-[1px] border-b-gray-200">
                  <div className="flex justify-center items-center gap-4">
                    <img src={Logo.src} alt="" />
                    <p>Төмөрхас ХХК</p>
                  </div>
                  <div className="border-[1px] rounded-full border-gray-400 w-[40px] h-[40px] flex justify-center items-center">
                    <img src={Book.src} alt="" />
                  </div>
                </div>
                <p className="w-[405px] text-[16px] font-bold text-[#161616]">
                  Салбарын интерьер засал чимэглэлийн 3D зургийн ажил хийлгэнэ.
                </p>
                <div className="w-[383px] h-[66px] flex flex-col gap-4 mt-[16px]">
                  <div className="w-[383px] flex justify-between items-center">
                    <div className="flex justify-center items-center gap-2">
                      <img src={Clock.src} alt="" />
                      <p className="text-[12px] font-semibold text-[#6E7175] w-[200px]">
                        Засал чимэглэл
                      </p>
                    </div>
                    <div className="flex justify-start items-center gap-2 w-[110px]">
                      <img src={Clock.src} alt="" />
                      <p className="text-[12px] font-semibold text-[#6E7175]">
                        30 хоног
                      </p>
                    </div>
                  </div>
                  <div className="w-full flex justify-between items-center">
                    <div className="flex justify-center items-center gap-2">
                      <img src={Location.src} alt="" />
                      <p className="text-[12px] font-semibold text-[#6E7175] w-[200px]">
                        Улаанбаатар - Сонгинохайрхан
                      </p>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <img src={Money.src} alt="" />
                      <p className="text-[12px] font-semibold text-[#6E7175]">
                        Тохиролцоно
                      </p>
                    </div>
                  </div>
                </div>
                <button className="w-[405px] h-[43px] rounded-[50px] bg-[#F15D22] text-white font-semibold text-[18px]">
                  Хүсэлт илгээх
                </button>
              </div>
              <div className="flex justify-center items-center gap-3">
                <img src={Time.src} alt="" />
                <p className="text-[14px] font-normal text-[#6E7175]">29 минутын өмнө</p>
              </div>
            </div>
          ))}
      </div>
      <div className="flex justify-center items-center mt-12">
        <button className="w-[155px] h-[40px] rounded-[50px] text-[#161616] text-[16px] font-semibold border-[1px] border-[#6E7175]">
          Бүгдийг харах
        </button>
      </div>
    </div>
  );
}

export default Posts;
