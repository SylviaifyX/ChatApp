import Message from "./Message";


const Messages = () =>{
    return (
        <div className="p-2 space-y-2">
            <Message own={true}/>
            <Message/>
        </div>
    )
}

export default Messages;