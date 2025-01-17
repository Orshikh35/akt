import React from "react";
import Te from "../../zaruud/_assets/Profiles.png";
import Img from "../_assets/image1.png";
import one from "../_assets/1.png";
import two from "../_assets/2.png";
import three from "../_assets/image copy.png";
import view from "../_assets/v.png";
function ProjectDetail() {
  return (
    <div className="mt-12 mb-32 w-[1100px] flex justify-center mx-auto flex-col ">
      <div className="">
        <p className="text-[14px] font-normal text-[#6E7175]">/ Төсөл</p>
      </div>
      {/* hero section */}
      <div className="w-full flex justify-between  mt-12">
        <div className="">
          <h1 className="text-[24px] font-bold w-[640px]">
            Төсөл: Юнител - Ханбогд салбар
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
              Төвийн эрчим хүчний системээс алслагдсан аймгуудад Сэргээгдэх
              эрчим хүчний эх үүсвэрийг бий болгох. <br/> <br/>Төслийн нийгэм, эдийн
              засгийн үр өгөөж:<br/> <br/> Баруун бүсийн алслагдсан сум, орон нутгийн
              хэрэглэгчдийн цахилгаан хамгамжийн хүртээмж, чанарыг
              дээшлүүлнэ.Нүүрсний дулааны эрчим хүчийг ашиглахгүй, дан нарны
              сэргээгдэх эрчим хүчийг ашиглан цахилгаан эрчим хүч үйлдвэрлэх тул
              хүлэмжийн хий, утаа тортог ялгаруулахгүй тул агаарын бохирдол
              үүсгэж оршин суугчдын эрүүл мэндэд сөргөөр нөлөөлөхгүй. Мөн
              түүнчлэн импортын эрчим хүчний хэрэгцээг бууруулна. <br/> <br/>Ашиглалтад
              оруулсан дэд төслүүд: <br/> <br/>2022 онд Говь-Алтай аймгийн Алтай сумын
              хосолсон систем<br/> <br/> 2022 онд Завхан аймгийн Улиастай сумын 5МВт-ын
              нарны цахилгаан станц, 3.6МВт*ц багтаамжтай цэнэг хуримтлуурын
              станц 2023 онд Говь-Алтай аймгийн Есөнбулаг сумын 10 МВт нарны
              цахилгаан станц<br/> <br/> 2023 онд Завхан аймгийн Тэлмэн сумын дэд станцад
              10 MVar хуурмаг чадал компенсацлах төхөөрөмжийг суурилуулах<br/> <br/> 2022
              онд Ховд аймгийн Жаргалант сумын 1 дүгээр цэцэрлэгийн барилгын
              дулаан хангамжид 135 кВт хүчин чадал бүхий “Гүний дулааны
              халаалтын систем” суурилуулах
            </p>
            <img src={Img.src} alt="uni" className="w-[680px] h-[400px] mt-8" />
            <div className="mt-4 flex items-center gap-4">
              <img src={one.src} alt="" />
              <img src={two.src} alt="" />
            </div>
            <p className="h-[1px] w-[645px] bg-gray-200 mt-12"></p>
            <img src={three.src} alt="" className="mt-12 w-[449px] " />
            <p className="h-[1px] w-[645px] bg-gray-200 mt-12"></p>

          </h1>
        </div>

        <div className="w-[395px]">
          <div className="border-[1px] border-gray-300 w-full h-[170px] flex flex-col justify-center items-center">
            <button className="bg-white border-[1px] border-[#F15D22] w-[353px] h-[60px] rounded-2xl text-[#F15D22] font-semibold mt-3">
            Бүх төслийг харах
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
                  <p className="text-[14px] font-semibold w-full px-6 py-2">
                    Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг
                    хайж байна.
                  </p>
                  <div className="flex w-full justify-between px-6 mt-3">
                    <p className="text-[12px] font-normal">
                      Улаанбаатар - Баянгол
                    </p>
                    <p className="text-[12px] font-normal">2024.08.01</p>
                  </div>
                  <div className="flex items-center gap-3 px-6 my-3">
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      30 хоног
                    </button>
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      Тохиролцоно
                    </button>
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
                  <p className="text-[14px] font-semibold w-full px-6 py-2">
                    Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг
                    хайж байна.
                  </p>
                  <div className="flex w-full justify-between px-6 mt-3">
                    <p className="text-[12px] font-normal">
                      Улаанбаатар - Баянгол
                    </p>
                    <p className="text-[12px] font-normal">2024.08.01</p>
                  </div>
                  <div className="flex items-center gap-3 px-6 my-3">
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      30 хоног
                    </button>
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      Тохиролцоно
                    </button>
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
                  <p className="text-[14px] font-semibold w-full px-6 py-2">
                    Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг
                    хайж байна.
                  </p>
                  <div className="flex w-full justify-between px-6 mt-3">
                    <p className="text-[12px] font-normal">
                      Улаанбаатар - Баянгол
                    </p>
                    <p className="text-[12px] font-normal">2024.08.01</p>
                  </div>
                  <div className="flex items-center gap-3 px-6 my-3">
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      30 хоног
                    </button>
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      Тохиролцоно
                    </button>
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
                  <p className="text-[14px] font-semibold w-full px-6 py-2">
                    Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг
                    хайж байна.
                  </p>
                  <div className="flex w-full justify-between px-6 mt-3">
                    <p className="text-[12px] font-normal">
                      Улаанбаатар - Баянгол
                    </p>
                    <p className="text-[12px] font-normal">2024.08.01</p>
                  </div>
                  <div className="flex items-center gap-3 px-6 my-3">
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      30 хоног
                    </button>
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      Тохиролцоно
                    </button>
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
                  <p className="text-[14px] font-semibold w-full px-6 py-2">
                    Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг
                    хайж байна.
                  </p>
                  <div className="flex w-full justify-between px-6 mt-3">
                    <p className="text-[12px] font-normal">
                      Улаанбаатар - Баянгол
                    </p>
                    <p className="text-[12px] font-normal">2024.08.01</p>
                  </div>
                  <div className="flex items-center gap-3 px-6 my-3">
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      30 хоног
                    </button>
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      Тохиролцоно
                    </button>
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
                  <p className="text-[14px] font-semibold w-full px-6 py-2">
                    Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг
                    хайж байна.
                  </p>
                  <div className="flex w-full justify-between px-6 mt-3">
                    <p className="text-[12px] font-normal">
                      Улаанбаатар - Баянгол
                    </p>
                    <p className="text-[12px] font-normal">2024.08.01</p>
                  </div>
                  <div className="flex items-center gap-3 px-6 my-3">
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      30 хоног
                    </button>
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      Тохиролцоно
                    </button>
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
                  <p className="text-[14px] font-semibold w-full px-6 py-2">
                    Салбарын интерьер засал чимэглэлийн ажил хийх найдвартай баг
                    хайж байна.
                  </p>
                  <div className="flex w-full justify-between px-6 mt-3">
                    <p className="text-[12px] font-normal">
                      Улаанбаатар - Баянгол
                    </p>
                    <p className="text-[12px] font-normal">2024.08.01</p>
                  </div>
                  <div className="flex items-center gap-3 px-6 my-3">
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      30 хоног
                    </button>
                    <button className="text-[11px] font-normal bg-[#F15D22] rounded-lg text-white px-4 py-1">
                      Тохиролцоно
                    </button>
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

export default ProjectDetail;
