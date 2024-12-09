import Image from "next/image";
import Header from "./components/header";
import MainHeader from "./components/main-header";
import HeroSection from "./components/hero";
import Brand from "./components/brand";
import NewArrival from "./components/newArrival";
import TopSell from "./components/topSell";
import Style from "./components/style";
import Review from "./components/review";
import Footer from "./components/footer";


export default function Home() {
  return (
    <div>
    
      <Header />
      <MainHeader />
      <HeroSection />
      <Brand />
      <NewArrival />
      <TopSell />
      <Style />
      <Review />
      <Footer />
    </div>
  );
}
