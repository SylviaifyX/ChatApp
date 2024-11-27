import ChatSection from "../components/ChatSection"
import SideBar from "../components/SideSection"



const Home = () =>{
    return(
        <div className=" w-full h-screen  flex  items-start ">
            <SideBar/>
            <ChatSection/>
        </div>
    )
}

export default Home