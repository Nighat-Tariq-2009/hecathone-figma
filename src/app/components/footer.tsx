import { Facebook, Github, Instagram, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className=" max-w-screen-xl mx-auto overflow-x-hidden">
      <div className="max-w-screen-xl mx-auto mt-10 p-5 flex flex-col md:flex-row justify-center items-center gap-4 bg-black rounded-xl">
        {/* Left Side */}
        <div className="flex-1 md:pl-3">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white pl-2 md:pl-5 text-center md:text-left">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h1>
        </div>

        {/* Right Side */}
        <div className="flex-1 md:pl-64 ">
          <div className="relative flex items-center mb-4">
            <span className="absolute left-3 text-gray-500">
              <Mail className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Enter your email address"
              className="bg-[#F5F5F5] w-full max-w-xs p-4 rounded-full text-sm border border-gray-300 text-[12px] pl-10"
            />
          </div>
          <button className="bg-[#F5F5F5] w-full max-w-xs p-4 rounded-full text-sm border border-gray-300 text-[12px] flex justify-center items-center">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      {/* Main content */}

      <div className="flex flex-col items-center max-w-screen-2xl mx-auto bg-[#F0F0F0]">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 mt-10 p-5 w-full">
          {/* Logo and About Section */}
          <div className="w-full lg:w-1/4">
            <div className="p-2 lg:p-10 text-left lg:text-left">
              <div className="my-3">
                <Image
                  src="/images/logo.png"
                  width={126}
                  height={18}
                  alt="logo"
                />
              </div>
              <p className="text-sm font-normal mb-3">
                We have clothes that suit your style and which you are proud to
                wear. From women to men.
              </p>

              {/* Social Icons */}
              <div className="flex justify-start lg:justify-start gap-3 mt-10">
                {/* Twitter */}
                <div className="bg-white text-black rounded-full w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer">
                  <Link href="/">
                    <Twitter className="text-[12px]" />
                  </Link>
                </div>

                {/* Facebook */}
                <div className="bg-black text-white rounded-full w-9 h-9 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer">
                  <Link href="/">
                    <Facebook className="text-sm" />
                  </Link>
                </div>

                {/* Instagram */}
                <div className="bg-white text-black rounded-full w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer">
                  <Link href="/">
                    <Instagram className="text-sm" />
                  </Link>
                </div>

                {/* Github */}
                <div className="bg-white text-black rounded-full w-9 h-9 flex items-center justify-center hover:bg-black hover:text-white cursor-pointer">
                  <Link href="/">
                    <Github className="text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full lg:w-3/4">
            {/* >COMPANY */}
            <div>
              <h3 className="text-sm font-semibold font-Satoshi mb-2">
                COMPANY
              </h3>
              <p className="text-sm font-normal font-Satoshi mb-2">About</p>
              <p className="text-sm font-normal font-Satoshi mb-2">Feature</p>
              <p className="text-sm font-normal font-Satoshi mb-2">Works</p>
              <p className="text-sm font-normal font-Satoshi mb-2">Career</p>
            </div>
            {/* HELP */}
            <div>
              <h3 className="text-sm font-semibold font-Satoshi mb-2">HELP</h3>
              <p className="text-sm font-normal font-Satoshi mb-2">
                Customer Support
              </p>
              <p className="text-sm font-normal font-Satoshi mb-2">
                Delivery Details
              </p>
              <p className="text-sm font-normal font-Satoshi mb-2">
                Terms & Conditions
              </p>
              <p className="text-sm font-normal font-Satoshi mb-2">
                Privacy Policy
              </p>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="text-sm font-semibold font-Satoshi mb-2">FAQ</h3>
              <p className="text-sm font-normal font-Satoshi mb-2">Account</p>
              <p className="text-sm font-normal font-Satoshi mb-2">
                Manage Deliveries
              </p>
              <p className="text-sm font-normal font-Satoshi mb-2">Orders</p>
              <p className="text-sm font-normal font-Satoshi mb-2">Payments</p>
            </div>

            {/* RESOURCES */}
            <div>
              <h3 className="text-sm font-semibold font-Satoshi mb-2">
                RESOURCES
              </h3>
              <p className="text-sm font-normal font-Satoshi mb-2">
                Free eBooks
              </p>
              <p className="text-sm font-normal font-Satoshi mb-2">
                Development Tutorial
              </p>
              <p className="text-sm font-normal font-Satoshi mb-2">
                How to - Blog
              </p>
              <p className="text-sm font-normal font-Satoshi mb-2">
                Youtube Playlist
              </p>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full border-t border-gray-300 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 p-4">
            <p className="text-center md:text-left text-sm">
              nighat tariq © Made by nighat tariq, Designed by
            </p>
            <div>
              <Image
                src="/images/footer-img.png"
                width={300}
                height={50}
                alt="footer logo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
