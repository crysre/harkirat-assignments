import bookmarkLogo from "../../images/logo-bookmark-footer.svg";
import twitter from "../../images/icon-twitter.svg"
import facebook from "../../images/icon-facebook.svg"

export function Footer(){
    return <footer className=" py-16 text-white px-20 mx-auto flex justify-between space-y-16  bg-[#252b46] w-full h-15" >
        <div className=" space-x-14  flex  " >
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