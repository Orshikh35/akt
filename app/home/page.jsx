'use client'
import Image from "next/image";
import Hero from "./_components/Home";
import Navbar from "../components/Navbar";
import SearchPart from "./_components/SearchPart";
import Posts from "./_components/Posts";
import Call from "./_components/callToAction";
import Footer from "../components/Footer";
import Comments from "./_components/Comments";
import FeaturedOrganizations from "./_components/FeaturedOrganizations";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
     <Hero/>
     <SearchPart/>
     <Posts/>
     <FeaturedOrganizations/> 
     <Call/>
     <Comments/>
    </div>
  );
}
