import { useState } from "react"

export default function Features(){
    const [features, setFeatures] = useState("simple")
    return <div className=" mt-20  gap-5 flex flex-col justify-center items-center">
        <h1 className=" font-bold text-4xl">Features</h1>
        <p className=" text-center w-120 text-[#b2b2b2]" >Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.</p>
        <div className=" px-2 border-b border-[#9194a1] mb-20 flex md:flex-row text-center flex-col text-xl md:gap-20 text-[#3b4159] " >
            <div className={` pb-3 hover:text-[#fa6767] ${(features === "simple") ? "border-[#fa5757] border-b-4 " :""} `}  onClick={()=>{setFeatures("simple")}} >Simple Bookmarking</div>
            <div className={` pb-3 hover:text-[#fa6767] ${(features === "speedy") ? "border-[#fa5757] border-b-4 " :""} `} onClick={()=>{setFeatures("speedy")}} >Speedy Searching</div>
            <div className={` pb-3 hover:text-[#fa6767] ${(features === "easy") ? "border-[#fa5757] border-b-4 " :""} `} onClick={()=>{setFeatures("easy")}} >Easy Sharing</div>
        </div>
        <div>
            {(features === "simple") && (
                <div></div>
            )}
        </div>
    </div>
}