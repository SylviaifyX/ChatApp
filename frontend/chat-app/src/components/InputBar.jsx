const InputBar = ({setMessage, sendMessage}) => {
  return (
    <div className="h-[58px] p-2 w-full border border-t-2 flex items-center justify-between gap-2">
      <input
        type="text"
        placeholder="Start chat"
        onChange={(e) => setMessage(e.target.value)}
        className="w-full md:w-[80%] p-1 outline-none rounded-md"
      />
      <button className="bg-green-800 px-8 py-2 text-white rounded w-full md:w-auto" onClick={sendMessage}>
        Send
      </button>
    </div>
  );
};
export default InputBar;
