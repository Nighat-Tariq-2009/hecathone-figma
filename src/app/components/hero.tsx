import Image from "next/image"
export default function HeroSection(){
    return(

        <main className="flex justify-center items-center p-3 max-w-screen-lg mx-auto px-4 ">
            <div className="w-full h-full flex justify-center items-center gap-4">
                {/* left side */}
            <div className="flex flex-1 flex-col px-5">
                <div>
                    <h2 className="text-5xl font-extrabold mb-2 w-[315] h-[93] ">FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                    <p className="text-sm font-normal mb-4  ">Browse through our diverse range of meticulously crafted garments, 
                        designed to bring out your individuality and cater to your sense of style.</p>
                        <button className="text-sm font-normal px-9 py-2 bg-black text-white rounded-full">Shop Now</button>
                </div>
                <div className="mt-5">
                    <div className="flex flex-wrap gap-8">
                    <Image src={"/images/brand.png"} width={103} height={48} alt="heroImage" />
                    <Image src={"/images/product.png"} width={103} height={48} alt="heroImage" />
                    <Image src={"/images/customer.png"} width={103} height={48} alt="heroImage" />
                    </div>

                </div>
                </div>

                {/* right side */}

                <div className="flex flex-1">
                    <Image src={"/images/hero-img.png"} width={1400} height={500} alt="heroImage" />
                </div>
            </div>
        </main>
    )
}