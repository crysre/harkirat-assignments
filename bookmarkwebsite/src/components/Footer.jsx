import bookmarkLogo from "../../images/logo-bookmark-footer.svg";
import twitter from "../../images/icon-twitter.svg"
import facebook from "../../images/icon-facebook.svg"

export function Footer(){
    return <footer className=" py-16 gap-16 md:text-left text-center text-white px-20 mx-auto flex md:flex-row flex-col justify-center md:justify-between md:space-y-16 items-center md:items-start  bg-[#252b46] w-full md:h-15" >
        <div className=" md:space-x-14 gap-10  flex md:flex-row flex-col  " >
            <img className="mb-1 h-6"   src={bookmarkLogo} alt="" />
                <a className="hover:text-[#fa5757] tracking-wider text-gray-500" >FEATURES</a>
                <a className="hover:text-[#fa5757] tracking-wider text-gray-500" >DOWNLOAD</a>
                <a className="hover:text-[#fa5757] tracking-wider text-gray-500" >FAQ</a>
        </div>
        <div className=" space-x-10 flex" >
            <img className=" h-6"  src={facebook} alt="" />
            <img className=" h-6" src={twitter} alt="" />
        </div>
    </footer>
}