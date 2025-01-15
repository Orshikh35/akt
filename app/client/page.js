import React from "react";
import ClientHero from "./_components/Client";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function page() {
  return (
    <div>
      <Navbar/>
      <ClientHero />
      <Footer />
    </div>
  );
}

export default page;
