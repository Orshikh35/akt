import React from "react";

function SearchPart() {
  return (
    <div className="mt-12 flex flex-col justify-center items-center mb-32 gap-6">
      <p className="text-[#F15D22] text-[16px] font-semibold">Ажлын саналууд</p>
      <p className="text-[#000000] text-[46px] font-semibold w-[651px] text-center leading-[50px]">
        Хүсэлтээ илгээгээд, Шинэ Ажлаа эхлүүлээрэй
      </p>
      <div className="flex flex-col gap-3">
        <div className="flex justify-center items-center gap-4">
          <button className="w-[176px] h-[40px] rounded-[50px] text-white text-[16px] font-semibold bg-gradient-to-b from-[#F15D22] to-[#F3AC3D]">
            Засал чимэглэл
          </button>
          <button className="w-[180px] h-[40px] rounded-[50px] text-[#6E7175] text-[16px] font-semibold border-[1px] border-[#6E7175]">
            Тавилга угсралт
          </button>
          <button className="w-[150px] h-[40px] rounded-[50px] text-[#6E7175] text-[16px] font-semibold border-[1px] border-[#6E7175]">
            Хаалга, цонх
          </button>
        </div>
      <div className="flex justify-center items-center gap-4">
      <button className="w-[155px] h-[40px] rounded-[50px] text-[#6E7175] text-[16px] font-semibold border-[1px] border-[#6E7175]">
          Тавилга бэлдэц
        </button>
        <button className="w-[110px] h-[40px] rounded-[50px] text-[#6E7175] text-[16px] font-semibold border-[1px] border-[#6E7175]">
          Мужаан
        </button>
        <button className="w-[145px] h-[40px] rounded-[50px] text-[#6E7175] text-[16px] font-semibold border-[1px] border-[#6E7175]">
          Санитехник
        </button>
        <button className="w-[145px] h-[40px] rounded-[50px] text-[#6E7175] text-[16px] font-semibold border-[1px] border-[#6E7175]">
          Санитехник
        </button>
        <button className="w-[90px] h-[40px] rounded-[50px] text-[#6E7175] text-[16px] font-semibold border-[1px] border-[#6E7175]">
          Бусад
        </button>
      </div>
      </div>
    </div>
  );
}

export default SearchPart;
