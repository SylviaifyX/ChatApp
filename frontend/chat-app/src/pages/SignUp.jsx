import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="w-full h-screen bg-green-50 flex flex-col items-center justify-center p-3">
      <div className="w-full max-w-[500px] flex flex-col mx-auto  gap-3 font-font text-[18px]">
        <h1 className="text-[30px]">
          <span className="text-[48px]">F</span>army
        </h1>
        <form className="form flex flex-col gap-5">
        <input
            type="text"
            name=""
            id=""
            placeholder="Name"
            className="p-3 outline-none rounded border border-green-600"
            required
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="email"
            className="p-3 outline-none rounded border border-green-600"
            required
          />
          <input
            type="text"
            name=""
            id=""
            placeholder="Password"
            className="p-3 outline-none rounded border border-green-600"
            required
          /> 
          <button
            type="submit"
            className="bg-green-800 p-3 rounded outline-none
                     text-white text-[18px]
                    hover:bg-white
                     hover:text-black hover:border
                     hover:border-green-700"
          >
            Register
          </button>
        </form>

        <div className="flex items-center gap-2">
          <p className="text-[16px]">Already have an account?</p>{" "}
          <span className="text-green-800 font-medium">
            <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
