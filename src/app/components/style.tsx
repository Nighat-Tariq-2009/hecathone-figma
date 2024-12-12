import Image from "next/image"
export default function Style(){
    return(
       <div className=" max-w-screen-xl mx-auto mt-10 ">
        <div className="w-full h-full bg-[#F0F0F0] rounded-xl flex flex-col justify-center items-center">
            {/* top container */}
            <div className="flex justify-center items-center p-8 w-full h-full">
                <h1 className="text-4xl font-bold font-Integral CF">BROWSE BY DRESS STYLE</h1>
            </div>
            <div className="w-full h-full flex justify-center items-center gap-2 mx-8 flex-col lg:flex-row  ">
            <Image src={"/images/style1.png"}  width={310} height={190} className="w-[310px] h-[190px] lg:w-[407px] lg:h-[280px] " alt="heroImage" />
            <Image src={"/images/style2.png"} width={310} height={190} className="w-[310px] h-[190px] lg:w-[684px] lg:h-[280px]" alt="heroImage" />
            </div>
            <div className=" w-full h-full flex justify-center items-center gap-2 mx-8 mt-2 mb-12 flex-col lg:flex-row ">
            <Image src={"/images/style3.png"} width={310} height={190} className="w-[310px] h-[190px] lg:w-[684px] lg:h-[280px]" alt="heroImage" />
            <Image src={"/images/style4.png"} width={310} height={190} className="w-[310px] h-[190px] lg:w-[407px] lg:h-[280px]" alt="heroImage" />
            </div>
        </div>
       </div>

  


    )
}