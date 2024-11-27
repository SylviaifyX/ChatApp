

import statusImage from "../assets/person5.jpg"
import Messages from "./Messages"
import Search from "./Search"
import InputBar from "./InputBar"
const ChatSection = () => {
    return (
        <div className="w-full h-screen lg:w-[80%] flex flex-col md:flex-col">
            {/* Header Section */}
            <div className="shadow border-b-2 p-2">
                <div className="flex flex-col md:flex-row items-center justify-between gap-2 lg:h-[50px]">
                    {/* Profile Section */}
                    <div className="flex items-end gap-2">
                        <img src={statusImage} alt="person.icon" className="w-[40px] h-[40px] rounded-full" />
                        <div className="flex flex-col">
                            <span className="text-sm">Cynthia</span>
                            <p className="text-[12px]">Online</p>
                        </div>
                    </div>
                    <Search />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto bg-gray-100">
                <Messages />
            </div>

            <InputBar />
        </div>
    )
}

export default ChatSection