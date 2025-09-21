import FilterIcon from "./assets/FIlterIcon";
import IsDoneIcon from "./assets/IsDoneIcon";
import RemoveIcon from "./assets/RemoveIcon";

export default function MainContent(){



    const solvedArray = [
  {
    no: 14,
    title: "Longest Common Prefix",
  },
  {
    no: 217,
    title: "Contains Duplicate",
  },
  {
    no: 125,
    title: "Valid Palindrome",
  },
  {
    no: 26,
    title: "Remove Duplicates from Sorted Array",
  },
  {
    no: 66,
    title: "Plus One",
  },
  {
    no: 136,
    title: "Single Number",
  },
  {
    no: 121,
    title: "Best Time to Buy and Sell Stock",
  },
  {
    no: 88,
    title: "Merge Sorted Array",
  },
  {
    no: 69,
    title: "Sqrt(x)",
  },
  {
    no: 206,
    title: "Reverse Linked List",
  },
  {
    no: 141,
    title: "Linked List Cycle",
  },
];


    return <div className="  w-full bg-[#1a1a1a] p-5" >
        <div className="flex gap-5">
            <div className=" flex gap-2 font-bold w-32 rounded-3xl bg-white" ><FilterIcon className="w-10 h-10" /><p className=" self-center  " >Filter</p></div>
            <button className=" border-1 border-[#3a3a3a] w-26 h-10 rounded-3xl py-1 px-2 bg-[#1a1a1a] text-white flex gap-2 justify-center items-center " ><p className="self-center" >Easy</p> <RemoveIcon className=" h-5 w-5" /> </button>
        </div>

        {solvedArray.map((item, index)=>{
            return <Solved key={item.no}  color={index%2===0?"#1a1a1a":"#282828"} no={item.no} title={item.title} difficulty={"Easy"} />
        })}
    </div>
}

function Solved({no, title, difficulty, color}){
    return <div style={{backgroundColor:color}} className=" h-12 my-2 px-5 rounded text-white flex justify-between items-center" >
        <IsDoneIcon className=" w-8 h-8" /><p>{no}. {title}</p> <p className="text-[#1cbab9]" >{difficulty}</p>
    </div>
}