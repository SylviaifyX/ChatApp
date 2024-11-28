// const Messages = () =>{
//     return (
//         <div className="p-2 space-y-2">
//             <Message own={true}/>
//             <Message/>
//         </div>
//     )
// }

// export default Messages;
import Message from "../components/Message"
const Messages = ({ messages }) => {
    const currentUserId = localStorage.getItem("userId");
    return (
      <div className="p-2 space-y-2">
        {messages.map((message, index) => (
          <Message
            key={message._id || index}
            own={message.sender._id === currentUserId}
            content={message.content}
            senderImage={message.sender.profilePicture || "/path/to/default/image.jpg"} // Fallback image if no profile picture
          />
        ))}
      </div>
    );
  };
  
 

export default Messages;
