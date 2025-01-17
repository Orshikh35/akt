import React from "react";
import Te from "../../../zaruud/_assets/Profiles.png";
import Img from "../_assets/image1.png";
import one from "../_assets/1.png";
import two from "../_assets/2.png";
import three from "../_assets/image copy.png";
import view from "../_assets/v.png";
function Detail() {
  return (
    <div className="mt-12 mb-32 w-[1100px] flex justify-center mx-auto flex-col ">
      <div className="">
        <p className="text-[14px] font-normal text-[#6E7175]">
          / Ажлын санал / Заслын чимэглэл
        </p>
      </div>
      {/* hero section */}
      <div className="w-full flex justify-between  mt-12">
        <div className="">
          <h1 className="text-[24px] font-bold w-[640px]">
            Салбарын интерьер засал чимэглэлийн 3D зургийн ажил хийлгэнэ.
            <div className="flex items-center gap-4 w-[610px] mt-6 py-6 border-b-[1px] border-b-gray-300">
              <img src={Te.src} alt="uni" className="w-[70px] h-[70px]" />
              <div>
                <h1 className="text-[14px] font-bold">Төмөрхас ХХК</h1>
                <p className="text-[10px] font-normal">
                  2021 оны 4-р сарын 15-нд
                </p>
              </div>
            </div>
            <p className="text-[14px] font-normal text-[#6E7175] mt-8">
              Шинэ салбарын интерьер дизайныг гаргаж, гүйцэтгэлийг хийхэд туслах
              туршлагатай интерьер дизайнерыг хайж. Гүйцэтгэгч нь гоо зүйд
              анхаарлаа хандуулж, функциональ, үзэмжтэй загваруудыг бий болгох
              чадвартай байх. <br />
              <br /> Үүрэг хариуцлага нь дизайны үзэл баримтлалыг бий болгох,
              материалыг сонгох, гүйцэтгэгчидтэй зохицуулах, засварын бүх үйл
              явцыг хянах зэрэг орно.
            </p>
            <img src={Img.src} alt="uni" className="w-[680px] h-[400px] mt-8" />
            <div className="mt-4 flex items-center gap-4">
              <img src={one.src} alt="" />
              <img src={two.src} alt="" />
            </div>
            <p className="h-[1px] w-[645px] bg-gray-200 mt-12"></p>
            <img src={three.src} alt="" className="mt-12 w-[449px] " />
            <p className="h-[1px] w-[645px] bg-gray-200 mt-12"></p>
            <p className="text-[#F15D22] text-base font-semibold mt-12">
              Хамааралтай төсөл
            </p>
            <p className="text-[#000000] text-[20px] font-bold mt-4">
              Unitel - Ханбогд салбар
            </p>
            <p className="text-[#161616] text-[12px] font-normal mt-4">
              Шинэ салбарын засал чимэглэлийн төсөл. Өмнөговь аймаг Ханбогд сум.
              Гадна болон дотор заслын ажил хийж гүйцэтгэнэ.{" "}
            </p>
          </h1>
        </div>

        <div className="w-[395px]">
          <div className="border-[1px] border-gray-300 w-full h-[250px] flex flex-col justify-center items-center">
            <button className="bg-[#F15D22] w-[353px] h-[60px] rounded-2xl text-white font-semibold">
              Хүсэлт илгээх
            </button>
            <button className="bg-white border-[1px] border-[#F15D22] w-[353px] h-[60px] rounded-2xl text-[#F15D22] font-semibold mt-3">
              Чатлах
            </button>
            <img src={view.src} alt="" className="w-[97px] h-[20px] mt-6" />
          </div>
          <div className="border-[1px] border-gray-300 w-full h-auto flex flex-col p-6">
            <p className="text-[14px] font-bold">Энэ төрлийн зарууд</p>
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex flex-col rounded-xl border-[1px] border-gray-300">
                <div className="flex items-center gap-4 w-full p-3 bg-[#FFF1DB] rounded-xl">
                  <img src={Te.src} alt="uni" className="w-[43px] h-[43px]" />
                  <div>
                    <h1 className="text-[14px] font-bold">Төмөрхас ХХК</h1>
                    <p className="text-[10px] font-normal">
                      2021 оны 4-р сарын 15-нд
                    </p>
                  </div>
                </div>
                <div>
                    <p className="text-[14px] font-semibold w-full px-6 py-2">Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг хайж байна.</p>
                    <div className="flex w-full justify-between px-6 mt-3">
                        <p className="text-[12px] font-normal">Улаанбаатар - Баянгол</p>
                        <p className="text-[12px] font-normal">2024.08.01</p>
                    </div>
                    <div className="flex items-center gap-3 px-6 my-3">
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">30 хоног</button>
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">Тохиролцоно</button>
                    </div>
                  </div>
              </div>
              <div className="flex flex-col rounded-xl border-[1px] border-gray-300">
                <div className="flex items-center gap-4 w-full p-3 bg-[#FFF1DB] rounded-xl">
                  <img src={Te.src} alt="uni" className="w-[43px] h-[43px]" />
                  <div>
                    <h1 className="text-[14px] font-bold">Төмөрхас ХХК</h1>
                    <p className="text-[10px] font-normal">
                      2021 оны 4-р сарын 15-нд
                    </p>
                  </div>
                </div>
                <div>
                    <p className="text-[14px] font-semibold w-full px-6 py-2">Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг хайж байна.</p>
                    <div className="flex w-full justify-between px-6 mt-3">
                        <p className="text-[12px] font-normal">Улаанбаатар - Баянгол</p>
                        <p className="text-[12px] font-normal">2024.08.01</p>
                    </div>
                    <div className="flex items-center gap-3 px-6 my-3">
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">30 хоног</button>
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">Тохиролцоно</button>
                    </div>
                  </div>
              </div>
              <div className="flex flex-col rounded-xl border-[1px] border-gray-300">
                <div className="flex items-center gap-4 w-full p-3 bg-[#FFF1DB] rounded-xl">
                  <img src={Te.src} alt="uni" className="w-[43px] h-[43px]" />
                  <div>
                    <h1 className="text-[14px] font-bold">Төмөрхас ХХК</h1>
                    <p className="text-[10px] font-normal">
                      2021 оны 4-р сарын 15-нд
                    </p>
                  </div>
                </div>
                <div>
                    <p className="text-[14px] font-semibold w-full px-6 py-2">Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг хайж байна.</p>
                    <div className="flex w-full justify-between px-6 mt-3">
                        <p className="text-[12px] font-normal">Улаанбаатар - Баянгол</p>
                        <p className="text-[12px] font-normal">2024.08.01</p>
                    </div>
                    <div className="flex items-center gap-3 px-6 my-3">
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">30 хоног</button>
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">Тохиролцоно</button>
                    </div>
                  </div>
              </div>
              <div className="flex flex-col rounded-xl border-[1px] border-gray-300">
                <div className="flex items-center gap-4 w-full p-3 bg-[#FFF1DB] rounded-xl">
                  <img src={Te.src} alt="uni" className="w-[43px] h-[43px]" />
                  <div>
                    <h1 className="text-[14px] font-bold">Төмөрхас ХХК</h1>
                    <p className="text-[10px] font-normal">
                      2021 оны 4-р сарын 15-нд
                    </p>
                  </div>
                </div>
                <div>
                    <p className="text-[14px] font-semibold w-full px-6 py-2">Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг хайж байна.</p>
                    <div className="flex w-full justify-between px-6 mt-3">
                        <p className="text-[12px] font-normal">Улаанбаатар - Баянгол</p>
                        <p className="text-[12px] font-normal">2024.08.01</p>
                    </div>
                    <div className="flex items-center gap-3 px-6 my-3">
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">30 хоног</button>
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">Тохиролцоно</button>
                    </div>
                  </div>
              </div>
              <div className="flex flex-col rounded-xl border-[1px] border-gray-300">
                <div className="flex items-center gap-4 w-full p-3 bg-[#FFF1DB] rounded-xl">
                  <img src={Te.src} alt="uni" className="w-[43px] h-[43px]" />
                  <div>
                    <h1 className="text-[14px] font-bold">Төмөрхас ХХК</h1>
                    <p className="text-[10px] font-normal">
                      2021 оны 4-р сарын 15-нд
                    </p>
                  </div>
                </div>
                <div>
                    <p className="text-[14px] font-semibold w-full px-6 py-2">Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг хайж байна.</p>
                    <div className="flex w-full justify-between px-6 mt-3">
                        <p className="text-[12px] font-normal">Улаанбаатар - Баянгол</p>
                        <p className="text-[12px] font-normal">2024.08.01</p>
                    </div>
                    <div className="flex items-center gap-3 px-6 my-3">
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">30 хоног</button>
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">Тохиролцоно</button>
                    </div>
                  </div>
              </div>
              <div className="flex flex-col rounded-xl border-[1px] border-gray-300">
                <div className="flex items-center gap-4 w-full p-3 bg-[#FFF1DB] rounded-xl">
                  <img src={Te.src} alt="uni" className="w-[43px] h-[43px]" />
                  <div>
                    <h1 className="text-[14px] font-bold">Төмөрхас ХХК</h1>
                    <p className="text-[10px] font-normal">
                      2021 оны 4-р сарын 15-нд
                    </p>
                  </div>
                </div>
                <div>
                    <p className="text-[14px] font-semibold w-full px-6 py-2">Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг хайж байна.</p>
                    <div className="flex w-full justify-between px-6 mt-3">
                        <p className="text-[12px] font-normal">Улаанбаатар - Баянгол</p>
                        <p className="text-[12px] font-normal">2024.08.01</p>
                    </div>
                    <div className="flex items-center gap-3 px-6 my-3">
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">30 хоног</button>
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">Тохиролцоно</button>
                    </div>
                  </div>
              </div>
       
              <div className="flex flex-col rounded-xl border-[1px] border-gray-300">
                <div className="flex items-center gap-4 w-full p-3 bg-[#FFF1DB] rounded-xl">
                  <img src={Te.src} alt="uni" className="w-[43px] h-[43px]" />
                  <div>
                    <h1 className="text-[14px] font-bold">Төмөрхас ХХК</h1>
                    <p className="text-[10px] font-normal">
                      2021 оны 4-р сарын 15-нд
                    </p>
                  </div>
                </div>
                <div>
                    <p className="text-[14px] font-semibold w-full px-6 py-2">Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг хайж байна.</p>
                    <div className="flex w-full justify-between px-6 mt-3">
                        <p className="text-[12px] font-normal">Улаанбаатар - Баянгол</p>
                        <p className="text-[12px] font-normal">2024.08.01</p>
                    </div>
                    <div className="flex items-center gap-3 px-6 my-3">
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">30 хоног</button>
                        <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">Тохиролцоно</button>
                    </div>
                  </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
