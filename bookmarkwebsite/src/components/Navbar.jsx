import { useState } from "react";
import hamburger from "../../images/icon-hamburger.svg";
import bookmarkLogo from "../../images/logo-bookmark.svg"
import { Menu , X} from 'lucide-react'

export default function Navbar(){

    const [mobileToggle, setMobileToggle]= useState(false)

    return <nav className="top-0 py-12" >
        <div className=" container text-xl px-4 mx-auto  " >
            <div className="flex justify-between items-center" >
                <div className=" z-30 flex items-center shrink-0 " >
                    <img  src={bookmarkLogo} alt="" />
                </div>
                <div className="hidden items-center  md:flex space-x-12" >
                    
                    <a className=" tracking-widest text-gray-500 hover:text-[#fa5757]" >FEATURES</a>
                    <a  className=" tracking-widest text-gray-500 hover:text-[#fa5757]" >DOWNLOAD</a>
                    <a  className=" tracking-widest text-gray-500 hover:text-[#fa5757]" >FAQ</a>
                    
                    <button className=" shadow-2xl py-1 rounded-md px-8 border-2 text-white hover:text-[#fa5757] border-[#fa5757] hover:bg-white  bg-[#fa5757]" >Login</button>
                </div>
                    <button onClick={()=>{setMobileToggle(!mobileToggle)}}  className=" z-30 md:hidden flex" >{mobileToggle? <X/> : <Menu/> }</button>

            </div>

            {mobileToggle && <div className=" top-0 right-0 h-full w-full bg-gray-200 md:hidden fixed z-20 opacity-90 flex flex-col items-center mx-auto pt-36 gap-5    " >

                <a className=" tracking-widest text-gray-500 hover:text-[#fa5757]" >FEATURES</a>
                    <a  className=" tracking-widest text-gray-500 hover:text-[#fa5757]" >DOWNLOAD</a>
                    <a  className=" tracking-widest text-gray-500 hover:text-[#fa5757]" >FAQ</a>

            </div> }

        </div>
    </nav>
}