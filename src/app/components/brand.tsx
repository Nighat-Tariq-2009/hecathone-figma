import Image from "next/image"
export default function Brand(){
    return(
        <div className="flex justify-center items-center  max-w-screen-xl mx-auto  ">
            <div className=" w-full h-full flex justify-center items-center  bg-black flex-wrap gap-8  md:gap-18 lg:gap-28 p-3">
               
                <Image src={"/images/vers.png"} width={120} height={33} alt="logo" />
                
                <Image src={"/images/zara.png"} width={80} height={33} alt="logo" />
              
                <Image src={"/images/gucci.png"} width={120} height={33} alt="logo" />
               
                <Image src={"/images/prada.png"} width={120} height={33} alt="logo" />
               
                <Image src={"/images/calvin.png"} width={120} height={33} alt="logo" />
            </div>
        </div>
    )
}