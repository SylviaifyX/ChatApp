import NavSection from "./Nav"
import User from "./UserChat"



const SideBar = () => {
  
    return (
        <div className="w-1/2 lg:w-[20%] h-screen flex flex-col">
            <NavSection />
            <User/>
        </div>
    )
}

export default SideBar