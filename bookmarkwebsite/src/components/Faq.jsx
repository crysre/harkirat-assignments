import { useState } from "react"
import downArrow from "../../images/icon-arrow.svg"

export default function Faq(){


    return <div className="   gap-5 flex justify-center items-center flex-col" >
        <p className=" text-center text-4xl font-bold" >Frequently Asked Questions</p>
        <p className=" text-center w-120" >Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
        <div className="flex  px-72 py-5 w-full flex-col" >
            <FaqCard/>
            <FaqCard/>
            <FaqCard/>
            <FaqCard/>
            <FaqCard/>
        </div>
    </div>
}

function FaqCard({question,img}){
    const [toggleFaq, setToggleFaq] = useState(false)

    return <div onClick={()=>{setToggleFaq(!toggleFaq)}} className="  flex flex-col" >
        <div className="  border-b border-gray-500  py-5 w-full flex justify-between" >
          <p className=" hover:text-[#fa5757] tracking-wider text-gray-500" >what is Bookmark?</p>
          <img className={`text-[#b2b2b2] transform transition-transform duration-300 ${toggleFaq? "rotate-0" : "rotate-180"} self-center h-3 w-5`} src={downArrow}  alt="" />
          </div>
          <p className={` ${toggleFaq?"flex":"hidden"} mt-5 text-gray-500`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>

    </div>


    // return <div className="  border-b border-2" >
    // </div>
}