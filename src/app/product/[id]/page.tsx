"use client"
import Link from "next/link"
import { FaCheck, FaPlus, FaStar } from "react-icons/fa"
import Image from "next/image"
import { useParams } from "next/navigation"
import { FiMinus } from "react-icons/fi"
import AllReviews from "@/app/components/all-reviews"
import LikeShirts from "@/app/components/like-shirts"


interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string,
    img1:string,
    img2:string,
    img3:string,
}
let product:Iproducts[] =  [
    {
        title:"SHIRT WITH TAPE DETAILS",
        price:"$120",
        id:1,
        img_url:"/images/arrival1.png",
        img1:"/images/detail1.png",
        img2:"/images/detail2.png",
        img3:"/images/detail4.png",
    },
    {
        title:"SKINNY FIT JEANS",
        price:"$120",
        id:2,
        old_price:"$120",
        img_url:"/images/arrival2.png",
        img1:"/images/arrival2.png",
        img2:"/images/arrival2.png",
        img3:"/images/arrival2.png",
    },
    {
         title:"CHECKERED SHIRT",
         id:3,
         price:"$120",
        img_url:"/images/arrival3.png",
        img1:"/images/arrival3.png",
        img2:"/images/arrival3.png",
        img3:"/images/arrival3.png",
        },
        {
         title:"SLEEVE STRIPED T-SHIRT",
         id:4,
         price:"$120",
         img_url:"/images/arrival4.png",
         old_price:"$200",
         img1:"/images/arrival4.png",
         img2:"/images/arrival4.png",
         img3:"/images/arrival4.png",
        
            }
]
let star = [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>]

export default function pro_Detail(){
    const params = useParams();
    const id = params?.id
    const items = product.find((item)=>item.id === Number(id))
    if(!items){
        return<h1>Product not found</h1>

    }

    return(
         <div className="max-w-screen-xl m-auto">
           <div>
              {/*   top box  */}
                <div className="flex lg:justify-start md:justify-center items-center" >
                    <Image src={"/images/nav.png"} alt="nav-image" width={250} height={250} className="mt-10 ml-4" />
                </div>


   {/* <div className="flex flex-col lg:flex-row md:flex-col justify-center sm:justify-evenly sm:mt-10 p-5 sm:p-0 max-w-screen-xl m-auto "> */}
   <div className="flex flex-col lg:flex-row md:flex-col justify-center sm:mt-10  sm:p-0  ">
            {/* left */}
            <div className="flex flex-col sm:flex-row md:justify-center items-center md:gap-10">
              <div className=" flex sm:flex-col  justify-between items-center w-full sm:w-[152px] order-2 sm:order-1">
                {/* images */}
                <Image src={items.img1} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px]" alt="productdetaile" width={100} height={100}></Image>
                <Image src={items.img2} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetaile" width={100} height={100}></Image>
                <Image src={items.img3} className=" w-[100px] sm:w-full h-[100px] sm:h-[150px] sm:mt-3" alt="productdetaile" width={100} height={100}></Image>
              </div>
               {/* mid div */}
               <div className="w-full sm:w-[444px] h-[260px] sm:h-[500px] mt-5 sm:mt-0 order-1 sm:order-2">
               <Image src={items.img3} alt="productdetaile" className="w-full h-[95%]" width={100} height={100}></Image>
               </div>
               </div>
               {/* right div */}
               <div className=" w-full sm:w-[600px] h-[500px] mt-3 order-3 lg:ml-8 md:ml-40 sm:ml-10">
                   <h1 className="text-2xl md:text-3xl font-bold">One Life Graphic T-shirt</h1>
                   <div className="flex text-yellow-400">
                      {star}
                   </div>
                   <p className="font-bold mt-1">{items.price} <span>{items.old_price}</span> </p>
                   <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                   {/* select color */}
                   <div className=" mt-5">
                    <p className="text-gray-500">Select Colors</p>
                    <div className="flex space-x-3 mt-2">
                    <div className="w-[37px] h-[37px] bg-[#4F4631] rounded-full  flex justify-center items-center"><FaCheck className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
                      <div className="w-[37px] h-[37px] bg-[#314F4A] rounded-full flex justify-center items-center"><FaCheck className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
                      <div className="w-[37px] h-[37px] bg-[#31344F] rounded-full flex justify-center items-center"><FaCheck className="text-white opacity-0  hover:opacity-100 cursor-pointer"/></div>
                    </div>
                   </div>
                   {/* Choose Size */}
                   <div className="mt-4">
                    <p className="text-gray-500">Choose Size</p>
                    <div className="flex space-x-3 mt-2">  
                    <div className="w-[80px]   h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Small</div>
                      <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Medium</div>
                      <div className="w-[80px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">Large</div>
                      <div className="w-[90px] h-[40px] flex justify-center items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">X-Large</div>
                    </div>
                   </div>
                    {/* BTNS */}
                   <div className="flex justify-start items-center mt-7 space-x-4">
                   <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">
                   <FiMinus />
                    1
                    <FaPlus />
                   </div>
                   <button className="bg-black text-white w-[300px] md:w-[200px] rounded-md p-3">Add to Cart</button>
               </div>
               </div>

                 </div>

            </div>

            <div className="flex justify-around items-center mt-10">
                <h3 className="text-gray-400 text-sm font-medium">Product Details</h3>
                <h3>Rating & Reviews</h3>
                <h3 className="text-gray-400">FAQs</h3>
            </div>

            <hr className="bg-gray-400 mb-10 mt-5" />
            < AllReviews/>
            <LikeShirts/>
        </div> 
    )
}