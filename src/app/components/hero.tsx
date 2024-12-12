import Image from "next/image"
export default function HeroSection(){
    return(

        <main className="flex justify-center items-center p-3 max-w-screen-xl mx-auto px-4 overflow-hidden bg-[#F2F0F1]">
            <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-4 ">
                {/* left side */}
            <div className="flex flex-1 flex-col p-2 md:p-10  py-10  gap-6 bg-[#F2F0F1]">
                <div>
                    <h2 className="text-4xl font-bold mb-2 font-Integral CF  md:pr-10">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                    <p className="text-sm font-normal mb-4  md:pr-36">Browse through our diverse range of meticulously crafted garments, 
                        designed to bring out your individuality and cater to your sense of style.</p>
                        <button className="text-sm font-normal px-36 py-2 md:px-9 md:py-2 bg-black text-white rounded-full">Shop Now</button>
                </div>
                <div className="mt-5">
                    <div className="flex justify-center md:justify-start items-center flex-wrap gap-8">
                    <Image src={"/images/brand.png"} width={103} height={48} alt="heroImage" />
                    <Image src={"/images/product.png"} width={103} height={48} alt="heroImage" />
                    <Image src={"/images/customer.png"} width={103} height={48} alt="heroImage" />
                    </div>

                </div>
                </div>

                {/* right side */}  

                <div className="flex flex-1 relative">
                    <Image src={"/images/hero-img.png"} width={500} height={500} alt="heroImage" />

                 {/* Left Star */}
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2  custom-spin">
      <Image src={"/images/vector1.png"} width={56} height={56} alt="heroImage" />
      </div>
      {/* Right Star */}
      <div className="absolute right-5 top-[10%] transform -translate-y-1/2  custom-spin">
      <Image src={"/images/vector1.png"} width={104} height={104} alt="heroImage" />
      </div>


                </div>
            </div>
        </main>
    )
}