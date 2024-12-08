
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { X } from "lucide-react";


// header component
export default function Header(){
    return(
        <div className="max-w-screen-lg mx-auto ">
            <div className="w-full h-full flex justify-evenly bg-black text-white text-sm p-2">
                {/* left side */}
                <div className="flex gap-4">
                <p>Sign up and get 20% off to your first order.</p>
                <Link href={""} className="underline"> Sign Up Now</Link>
                </div>
               
                {/* right side */}
                <div>
                <X />
                 
                </div>
            </div>
        </div>
    )
}