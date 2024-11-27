
import person from "../assets/person1.jpg"
const User = () => {
    return (
        <div className="p-3 flex flex-col gap-3 overflow-y-auto">
            <div className=" flex items-center  gap-3 hover:bg-green-500 cursor-pointer rounded p-1 shadow"> 
                <img src={person} alt="person-icon" className="md:w-[50px] md:h-[50px] w-[45px] h-[45px] rounded-full"></img>
                <div className="font-font">
                    <h2 className="text-[13px] md:text-[18px]">Jane Doe</h2>
                </div>

            </div>
            <div className=" flex items-center gap-3 hover:bg-green-100 cursor-pointer rounded p-1 shadow"> 
                <img src={person} alt="person-icon" className="md:w-[50px] md:h-[50px] ] w-[45px] h-[45px] rounded-full"></img>
                <div className="font-font">
                    <h2 className="text-[13px] md:text-[18px]">Jane Doe</h2>
                </div>

            </div>
        </div>

    )
}

export default User