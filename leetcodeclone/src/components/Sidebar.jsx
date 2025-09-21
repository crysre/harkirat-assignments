import PinIcon from "./assets/PinIcon";
import SidebarIcon from "./assets/SidebarIcon";
import VisibilityIcon from "./assets/VisibilityIcon";

export default function Sidebar({SidebarOpen, SetSidebarOpen}){
    
    return <div className={` transition-all duration-100 ease-in-out gap-5 text-white bg-[#333333] h-screen flex flex-col ${SidebarOpen ?  "w-80  px-5 py-5": "w-14 px-2 py-2 "}`} >
        <div className=" flex justify-between "><h1 className={` font-bold text-xl ${SidebarOpen ? "opacity-100": "opacity-0 w-0 overflow-hidden"} `}>My Lists</h1> <SidebarIcon onClick={()=>{
            SetSidebarOpen(!SidebarOpen)
        }} className=" w-6 h-6" /> </div>
        {
            SidebarOpen && (
                <div>
                    
    <div className="mb-5" ><p className=" text-xl" >Created by me</p></div>
        <SIdebarCard name={"Favourite"} iconStyle={" w-6 h-6"} />
                </div>
            )
        }
    </div>

}

function SIdebarCard({name, iconStyle}){
    return <div className="flex gap-4 justify-between rounded-xl px-2 py-2 bg-[#434343]" > <div className="flex gap-5" >< PinIcon className={iconStyle} /> <p>{name}</p></div> < VisibilityIcon className={iconStyle} /> </div>
}