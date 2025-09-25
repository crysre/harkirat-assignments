import chrome from "../../images/logo-chrome.svg"
import firefox from "../../images/logo-firefox.svg"
import opera from "../../images/logo-opera.svg"


export default function DownloadSection(){
    return <div className="flex mb-40 justify-center items-center gap-5 flex-col" >
        <p className=" font-bold text-4xl" >Download the extension</p>
        <p className=" text-center md:w-120 text-[#b2b2b2]" >We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.</p>
        <div className=" md:space-x-7 flex md:flex-row flex-col" >
            <Card img={chrome} h1={"chrome"} p={"62"}  />
            <Card img={firefox} h1={"firefox"} p={"55"} style={"translate-y-6"}   />
            <Card img={opera} h1={"opera"} p={"46"}  style={"translate-y-12"}  />
        </div>
    </div>
}

function Card({img, h1, p, style}){
    return <div className={` ${style}  rounded-lg py-6 px-6  gap-5 shadow-lg justify-center items-center flex flex-col w-full md:w-1/3 `}>
        <img className="w-24" src={img} alt={h1} />
        <p className="text-2xl font-bold" >Add to {h1}</p>
        <p className=" text-[#b2b2b2]" >Minimum Version {p}</p>
        <div className="w-full border-b-6 border-b-[#b2b2b2] border-dotted"></div>
        <button className="  border-2 border-[#5368e2] hover:text-[#5368e2] hover:bg-white rounded-md text-white py-3 px-48 md:px-12 bg-[#5368e2] self-start" >Add & Install Extension</button>
    </div>
}