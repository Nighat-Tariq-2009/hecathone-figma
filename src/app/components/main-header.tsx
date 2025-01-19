
import Link from "next/link";
import { BsPersonCircle } from "react-icons/bs";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import { SheetSide } from "./sheet";
import { NavigationMenuDemo } from "./navigationMenu";


export default function Header() {
  return (
  <header className="w-full h-[60px] bg-white flex justify-between items-center max-w-screen-xl m-auto">
    {/* left */}
    <div className="flex justify-center items-center">
    <SheetSide/>
    <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
    </div>
      
    {/* navbar */}
    <ul className="hidden md:block">
        <li className="space-x-5 flex items-center">
        <Link href={"/"}><NavigationMenuDemo/></Link>
        <Link href={"/"}> On Sale</Link>
        <Link href={"/product"}>New Arrivals</Link>
        <Link href={"/"}>Brands</Link>
        </li>
    </ul> 
      {/*search input */}
      <div className="hidden md:block">
      <div  className="flex  justify-start items-center w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
      <IoSearchOutline className="text-xl ml-2"/>
      <input placeholder="search items" type="text" className="w-full ml-2 outline-none h-full rounded-[62px]   bg-[#F0F0F0] " />
      </div>
      </div>

      {/* cart */}
      <div className="flex items-center mr-7 space-x-5">
      <IoSearchOutline className="text-xl ml-2 md:hidden"/>
      <Link href={"/cart"}>
      <IoCartOutline className="text-xl ml-2 "/>
      </Link>
      <BsPersonCircle className="texl-2xl"/>
      </div>
                  
  </header>
  );
}








