import ConnectIcon from "./assets/ConnectIcon";
import DownArrow from "./assets/DownArrow";
import PinIcon from "./assets/PinIcon";
import PlayIcon from "./assets/PlayIcon";
import ReloadIcon from "./assets/ReloadIcon";
import VisibilityIcon from "./assets/VisibilityIcon";

export default function ProgressCard(){
    return <div className=" p-5 mt-8 w-100 h-160 rounded-2xl bg-[#262626] gap-5 flex flex-col" >
        <PinIcon className=" w-24 h-32 rounded-2xl bg-[#f5f5f5]" />
        <p className=" text-white font-bold text-4xl" >Favourite</p>
        <div className=" font-bold gap-4 text-white flex"><p>Sumana 19 questions</p> <div className="flex" ><VisibilityIcon className=" mt-1 w-4 h-4" /> <p>Private</p> <DownArrow className=" m-1 w-5 h-5" /></div> </div>
        <div className=" flex gap-5 ">
            <button className=" flex gap-1 justify-center bg-white h-8 w-30 rounded-2xl" ><PlayIcon className="mt-1.5 w-5 h-5" /><p className="text-xl" >Practice</p></button> <div className="bg-[#383838] rounded-4xl p-2" ><ConnectIcon className="w-6 h-6" /></div>
        </div>

        <div className="  bg-[#333333] h-[1px] mt-5" ></div>
        <div className="flex font-bold text-white justify-between " > <p>Progress</p> <ReloadIcon className="w-5 h-5" /> </div>

        
       
  <div className="flex gap-5" >

    <div className=" flex flex-col justify-center items-center rounded w-80 text-white bg-[#333333]" >
      <p>19/19</p>
      <p>Solved</p>
    </div>
  
    <div className=" flex flex-col gap-5 text-white">
      <DifficultyProgressCard level={"Easy"} completed={"11"} totalNo={"11"} />
      <DifficultyProgressCard level={"Med"} completed={"7"} totalNo={"7"} />
      <DifficultyProgressCard level={"Hard"} completed={"1"} totalNo={"1"} />
    </div>
  </div>



    </div>
}



function DifficultyProgressCard({level, completed, totalNo}){

  const levelColors = {
    hard: "text-[#1cbab9]",
    med: "text-[#fab406]",
    easy: "text-[#e53837]",
  };


  return <div className=" rounded flex flex-col justify-center items-center bg-[#333333] h-16 w-30" >
    <p className={levelColors[level.toLowerCase()]} >{level}</p>
    <p>{completed}/{totalNo}</p>
  </div>
}