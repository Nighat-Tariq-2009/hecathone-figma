
import { Star } from 'lucide-react';
import Image from 'next/image';

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
config.autoAddCss = false; // Disable auto CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";



export default function TopSell(){
    return(
        <main className=" max-w-screen-lg mx-auto mt-10 ">
        <div className="w-full h-full flex justify-center items-center mt-10">
            <div className="w-full h-full ">
                {/* top */}
                <div className="flex justify-center items-center">
                    <h2 className="text-5xl font-bold mt-5 font-Integral CF">TOP SELLING</h2>
                </div>

                {/* products */}
                {/* container boxes */}
                <div className="flex justify-between mt-7 flex-wrap gap-1">
                     <div>
                     <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
                        <Image src={"/images/top1.png"} width={150} height={100} alt="gaming" />
                        </div>
                        {/* title */}
                        <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>VERTICAL STRIPED SHIRT</span>
                            

                           <div className='mt-2 flex '>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm " />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500 text-sm" />
                           </div>
                           <p className='flex gap-4'>
                            <span className='font-semibold text-red-500 mt-2 mb-2'>$120</span>
                            </p>
                           
                           
                        </div>
                     </div>
                     <div>
                    <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
                        <Image src={"/images/top2.png"} width={150} height={100} alt="gaming" />
                        </div>
                         {/* title */}
                         <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>COURAGE GRAPHIC T-SHIRT</span>
                            <div className='mt-2 flex '>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm " />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500 text-sm" />
                           </div>
                            <p className='flex gap-4'>
                            <span className='font-semibold text-red-500 mt-2 mb-2'>$240</span>
                            <del className="text-gray-400 mt-2 mb-2">$260</del>
                            </p>
                        </div>
                        </div>
                        <div>

                      <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
                        <Image src={"/images/top3.png"} width={150} height={100} alt="gaming" />
                        </div>

                         {/* title */}
                         <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>LOOSE FIT BERMUDA SHORTS</span>
                            <div className='mt-2 flex '>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm " />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500 text-sm" />
                           </div>
                            <p className='flex gap-4'>
                            <span className='font-semibold text-red-500 mt-2 mb-2'>$180</span>
                         
                            </p>
                        </div>
                        </div>


                        <div>
                        <div className="w-[200px] h-[170px] bg-[#F0EEED] flex justify-center items-center">
                        <Image src={"/images/top4.png"} width={150} height={100} alt="gaming" />
                        </div>

                         {/* title */}
                         <div className='flex flex-col'>
                            <span className='font-semibold text-sm'>FADED SKINNY JEANS</span>
                            <div className='mt-2 flex '>
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm " />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                            <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500 text-sm" />
                           </div>
                            <p className='flex gap-4'>
                            <span className='font-semibold text-red-500 mt-2 mb-2'>$130</span>
                            <del className="text-gray-400 mt-2 mb-2">$160</del>
                            </p>
                        </div>
                        </div>
                </div>
                <div className="w-full flex justify-center items-center mt-10">
              <button className="py-2 px-11 border rounded-full m-4">View All</button>
              </div>

            </div>
        </div>
       
        

        </main>
        
    )
}