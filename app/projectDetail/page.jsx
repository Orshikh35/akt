import React from "react";
import ProjectDetail from "./_components/Detail";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function page() {
  return (
    <div>
        <Navbar/>
      <ProjectDetail />
      <Footer />
    </div>
  );
}

export default page;
