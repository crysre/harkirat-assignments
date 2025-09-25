import heroLogo from "../../images/illustration-hero.svg"

export default function HeroSection(){
    return <div className="flex lg:flex-row flex-col-reverse" >
        <div className=" flex flex-col gap-5 " >
            <h1 className="md:text-6xl text-center lg:text-left text-4xl font-bold" >A Simple Bookmark Manager</h1>
            
        <p className=" md:w-120 lg:text-left text-center md:text-2xl text-[#9ca3af]" >A clean and simple interface to organize
            your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
        <div className="flex md:justify-start justify-center gap-2" >
            <button className=" font-bold border-2 border-[#5368e2] hover:text-[#5368e2] hover:bg-white rounded-md text-white py-5 px-6 bg-[#5368e2]" >Get It On Chrome</button>
            <button className=" hover:bg-white border-[#b2b2b2] border-2 rounded-md px-6 bg-[#b2b2b2] font-bold" >Get It On Firefox</button>
        </div>
        </div>
        <div>
            <img src={heroLogo} alt="" />

        </div>
    </div>
}