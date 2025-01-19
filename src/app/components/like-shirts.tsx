
import { FaStar } from "react-icons/fa"
import Image from "next/image"

interface Iproducts{
    title:string,
    price:string,
    id:number,
    rating?:string,
    old_price?:string,
    img_url:string
}
let product:Iproducts[] =  [
    {
        title:"Polo with Contrast Trims",
        price:"$212",
        id:1,
        old_price:"$242",
        img_url:"/images/like1.png"
    },
    {
        title:"Gradient Graphic T-shirt",
        price:"$145",
        id:2,
        img_url:"/images/like2.png"
    },
    {
         title:"Polo with Tipping Details",
         id:3,
         price:"$180",
        img_url:"/images/like3.png"
        },
        {
         title:"Black Striped T-shirt",
         id:4,
            price:"$120",
         img_url:"/images/like4.png",
         old_price:"$150"
        
            }
]
let star = [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>]
export default function likeShirts(){
    return(
    <div className="w-full h-full sm:h-[500px] mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>

        <div className="flex lg:justify-center items-center  lg:gap-8 gap-6 overflow-x-auto px-8 mt-14 no-scrollbar">
            {
                product.map((data) => {
                    return(
                        <div  key={data.id} className="flex-shrink-0">
                           
                            <div className="w-[270px] h-[275px] bg-[#F0EEED] rounded-[20px]">
                                <Image src={data.img_url} alt={data.title} width={100} height={100} 
                                className="w-full h-full rounded-[20px]"></Image>
                            </div>
                           
                            <div>
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                                <p className="flex text-yellow-400">{star}</p>
                                <p className="font-bold mt-1">{data.price}<span className="text-gray-400 font-bold line-through">{data.old_price}</span></p>
                               
                            </div>
                          
                        </div>
                    )
                })

            }
        </div>


    </div>
    )

}



