'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import Unitel from '../_assets/unitel.png'
import Pro from '../_assets/Ellipse 18.png'
export default function Comments() {
  return (
    <section className="w-[1440px] py-16 mb-16">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-center text-[#FF5533] text-[14px] font-medium">
          Сэтгэгдэлүүд
        </h2>
        <h2 className="text-center text-black text-[46px] font-medium mb-16">
        Захиалагчдын сэтгэгдэл
        </h2>
        <div className="flex justify-center items-center gap-6">
          <div className="w-[460px] h-[440px] rounded-3xl border-[1px] border-gray-300 p-8">
            <img src={Unitel.src} alt="" />
            <div className="mt-6 mb-16 text-[#161616]">
              "Гүйцэтгэгчид маш мэргэжлийн, хурдан бөгөөд чанартай үйлчилгээ үзүүлсэн. Би ажлын явцын талаар байнга мэдээлэл авч, асуусан асуултууддаа цаг тухайд нь хариулт авсан. Ажлын хугацаа болон төсвийг яг тэг барьж дуусгасан нь хамгийн их таалагдсан"
            </div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF5533] text-[#FF5533]" />
              ))}
              <span className="text-[#FF5533] ml-2">4.9</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
        src={Pro.src}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="text-black font-medium">Б.Баатархүү</p>
                <p className="text-[#6E7175] text-sm">Захиалагч</p>
              </div>
            </div>
          </div>

          {/* Middle Card (Highlighted) */}
          <div className="w-[460px] h-[440px] rounded-3xl border-[1px] border-gray-300 p-8 bg-gradient-to-b from-[#f9d4b666] to-[#f7a778]">
          <img src={Unitel.src} alt="" />
          <div className="mt-6 mb-16 text-[#161616]">
              "Гүйцэтгэгчид маш мэргэжлийн, хурдан бөгөөд чанартай үйлчилгээ үзүүлсэн. Би ажлын явцын талаар байнга мэдээлэл авч, асуусан асуултууддаа цаг тухайд нь хариулт авсан. Ажлын хугацаа болон төсвийг яг тэг барьж дуусгасан нь хамгийн их таалагдсан"
            </div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF5533] text-[#FF5533]" />
              ))}
              <span className="text-[#FF5533] ml-2">4.9</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
            src={Pro.src}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="text-black font-medium">Б.Баатархүү</p>
                <p className="text-[#6E7175] text-sm">Захиалагч</p>
              </div>
            </div>
          </div>

          {/* Third Card */}
          <div className="w-[460px] h-[440px] rounded-3xl border-[1px] border-gray-300 p-8">
          <img src={Unitel.src} alt="" />
          <div className="mt-6 mb-16 text-[#161616]">
              "Гүйцэтгэгчид маш мэргэжлийн, хурдан бөгөөд чанартай үйлчилгээ үзүүлсэн. Би ажлын явцын талаар байнга мэдээлэл авч, асуусан асуултууддаа цаг тухайд нь хариулт авсан. Ажлын хугацаа болон төсвийг яг тэг барьж дуусгасан нь хамгийн их таалагдсан"
            </div>
            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#FF5533] text-[#FF5533]" />
              ))}
              <span className="text-[#FF5533] ml-2">4.9</span>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={Pro.src}
                alt="Profile"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="text-black font-medium">Б.Баатархүү</p>
                <p className="text-[#6E7175] text-sm">Захиалагч</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

