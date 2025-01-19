import { Minus, Plus } from "lucide-react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";

interface ICart{
    imageurl:string,
    title:string,
    id:number,
    size:string,
    color:string,
    price:string,
}

const cartItem:ICart[] =[
    {
    imageurl:"/images/like2.png",
    title:"Gradient Graphic T-shirt",
    id:1,
    size:"Large",
    color:"white",
    price:"$120",
  },
  {
    imageurl:"/images/arrival3.png",
    title:"CHECKERED SHIRT",
    id:2,
    size:"Medium",
    color:"Red",
    price:"$180",
  },
  {
    imageurl:"/images/arrival2.png",
    title:"SKINNY FIT JEANS",
    id:3,
    size:"Large",
    color:"Blue",
    price:"$240",
  },
]

export default function Cart(){
    return(
        <div className="flex justify-center items-center gap-3">
            {/* left div */}
            <div  className="w-full h-full md:w-[700px] md:h-[500px] rounded-[20px] border mt-4">
                {
                    cartItem.map((item) =>{
                        return(
                           <div  key={item.id} className="flex justify-between mt-4 p-4 border-b">
                             <div className="flex gap-3">
                            <Image src={item.imageurl} alt={item.title} width={100} height={100} />
                            <div>
                            <h3 className="font-bold">{item.title}</h3>
                            <p className="text-sm">{item.size}</p>
                            <p className="text-sm">{item.color}</p>
                            <p className="font-bold">{item.price}</p>
                           </div>
                           </div>
                             {/* right side */}
                        <div className="flex flex-col justify-between items-center space-y-5">
                        <RiDeleteBinFill className="text-red-500"/>
                            <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-white">
                                <Minus/>
                                1
                                <Plus/>

                            </div>
                        </div>
                        </div>
                           
                        )
                    })
                }

            </div>
            {/* right div */}
            <div className="w-full h-full md:w-[500px] md:h-[450px] border rounded-[20px]  p-5 gap-y-10">
                <div className="w-[90%] space-y-2">
                    <h1 className="text-xl font-bold">Order Summary</h1>
                    <p className="flex justify-between">Subtotal <span>$565</span></p>
                    <p className="flex justify-between">Subtotal <span className="text-red">-$113</span></p>
                    <p className="flex justify-between border-b">Subtotal <span>$15</span></p>
                    <p className="flex justify-between">Total <span>$467</span></p>

                    <div>
                        <input className="bg-[#F0F0F0] py-2 px-5 rounded-[16px] text-gray-600 outline" placeholder="Add promo code"/>
                        <button className="ml-1 bg-black text-white px-6 py-2 rounded-[62px]">Apply</button>
                    </div>
                    <button className=" w-full py-2 bg-black text-white rounded-[62px] relative mt-5">Go To Checkout
                    <FaArrowRight className="absolute top-3 right-32 " />
                    </button>
                </div>

            </div>
        </div>
    )
}