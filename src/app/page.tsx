
import MainHeader from "./components/main-header";
import HeroSection from "./components/hero";
import Style from "./components/style";
import Review from "./components/review";
import Footer from "./components/footer";
import Anounce from "./components/anouncement";
import Fonts from "./components/fonts";
import Products from "./product/page";
import Top_sell from "./product/sell";


export default function Home() {
  return (
    <div>
    
      <HeroSection />
      <Fonts/>
      <Products/>
      <Top_sell/>
      {/* <NewArrival />
      <TopSell /> */}
      <Style />
      <Review />
    </div>
  );
}
