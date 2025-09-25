import { useState } from "react"
import simple from "../../images/illustration-features-tab-1.svg"
import speedy from "../../images/illustration-features-tab-2.svg"
import easy from "../../images/illustration-features-tab-3.svg"

export default function Features(){
    const [features, setFeatures] = useState("simple")
    return <div className=" mb-20  mt-20  gap-5 flex flex-col justify-center items-center">
        <h1 className=" font-bold text-4xl">Features</h1>
        <p className=" text-center md:w-120 text-[#b2b2b2]" >Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        <div className=" mt-5 px-2 border-b border-[#9194a1] mb-8 flex md:flex-row text-center flex-col text-xl gap-10 md:gap-20 text-[#3b4159] " >
            <div className={` pb-3 hover:text-[#fa6767] ${(features === "simple") ? "border-[#fa5757] border-b-4 " :""} `}  onClick={()=>{setFeatures("simple")}} >Simple Bookmarking</div>
            <div className={` pb-3 hover:text-[#fa6767] ${(features === "speedy") ? "border-[#fa5757] border-b-4 " :""} `} onClick={()=>{setFeatures("speedy")}} >Speedy Searching</div>
            <div className={` pb-3 hover:text-[#fa6767] ${(features === "easy") ? "border-[#fa5757] border-b-4 " :""} `} onClick={()=>{setFeatures("easy")}} >Easy Sharing</div>
        </div>

        {(features === "simple") && (
                <Slidebar img={simple} heading={"Bookmark in one click"} p={"Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."}    />
            )}

            {(features === "speedy") && (
                <Slidebar img={speedy} heading={"Intelligent search"} p={"Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."}    />
            )}

            {(features === "easy") && (
                <Slidebar img={easy} heading={"Share your bookmarks"} p={"Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button."}    />
            )}
    </div>
}


function Slidebar({img, heading, p}){
    return <div className=" w-full flex justify-between md:flex-row flex-col" >
                <div className=" md:self-start self-center md:w-1/2" ><img src={img} alt="" /></div>
                <div className=" md:w-1/2 flex flex-col gap-8 md:text-left text-center" >
                    <p className="text-4xl mt-4 md:mt-0  font-bold" >{heading}</p>
                    <p className=" text-[#b2b2b2] md:w-120" >{p}</p>
                    <button className="   font-bold border-2 border-[#5368e2] hover:text-[#5368e2] hover:bg-white rounded-md text-white py-3 px-6 bg-[#5368e2]  self-center md:self-start" >More Info</button>
                </div>
                </div>
}