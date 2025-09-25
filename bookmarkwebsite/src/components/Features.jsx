import { useState } from "react"
import simple from "../../images/illustration-features-tab-1.svg"
import speedy from "../../images/illustration-features-tab-2.svg"
import easy from "../../images/illustration-features-tab-3.svg"

export default function Features(){
    const [features, setFeatures] = useState("simple")
    return <div className=" mb-20  mt-20  gap-5 flex flex-col justify-center items-center">
        <h1 className=" font-bold text-4xl">Features</h1>
        <p className=" text-center w-120 text-[#b2b2b2]" >Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        <div className=" mt-5
         px-2 border-b border-[#9194a1] mb-8 flex md:flex-row text-center flex-col text-xl md:gap-20 text-[#3b4159] " >
            <div className={` pb-3 hover:text-[#fa6767] ${(features === "simple") ? "border-[#fa5757] border-b-4 " :""} `}  onClick={()=>{setFeatures("simple")}} >Simple Bookmarking</div>
            <div className={` pb-3 hover:text-[#fa6767] ${(features === "speedy") ? "border-[#fa5757] border-b-4 " :""} `} onClick={()=>{setFeatures("speedy")}} >Speedy Searching</div>
            <div className={` pb-3 hover:text-[#fa6767] ${(features === "easy") ? "border-[#fa5757] border-b-4 " :""} `} onClick={()=>{setFeatures("easy")}} >Easy Sharing</div>
        </div>
        
            {(features === "simple") && (
                <div className=" w-full flex justify-between md:flex-row flex-col" >
                <div className="md:w-1/2" ><img src={simple} alt="" /></div>
                <div className=" md:w-1/2 flex flex-col gap-8 md:text-left text-center" >
                    <p className="text-4xl font-bold" >Bookmark in one click</p>
                    <p className=" text-[#b2b2b2] w-120" >Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>
                    <button className="   font-bold border-2 border-[#5368e2] hover:text-[#5368e2] hover:bg-white rounded-md text-white py-3 px-6 bg-[#5368e2] self-start" >More Info</button>
                </div>
                </div>
            )}
        
            {(features === "speedy") && (
                <div className=" w-full flex justify-between md:flex-row flex-col" >
                <div className="md:w-1/2" ><img src={speedy} alt="" /></div>
                <div className=" md:w-1/2 flex flex-col gap-8 md:text-left text-center" >
                    <p className="text-4xl font-bold" >Intelligent search</p>
                    <p className=" text-[#b2b2b2] w-120" >Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>
                    <button className="   font-bold border-2 border-[#5368e2] hover:text-[#5368e2] hover:bg-white rounded-md text-white py-3 px-6 bg-[#5368e2] self-start" >More Info</button>
                </div>
                </div>
            )}
            
            {(features === "easy") && (
                <div className=" w-full flex justify-between md:flex-row flex-col" >
                <div className="md:w-1/2" ><img src={easy} alt="" /></div>
                <div className=" md:w-1/2 flex flex-col gap-8 md:text-left text-center" >
                    <p className="text-4xl font-bold" >Share your bookmarks</p>
                    <p className=" text-[#b2b2b2] w-120" >Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.</p>
                    <button className="   font-bold border-2 border-[#5368e2] hover:text-[#5368e2] hover:bg-white rounded-md text-white py-3 px-6 bg-[#5368e2] self-start" >More Info</button>
                </div>
                </div>
            )}
    </div>
}