import PinIcon from "./assets/PinIcon";
import SidebarIcon from "./assets/SidebarIcon";
import VisibilityIcon from "./assets/VisibilityIcon";

export default function Sidebar(){
    return <div className="  px-5 py-5 gap-5 text-white bg-[#333333] w-80 h-screen flex flex-col" >
        <div className=" flex justify-between "><h1 className=" font-bold text-xl">My Lists</h1> <SidebarIcon className=" w-6 h-6" /> </div>
        <div><p className=" text-xl" >Created by me</p></div>
        <SIdebarCard name={"Favourite"} iconStyle={" w-6 h-6"} />
    </div>
}

function SIdebarCard({name, iconStyle}){
    return <div className="flex justify-between rounded-xl px-2 py-2 bg-[#434343]" > <div className="flex gap-5" >< PinIcon className={iconStyle} /> <p>{name}</p></div> < VisibilityIcon className={iconStyle} /> </div>
}