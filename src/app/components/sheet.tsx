"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import Link from "next/link";
import { TiThMenu } from "react-icons/ti"
import { NavigationMenuDemo } from "./navigationMenu"

const SHEET_SIDES = ["left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid  gap-2">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden">
            <Button >
              <TiThMenu />
            </Button>
            
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>Shop.co</SheetTitle>
              
            </SheetHeader>
     

            {/* navbar */}
        <ul className=" ">
        <li className="grid grid-cols-1 ">
        <Link href={""}><NavigationMenuDemo/></Link>
        <Link className="ml-3" href={"#sale"}>Sale</Link>
        <Link className="ml-3" href={"#newArrival"}>New Arrivals</Link>
        <Link className="ml-3" href={"/casual"}>Casual</Link>
        </li>
        </ul> 
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}




// "use client";

// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetDescription,
//   SheetFooter,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { TiThMenu } from "react-icons/ti";

// const SHEET_SIDES = ["left"] as const;

// type SheetSide = (typeof SHEET_SIDES)[number];

// export function SheetSide() {
//   return (
//     <div className="grid grid-cols-2 gap-2">
//       {SHEET_SIDES.map((side) => (
//         <Sheet key={side}>
//           <SheetTrigger asChild>
//             <div className="flex items-center space-x-2">
//               <Button variant="outline">{side}</Button>
//               <TiThMenu />
//             </div>
//           </SheetTrigger>
//           <SheetContent side={side}>
//             <SheetHeader>
//               <SheetTitle>Edit profile</SheetTitle>
//               <SheetDescription>
//                 Make changes to your profile here. Click save when you're done.
//               </SheetDescription>
//             </SheetHeader>
//             <div className="grid gap-4 py-4">
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="name" className="text-right">
//                   Name
//                 </Label>
//                 <Input id="name" value="Pedro Duarte" className="col-span-3" />
//               </div>
//               <div className="grid grid-cols-4 items-center gap-4">
//                 <Label htmlFor="username" className="text-right">
//                   Username
//                 </Label>
//                 <Input
//                   id="username"
//                   value="@peduarte"
//                   className="col-span-3"
//                 />
//               </div>
//             </div>
//             <SheetFooter>
//               <SheetClose asChild>
//                 <Button type="submit">Save changes</Button>
//               </SheetClose>
//             </SheetFooter>
//           </SheetContent>
//         </Sheet>
//       ))}
//     </div>
//   );
// }
