import React from 'react';
import Uni from '../_assets/Unitel.png'
import Icon from '../_assets/bo.png'
const FeaturedOrganizations = () => {
  const listings = [
    {
      id: 1,
      company: 'Юнител Групп',
      companyType: 'Technology Company',
      rating: 4.9,
      badges: ['Тавилга бэлдэц', 'Тавилга угсралт'],
      tags: ['Засал чимэглэл', 'Зураг төсөл', '+13'],
      jobCount: 319
    },
    {
        id: 1,
        company: 'Юнител Групп',
        companyType: 'Technology Company',
        rating: 4.9,
        badges: ['Тавилга бэлдэц', 'Тавилга угсралт'],
        tags: ['Засал чимэглэл', 'Зураг төсөл', '+13'],
        jobCount: 319
      },
      {
        id: 1,
        company: 'Юнител Групп',
        companyType: 'Technology Company',
        rating: 4.9,
        badges: ['Тавилга бэлдэц', 'Тавилга угсралт'],
        tags: ['Засал чимэглэл', 'Зураг төсөл', '+13'],
        jobCount: 319
      }
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8">
        <h3 className="text-red-500 text-sm mb-2">Гүйцэтгэгчид</h3>
        <h1 className="text-3xl font-semibold mb-6">Онцлох байгуулагууд</h1>
      </div>

      <div className="flex justify-center items-center gap-6">
        {listings.map((listing) => (
          <div  key={listing.id} className="bg-[#F9F2E7] rounded-[30px] p-4 w-[350px] h-[330px] border-[1px] border-gray-300">
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
          <div className='flex justify-center items-center gap-2'>
          <p className='font-bold text-black'>319</p>
          <span>Ажлын зар</span>
          </div>
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
};

export default FeaturedOrganizations 
    ;