export default function Cta(){
    return <div className=" py-16 px-16  flex flex-col justify-center items-center w-full bg-[#5368df]" >
        <p className="mb-6 t-16 text-lg tracking-widest text-center text-white uppercase" >35,000+ Already Joined</p>
        <p className="px-3 mb-6 text-3xl font-semibold text-center text-white md:text-4xl" >Stay up-to-date with what we're doing</p>
        <div className="flex gap-5 " >
            <input className=" placeholder-gray-500 rounded-md py-2 px-5 outline-none bg-white" placeholder="Enter your email address" type="text" name="" id="" />
            <button className="bg-[#ea5964] text-white rounded-md py-2 px-8" > Contact us </button>
        </div>
        
    </div>
}