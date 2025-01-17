'use client'
import React from "react";
import Uni from "../../home/_assets/Unitel.png";
import Icon from "../../home/_assets/bo.png";
import Naran from "../_assets/Profile1.png";
import Logo from "../_assets/Icon1.png";
import Evo from "../_assets/Evaluation.png";
import Uran from '../_assets/Profile.png'
import Univision from '../_assets/Profiqe.png'
import Te from '../_assets/Profiles.png'
import { useRouter } from "next/navigation"; // Import useRouter from Next.js

function Special() {
    const router = useRouter();  // Initialize useRouter

    const handleNavigation = (path) => {
        router.push(path);  // Navigate to the specified path
      };

      
  const listings = [
    {
      id: 1,
      company: "Юнител Групп",
      companyType: "Technology Company",
      rating: 4.9,
      badges: ["Тавилга бэлдэц", "Тавилга угсралт"],
      tags: ["Засал чимэглэл", "Зураг төсөл", "+13"],
      jobCount: 319,
    },
    {
      id: 1,
      company: "Юнител Групп",
      companyType: "Technology Company",
      rating: 4.9,
      badges: ["Тавилга бэлдэц", "Тавилга угсралт"],
      tags: ["Засал чимэглэл", "Зураг төсөл", "+13"],
      jobCount: 319,
    },
    {
      id: 1,
      company: "Юнител Групп",
      companyType: "Technology Company",
      rating: 4.9,
      badges: ["Тавилга бэлдэц", "Тавилга угсралт"],
      tags: ["Засал чимэглэл", "Зураг төсөл", "+13"],
      jobCount: 319,
    },
    {
      id: 1,
      company: "Юнител Групп",
      companyType: "Technology Company",
      rating: 4.9,
      badges: ["Тавилга бэлдэц", "Тавилга угсралт"],
      tags: ["Засал чимэглэл", "Зураг төсөл", "+13"],
      jobCount: 319,
    },
    {
      id: 1,
      company: "Юнител Групп",
      companyType: "Technology Company",
      rating: 4.9,
      badges: ["Тавилга бэлдэц", "Тавилга угсралт"],
      tags: ["Засал чимэглэл", "Зураг төсөл", "+13"],
      jobCount: 319,
    },
    {
      id: 1,
      company: "Юнител Групп",
      companyType: "Technology Company",
      rating: 4.9,
      badges: ["Тавилга бэлдэц", "Тавилга угсралт"],
      tags: ["Засал чимэглэл", "Зураг төсөл", "+13"],
      jobCount: 319,
    },

    {
      id: 1,
      company: "Юнител Групп",
      companyType: "Technology Company",
      rating: 4.9,
      badges: ["Тавилга бэлдэц", "Тавилга угсралт"],
      tags: ["Засал чимэглэл", "Зураг төсөл", "+13"],
      jobCount: 319,
    },
    {
      id: 1,
      company: "Юнител Групп",
      companyType: "Technology Company",
      rating: 4.9,
      badges: ["Тавилга бэлдэц", "Тавилга угсралт"],
      tags: ["Засал чимэглэл", "Зураг төсөл", "+13"],
      jobCount: 319,
    },
    {
      id: 1,
      company: "Юнител Групп",
      companyType: "Technology Company",
      rating: 4.9,
      badges: ["Тавилга бэлдэц", "Тавилга угсралт"],
      tags: ["Засал чимэглэл", "Зураг төсөл", "+13"],
      jobCount: 319,
    },
  ];

  const profileImages = [
    { src: Naran.src, name: "Наран Групп", type: "Наран Трейд ХХК" },
    { src: Univision.src, name: "Univision Group", type: "Univision LLC" },
    { src: Uran.src, name: "Уран Групп", type: "Уран Трейд ХХК" },
    { src: Te.src, name: "Te Group", type: "Te Trade LLC" }
  ];



    const companies = Array(24).fill(null).map((_, index) => ({
    ...profileImages[index % 4],
    jobCount: 568
  }));

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h3 className="text-red-500 text-sm mb-2">Гүйцэтгэгчид</h3>
        <h1 className="text-3xl font-semibold mb-6">Онцлох байгуулагууд</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((listing) => (
          <div
            key={listing.id}
            className="bg-[#F9F2E7] rounded-[30px] p-4 w-[350px] h-[330px] border-[1px] border-gray-300"
          >
            <div className="flex items-start justify-between mb-4">
              <img src={Uni.src} alt="" />
              <div className="flex items-center">
                <span className="text-orange-500">★</span>
                <span className="ml-1">{listing.rating}</span>
              </div>
            </div>

            <h3 className="font-semibold text-lg mb-1">{listing.company}</h3>
            <p className="text-gray-600 text-sm mb-4">{listing.companyType}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {listing.badges.map((badge, index) => (
                <span
                  key={index}
                  className="bg-[#F3AC3D]/20 text-orange-700 px-3 py-1 rounded-full text-sm"
                >
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {listing.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[#F3AC3D]/20 text-orange-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center text-gray-600 gap-3">
              <img src={Icon.src} alt="" />
              <div className="flex justify-center items-center gap-2">
                <p className="font-bold text-black">{listing.jobCount}</p>
                <span>Ажлын зар</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex  items-center gap-4 mt-12">
        <p className="text-[24px] font-bold">Бүх байгууллага</p>
        <p className="text-[24px] font-bold text-[#F15D22]">2563</p>
      </div>
      <div className="flex  gap-4">
        <div>
          <div className="mt-6">
            <div className="w-[218px]">
              <div className="w-[218px] h-[319px] rounded-t-[20px] bg-white border-[0.5px] border-[#D4D4D4]">
                <div className=" border-b-[0.5px] border-b-[#D4D4D4]">
                  <h1 className="py-2 px-3 text-[14px] font-bold">
                    Ажлын төрөл
                  </h1>
                </div>
                <div className="space-y-2 px-3 py-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Засал чимэглэл</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Тавилга угсралт</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Хаалга, цонх</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Тавилга бэлдэц</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Халаалтын систем</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Сантехник</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Өрөмдөж тогтоох</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Зураг төсөл</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Өргөгч кран</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">
                      Барилгын зураг төсөл
                    </p>
                  </label>
                </div>
                <div className="px-3 mt-4 flex items-center gap-1">
                  <p className="text-[10px] font-normal text-[#F15D22] underline">
                    Бүгдийг харах
                  </p>
                  <p className="">
                    <svg
                      width="8"
                      height="4"
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.63125 0.368774L4.5 3.23127L7.36875 0.368774L8.25 1.25002L4.5 5.00002L0.75 1.25002L1.63125 0.368774Z"
                        fill="#F15D22"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="">
            <div className="w-[218px]">
              <div className="w-[218px] h-[319px]  bg-white border-[0.5px] border-[#D4D4D4]">
                <div className=" border-b-[0.5px] border-b-[#D4D4D4]">
                  <h1 className="py-2 px-3 text-[14px] font-bold">Байршил</h1>
                </div>
                <div className="space-y-2 px-3 py-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Улаанбаатар</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Архангай</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Баян-Өлгий</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Баянхонгор</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Булган</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Говь-Алтай</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Говьсүмбэр</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Дархан-Уул</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Дорноговь</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">Дорнод</p>
                  </label>
                </div>
                <div className="px-3 mt-4 flex items-center gap-1">
                  <p className="text-[10px] font-normal text-[#F15D22] underline">
                    Бүгдийг харах
                  </p>
                  <p className="">
                    <svg
                      width="8"
                      height="4"
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.63125 0.368774L4.5 3.23127L7.36875 0.368774L8.25 1.25002L4.5 5.00002L0.75 1.25002L1.63125 0.368774Z"
                        fill="#F15D22"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="">
            <div className="w-[218px]">
              <div className="w-[218px] h-[209px] bg-white border-[0.5px] border-[#D4D4D4]">
                <div className=" border-b-[0.5px] border-b-[#D4D4D4]">
                  <h1 className="py-2 px-3 text-[14px] font-bold">Үнэлгээ</h1>
                </div>
                <div className="space-y-2 px-3 py-2">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">4.1-5.0 одтой</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">3.1-4.0 одтой</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">2.1-3.0 одтой</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">1.1-2.0 одтой</p>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox w-3 h-3 " />
                    <p className="text-[10px] font-normal">0.0-1.0 одтой</p>
                  </label>
                </div>
                <div className="px-3 mt-4 flex items-center gap-1">
                  <p className="text-[10px] font-normal text-[#F15D22] underline">
                    Бүгдийг харах
                  </p>
                  <p className="">
                    <svg
                      width="8"
                      height="4"
                      viewBox="0 0 9 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.63125 0.368774L4.5 3.23127L7.36875 0.368774L8.25 1.25002L4.5 5.00002L0.75 1.25002L1.63125 0.368774Z"
                        fill="#F15D22"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start mt-6 mb-[500px]">
          <div className="grid grid-cols-4 gap-8"  >
            {companies.map((company, index) => (
              <div
              onClick={() => handleNavigation('/orgDetail')}
                key={index}
                className="w-[218px] h-[218px] rounded-2xl bg-[#F9F2E7] flex flex-col justify-center items-center cursor-pointer"
              >
                <div className="w-16 h-16" >
                  <img src={company.src}  alt="" />
                </div>

                <p className="text-[14px] font-semibold mt-3">{company.name}</p>
                <p className="text-[12px] text-[#161616] font-normal">
                  {company.type}
                </p>
                <div className="w-[166px] h-[2px] bg-white my-2"></div>

                <div className="flex gap-6 items-center mt-2">
                  <div className="flex items-center gap-3">
                    <img src={Icon.src} alt="" />
                    <p className="text-[14px] font-semibold text-[#F15D22]">
                      {company.jobCount}
                    </p>
                  </div>
                  <div className="flex items-center ">
                    <img src={Evo.src} alt="" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Special;
