import {  Facebook, Github, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";


export default function Footer(){
    return(

        <div className=" relative">
            <div className="max-w-screen-lg mx-auto mt-10 p-5 flex justify-center   items-center gap-4 bg-black rounded-lg">
               {/* Left Side - First Child */}
                <div className=" flex flex-1">
                    <h1 className="text-4xl font-extrabold text-white pl-5 ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                </div>
                 {/* Right Side - Second Child */}
                <div className="  flex-1  ">
                <div className="relative flex items-center mb-4">
              
                <span className="absolute left-3 text-gray-500 ">
                <Mail className="w-4 h-4" />
               
                </span>
               <input
               type="text"
               placeholder="Enter your email address"
               className="bg-[#F5F5F5]  p-4 rounded-full w-[350px] h-[18px] text-sm border border-gray-300 text-[12px] font-normal pl-10"
               />
               </div>

                <div >
                <button
               className="bg-[#F5F5F5] pl-10 p-4 rounded-full w-[350px] h-[18px] text-sm border border-gray-300 text-[12px] font-normal flex justify-center items-center "
               >
               Subscribe to Newsletter
               </button>
               </div>
              </div>
            </div>










            {/* Main footer */}
          <div className="w-full h-full flex justify-center flex-col  items-center   bg-[#F0F0F0] ">
            <div className="flex justify-center  items-center gap-4 mt-10  p-5">
            <div className="flex-1 gap-4">
            <div className="p-14 ">
               <div className="my-3">
               <Image src={"/images/logo.png"} width={126} height={18} alt="logo" />
               </div>
               <p className="text-sm font-normal mb-3 ">
               We have clothes that suits your style 
               and which you’re proud to wear.
                From women to men.
               </p>
               
              
        <div className="flex gap-3 mt-10">
      {/* Twitter */}
      
      <div className="bg-white text-black rounded-full w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer">
        <Link href={"/"}><Twitter className="text-[12px]" /></Link>
      </div>

      {/* Facebook */}
      <div className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center  hover:bg-white hover:text-black cursor-pointer">
        <Link href={"/"}><Facebook className="text-sm" /></Link>
      </div>

            {/* Instagram */}
            <div className="bg-white text-black rounded-full w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer">
        <Link href={"/"}><Instagram className="text-sm" /></Link>
      </div>

         {/* Github */}
         <div className="bg-white text-black rounded-full w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer">
        <Link href={"/"}><Github className="text-sm" /></Link>
      </div>
      
        </div>
      </div>
      </div>


      <div className="flex justify-between items-center gap-12 flex-3">

    {/* Company */}
     <div className="flex-1 justify-center items-center">
        <h3 className="text-sm font-medium font-Satoshi mb-2">COMPANY</h3>
        <p className="text-sm font-normal font-Satosh mb-2">About</p>
        <p className="text-sm font-normal font-Satosh mb-2">Feature</p>
        <p className="text-sm font-normal font-Satosh mb-2">Works</p>
        <p className="text-sm font-normal font-Satosh mb-2">Career</p>
     </div>
     {/* Help */}
     <div className="flex-2 justify-center items-center">
        <h3 className="text-sm font-medium font-Satoshi mb-2">HELP</h3>
        <p className="text-sm font-normal font-Satosh mb-2">Customer Support</p>
        <p className="text-sm font-normal font-Satosh mb-2">Delivery Details</p>
        <p className="text-sm font-normal font-Satosh mb-2">Terms & Conditions</p>
        <p className="text-sm font-normal font-Satosh mb-2">Privacy Policy</p>
     </div>

     {/* Faq */}
     <div className="flex-1 justify-center items-center">
        <h3 className="text-sm font-medium font-Satoshi mb-2">FAQ</h3>
        <p className="text-sm font-normal font-Satosh mb-2"> Account</p>
        <p className="text-sm font-normal font-Satosh mb-2">Manage Deliveries</p>
        <p className="text-sm font-normal font-Satosh mb-2">Orders</p>
        <p className="text-sm font-normal font-Satosh mb-2">Payments</p>
     </div>

     {/*Resources  */}
     <div className="flex-2 justify-center items-center">
        <h3 className="text-sm font-medium font-Satoshi mb-3">RESOURCES</h3>
        <p className="text-sm font-normal font-Satosh mb-2"> Free eBooks</p>
        <p className="text-sm font-normal font-Satosh mb-2">Development Tutorial</p>
        <p className="text-sm font-normal font-Satosh mb-2">How to - Blog</p>
        <p className="text-sm font-normal font-Satosh mb-2">Youtube Playlist</p>
    </div>
    </div>
    </div>


   <div>
    <hr  />
 <div className="flex justify-between  items-center gap-8  p-3">
    <div>
        <p>nighat tariq © Made by nighat tariq, Designed by</p>
    </div>
    <div>
    <Image src={"/images/footer-img.png"} width={300} height={50} alt="logo" /> 
    </div>
 </div>
 </div>


 </div>
 </div>
            
    )
}
