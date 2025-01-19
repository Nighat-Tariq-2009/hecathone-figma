import Link from "next/link"
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
        title:"SHIRT WITH TAPE DETAILS",
        price:"$120",
        id:1,
        img_url:"/images/top1.png"
    },
    {
        title:"SKINNY FIT JEANS",
        price:"$120",
        id:2,
        old_price:"$120",
        img_url:"/images/top2.png"
    },
    {
         title:"CHECKERED SHIRT",
         id:3,
         price:"$120",
        img_url:"/images/top3.png"
        },
        {
         title:"SLEEVE STRIPED T-SHIRT",
         id:4,
         price:"$120",
         img_url:"/images/top4.png",
         old_price:"$200"
        
            }
]
let star = Array(5).fill(null).map((_, index) => <FaStar key={index} />);
export default function Top_sell(){
    return(
    <div className="w-full h-full sm:h-[500px] mt-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">TOP SELLING</h1>

        <div className="flex lg:justify-center items-center  lg:gap-8 gap-6 overflow-x-auto px-8 mt-14 no-scrollbar">
            {
                product.map((data) => {
                    return(
                        <div  key={data.id} className="flex-shrink-0">
                            <Link href={`/product/${data.id}`}>
                            <div className="w-[270px] h-[275px] bg-[#F0EEED] rounded-[20px]">
                                <Image src={data.img_url} alt={data.title} width={100} height={100} 
                                className="w-full h-full rounded-[20px]"></Image>
                            </div>
                            </Link>
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