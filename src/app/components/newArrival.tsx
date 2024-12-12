
import { Star } from 'lucide-react';
import Image from 'next/image';

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
config.autoAddCss = false; // Disable auto CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";


export default function NewArrival() {
    return (
      <main id="newArrival" className="max-w-screen-xl mx-auto overflow-hidden">
       
        <div className="w-full h-full flex mt-12 gap-2">

          <div className="w-full h-full">
            {/* Top */}
            <div className="flex justify-center items-center">
              <h2 className="text-5xl font-bold mt-5 font-Integral CF">NEW ARRIVALS</h2>
            </div>
  
            {/* Products */}
            <div className="w-full h-full flex mt-12 gap-2 pl-6 overflow-x-auto scrollbar-none md:overflow-x-visible">
              {/* Product 1 */}
              <div className="flex-shrink-0">
                <div className="bg-[#F0EEED] flex justify-center items-center rounded-2xl mb-6 ">
                  <Image
                    src={"/images/arrival1.png"}
                    width={295}
                    height={298}
                    className="rounded-2xl w-[198px] h-[200px] lg:w-[295px] lg:h-[298px]"
                    alt="gaming"
                    
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">T-SHIRT WITH TAPE DETAILS</span>
                  <div className="mt-2 flex">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500 text-sm" />
                  </div>
                  <p className="flex gap-4">
                    <span className="font-semibold text-red-500 mt-2 mb-2">$120</span>
                  </p>
                </div>
              </div>
  
              {/*  Product 2 */}
  
              <div className="flex-shrink-0">
                <div className="bg-[#F0EEED] flex justify-center items-center mb-6 rounded-2xl ">
                  <Image
                    src={"/images/arrival2.png"}
                    width={295}
                    height={298}
                    className="rounded-2xl w-[198px] h-[200px] lg:w-[295px] lg:h-[298px]"
                    alt="gaming"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">SKINNY FIT JEANS</span>
                  <div className="mt-2 flex">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500 text-sm" />
                  </div>
                  <p className="flex gap-4">
                    <span className="font-semibold text-red-500 mt-2 mb-2">$240</span>
                    <del className="text-gray-400 mt-2 mb-2">$260</del>
                  </p>
                </div>
              </div>

                {/* Product 3 */}
                <div className="flex-shrink-0">
                <div className="bg-[#F0EEED] flex justify-center items-center rounded-2xl mb-6 ">
                  <Image
                    src={"/images/arrival3.png"}
                    width={295}
                    height={298}
                    className="rounded-2xl w-[198px] h-[200px] lg:w-[295px] lg:h-[298px]"
                    alt="gaming"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">T-SHIRT WITH TAPE DETAILS</span>
                  <div className="mt-2 flex">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500 text-sm" />
                  </div>
                  <p className="flex gap-4">
                    <span className="font-semibold text-red-500 mt-2 mb-2">$120</span>
                  </p>
                </div>
              </div>

                {/* Product 4 */}
                <div className="flex-shrink-0">
                <div className="bg-[#F0EEED] flex justify-center items-center rounded-2xl mb-6 ">
                  <Image
                    src={"/images/arrival4.png"}
                    width={295}
                    height={298}
                    className="rounded-2xl w-[198px] h-[200px] lg:w-[295px] lg:h-[298px]"
                    alt="gaming"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm">T-SHIRT WITH TAPE DETAILS</span>
                  <div className="mt-2 flex">
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStar} className="text-yellow-500 text-sm" />
                    <FontAwesomeIcon icon={faStarHalf} className="text-yellow-500 text-sm" />
                  </div>
                  <p className="flex gap-4">
                    <span className="font-semibold text-red-500 mt-2 mb-2">$120</span>
                  </p>
                </div>
              </div>


            </div>
          </div>
        </div>
  
        {/* View All Button */}
        <div className="w-full flex justify-center items-center mt-10">
          <button className="py-2 px-11 border rounded-full m-4">View All</button>
        </div>
  
        <hr />
      </main>
    );
  }
  
