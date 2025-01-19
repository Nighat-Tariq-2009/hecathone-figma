

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
        img_url:"/images/arrival1.png"
    },
    {
        title:"SKINNY FIT JEANS",
        price:"$120",
        id:2,
        old_price:"$120",
        img_url:"/images/arrival2.png"
    },
    {
         title:"CHECKERED SHIRT",
         id:3,
         price:"$120",
        img_url:"/images/arrival3.png"
        },
        {
         title:"SLEEVE STRIPED T-SHIRT",
         id:4,
            price:"$120",
         img_url:"/images/arrival4.png",
         old_price:"$200"
        
            },
            {
                title:"SHIRT WITH TAPE DETAILS",
                price:"$120",
                id:1,
                img_url:"/images/arrival1.png"
            },
            {
                title:"SKINNY FIT JEANS",
                price:"$120",
                id:2,
                old_price:"$120",
                img_url:"/images/arrival2.png"
            },
            {
                 title:"CHECKERED SHIRT",
                 id:3,
                 price:"$120",
                img_url:"/images/arrival3.png"
                },
                {
                 title:"SLEEVE STRIPED T-SHIRT",
                 id:4,
                    price:"$120",
                 img_url:"/images/arrival4.png",
                 old_price:"$200"
                
                    },
                    {
                        title:"SLEEVE STRIPED T-SHIRT",
                        id:4,
                           price:"$120",
                        img_url:"/images/arrival4.png",
                        old_price:"$200"
                       
                           },
]
let star = [<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>,<FaStar/>]
export default function Shirts(){
    return(
    // <div className="w-full h-full sm:h-[500px] mt-10 overflow-x-hidden">
    //     <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>

    //     <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-4  md:px-8 mt-10   ">
    //         {
    //             product.map((data) => {
    //                 return(
    //                     <div  key={data.id}>
    //                         <Link href={`/product/${data.id}`} >
    //                         <div className="w-full sm:w-[270px] h-[275px] bg-[#F0EEED] rounded-[20px]">
    //                             <Image src={data.img_url} alt={data.title} width={100} height={100} 
    //                             className="w-full h-full rounded-[20px]"></Image>
    //                         </div>
    //                         </Link>
    //                         <div>
    //                             <p className="text-lg mt-2 font-bold">{data.title}</p>
    //                             <p className="flex text-yellow-400">{star}</p>
    //                             <p className="font-bold mt-1">{data.price}<span className="text-gray-400 font-bold line-through">{data.old_price}</span></p>
                               
    //                         </div>
                          
    //                     </div>
    //                 )
    //             })

    //         }
    //     </div>


    // </div>


    <div className="w-full h-full sm:h-[500px] mt-10 ">
    <h1 className="text-3xl md:text-4xl font-bold text-center">NEW ARRIVALS</h1>

    <div className="flex flex-wrap justify-center items-center px-4 md:px-4 mt-10 gap-4">
        {
            product.map((data) => {
                return (
                    <div key={data.id} className="w-full md:w-[270px]">
                        <Link href={`/product/${data.id}`}>
                            <div className="w-full h-[275px] bg-[#F0EEED] rounded-[20px]">
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









