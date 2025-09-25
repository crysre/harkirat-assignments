import bookmarkLogo from "../../images/logo-bookmark-footer.svg";
import twitter from "../../images/icon-twitter.svg"
import facebook from "../../images/icon-facebook.svg"

export function Footer(){
    return <footer className=" mx-auto flex justify-between space-y-16   bg-[#252b46] w-full h-15" >
        <div className=" space-x-14  flex  " >
            <img className="h-10"   src={bookmarkLogo} alt="" />
                <a>FEATURES</a>
                <a>DOWNLOAD</a>
                <a>FAQ</a>
        </div>
        <div className=" space-x-10 flex" >
            <img className=" h-6"  src={facebook} alt="" />
            <img className=" h-6" src={twitter} alt="" />
        </div>
    </footer>
}