import Home from "./home/page";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function All() {
  return (
    <div className="flex justify-center items-center flex-col">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}
