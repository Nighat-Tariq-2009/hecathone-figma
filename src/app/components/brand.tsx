import Image from "next/image"
export default function Brand(){
    return(
        <div className="flex justify-center items-center  max-w-screen-lg mx-auto  ">
            <div className=" w-full h-full flex justify-evenly items-center  bg-black flex-wrap p-6">
               
                <Image src={"/images/vers.png"} width={120} height={33} alt="logo" />
                
                <Image src={"/images/zara.png"} width={80} height={33} alt="logo" />
              
                <Image src={"/images/gucci.png"} width={120} height={33} alt="logo" />
               
                <Image src={"/images/prada.png"} width={120} height={33} alt="logo" />
               
                <Image src={"/images/calvin.png"} width={120} height={33} alt="logo" />
            </div>
        </div>
    )
}