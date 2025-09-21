export default function FilterCard(){
    return <div className=" rounded-2xl text-white p-5 bg-[#333333] h-64 w-64 absolute top-12" >
        <p>Status</p>
        <div>
            <input id="Todo"  type="checkbox" />
            <label htmlFor="Todo">Todo</label>
            
            <input id="Solved"  type="checkbox" />
            <label htmlFor="Solved">Solved</label>

            
            <input id="Attempted"  type="checkbox" />
            <label htmlFor="Attempted">Attempted</label>
        </div>
        <p>Difficulty</p>
        <div className="" >
            
            <input id="Easy"  type="checkbox" />
            <label htmlFor="Easy">Easy</label>

            
            <input id="Medium"  type="checkbox" />
            <label htmlFor="Medium">Medium</label>

            
            <input id="Hard"  type="checkbox" />
            <label htmlFor="Hard">Hard</label>

            
            <input id="tags"  type="checkbox" />
            <label htmlFor="tags">Show tags</label>         
        </div>
        <div>Reset</div>
    </div>
}