
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { X } from "lucide-react";


// header component
export default function Header(){
    return(
        <div className="max-w-screen-xl mx-auto ">
            <div className="w-full h-full flex justify-between items-center md:pl-14 bg-black text-white text-sm p-3">
                {/* left side */}
                <div className="flex ">
                <p className="text-sm font-light">Sign up and get 20% off to your first order.</p>
                <Link href={""} className="underline text-sm font-light"> Sign Up Now</Link>
                </div>
               
                {/* right side */}
                <div className="hidden md:block pl-10">
                <X />
                 
                </div>
            </div>
        </div>
    )
}