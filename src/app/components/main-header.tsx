import { ChevronDown, CircleUserRound, Search, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"




export default function MainHeader(){
    return(
        <main className="flex justify-center items-center p-3 max-w-screen-lg mx-auto px-6 ">
            <div className="flex flex-1 justify-between items-center p-3">
                {/* left side */}
                <div>
                    <Image src={"/images/logo.png"} width={126} height={18} alt="logo" />
                </div>
               
                <div className="flex justify-center items-center p-3 text-md">
                <Link href={""}>Shop</Link>
                <ChevronDown />   
                </div>

                 <div>
                    <ul>
                        <li  className="flex justify-center items-center p-3 gap-3 text-md ">
                            
                            <Link href="">Sale</Link>
                            <Link href="">New Arrivals</Link>
                            <Link href="">Brands</Link>
                        </li>
                    </ul>
                </div>

              </div>

                <div className="flex justify-between items-center p-3 flex-1">
                 {/* right side */}
                 <div className="relative flex items-center">
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
          <div className="flex justify-center items-center p-3 gap-5">
          <ShoppingCart />
          <CircleUserRound />
          </div>
            </div>
        </main>
            )
        }

//    shedcn ui

// export function SheetDemo() {
//     return (
//       <Sheet>
//         <SheetTrigger asChild>
//           {/* <Button variant="outline"><Menu /></Button> */}
//         </SheetTrigger>
//         <SheetContent>
//           <SheetHeader>
//             <SheetTitle>Edit profile</SheetTitle>
//             <SheetDescription>
//               Make changes to your profile here. Click save when you're done.
//             </SheetDescription>
//           </SheetHeader>
//           <div className="grid gap-4 py-4">
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="name" className="text-right">
//                 Name
//               </Label>
//               <Input id="name" value="Pedro Duarte" className="col-span-3" />
//             </div>
//             <div className="grid grid-cols-4 items-center gap-4">
//               <Label htmlFor="username" className="text-right">
//                 Username
//               </Label>
//               <Input id="username" value="@peduarte" className="col-span-3" />
//             </div>
//           </div>
//           <SheetFooter>
//             <SheetClose asChild>
//               <Button type="submit">Save changes</Button>
//             </SheetClose>
//           </SheetFooter>
//         </SheetContent>
//       </Sheet>
//     )
//   }




