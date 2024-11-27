import Test from "../assets/person2.jpg";
import OwnImage from "../assets/person4.jpg"
const Message = ({ own }) => {
    return (
        <div className={`flex ${own ? "justify-end" : "justify-start"} my-4`}>
          <div className="flex items-center gap-3">
            {/* Conditionally render the image based on ownership */}
            <img
              src={own ? OwnImage : Test}
              alt="profile-icon"
              className="w-[50px] h-[50px] rounded-full block"
            />
            <p
              className={`p-3 rounded-md max-w-[500px] ${
                own ? "bg-blue-400 text-white" : "bg-green-400 text-black"
              }`}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit sint
              nobis rerum ipsam, temporibus accusantium illo, nisi enim hic ipsum
              magni quaerat eos aspernatur nemo omnis, aliquid aperiam. Sapiente,
              reprehenderit.
            </p>
          </div>
        </div>
      );
};

export default Message;
