import {  ChevronDown, CircleUserRound, Menu, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
 




export default function MainHeader(){
    return(
        <main className="flex justify-center items-center  max-w-screen-xl mx-auto px-2 ">
            <div className="flex flex-1  justify-between items-center p-2">


            <Sheet>
  <SheetTrigger asChild className="lg:hidden">
    <Button variant="outline" className="p-2 rounded-md border-none hover:bg-gray-200 focus:ring-2 focus:ring-gray-400">
      <Menu className="text-gray-600 border-none" />
    </Button>
  </SheetTrigger>
  <SheetContent className="bg-white shadow-lg rounded-lg p-4">
    <ul className="space-y-4">
      <li className="flex flex-col items-center gap-4 text-gray-700 font-medium text-base">
        <Link 
          href=""
          className="hover:text-blue-500 transition duration-200"
        >
          Sale
        </Link>
        <Link 
          href="#newArrival"
          className="hover:text-blue-500 transition duration-200"
        >
          New Arrivals
        </Link>
        <Link 
          href=""
          className="hover:text-blue-500 transition duration-200"
        >
          Brands
        </Link>
      </li>
    </ul>
  </SheetContent>
</Sheet>

                {/* left side */}
                <div className="flex-shrink-0">
                    <Image src={"/images/logo.png"} width={100} height={100} alt="logo" />
                </div>
               
                <div className=" hidden lg:flex justify-center items-center p-3 text-md  ">
                <Link href={""}>Shop</Link>
                <ChevronDown />   
                </div>

                 <div>
                    <ul className="hidden lg:block">
                        <li  className="flex justify-center items-center p-3 gap-3 text-sm ">
                        
                             <Link href={""}>Shop </Link>
                            <Link href="">Sale</Link>
                            {/* <Link href="#newArrival">New Arrivals</Link> */}
                 
                            <Link href="">Brands</Link>
                        </li>
                    </ul>
                   </div>

              </div>

             <div className="flex justify-between  items-center md:pl-8 p-2 flex-1">
                 {/* right side */}
                 <div className="lg:relative lg:flex items-center hidden   ">
             {/* Input Field with Search Icon */}
             <span className="absolute left-3 text-gray-500">
               <Search className="w-4 h-4" />
             </span>
             <input
               type="text"
               placeholder="Search for product"
               className="bg-[#F5F5F5] pl-10 p-4 rounded-full w-[350px] h-[18px] text-sm border border-gray-300 text-[12px] font-normal"
              />
          </div>
          <div className="flex  justify-end items-center  gap-2 w-full">
          <Search className=" lg:hidden"  />
          <ShoppingCart />
          <CircleUserRound />



          </div>
         </div>
        </main>
            )
        }








