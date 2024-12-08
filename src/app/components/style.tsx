import Image from "next/image"
export default function Style(){
    return(
       <div className=" max-w-screen-lg mx-auto mt-10 ">
        <div className="bg-[#F0F0F0] rounded-xl flex flex-col justify-center items-center">
            {/* top container */}
            <div className="flex justify-center items-center p-8 w-[687] h-[58]">
                <h1 className="text-4xl font-bold font-Integral CF">BROWSE BY DRESS STYLE</h1>
            </div>
            <div className="flex justify-center items-center gap-2 mx-8 ">
            <Image src={"/images/style1.png"} width={407} height={289} alt="heroImage" />
            <Image src={"/images/style2.png"} width={684} height={289} alt="heroImage" />
            </div>
            <div className="flex justify-center items-center gap-2 mx-8 mt-2 mb-8 ">
            <Image src={"/images/style3.png"} width={684} height={289} alt="heroImage" />
            <Image src={"/images/style4.png"} width={407} height={289} alt="heroImage" />
            </div>
        </div>
       </div>

  


    )
}