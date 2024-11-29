import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react"
import axios from "axios"
import io from "socket.io-client"

const socket = io("http://localhost:5005")


const SignUp = () => {
  const [personName, setPersonName] = useState('')
  const [personPassword, setPersonPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();
  
    try {
      const { data } = await axios.post("http://localhost:5005/auth/register", {
        username: personName,
        password: personPassword,
      });
  
      if (data.token) {
        // Store the token and user details in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("userId", data.userId);
        localStorage.setItem("user", JSON.stringify({ username: data.username }));
  
        // Redirect to home page
        navigate("/");
      } else {
        alert("Registration successful, but no token received. Please log in.");
        navigate("/login");
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.message || "An error occurred during registration."
      );
    }
  };
  return (
    <div className="w-full h-screen bg-green-50 flex flex-col items-center justify-center p-3">
      <div className="w-full max-w-[500px] flex flex-col mx-auto  gap-3 font-font text-[18px]">
        <h1 className="text-[30px]">
          <span className="text-[48px]">F</span>army
        </h1>
        <form className="form flex flex-col gap-5" onSubmit={handleSignUp}>
          <input
            type="name"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
            placeholder="Name"
            className="p-3 outline-none rounded border border-green-600"
            required
          />
          <input
            type="password"
            value={personPassword}
            onChange={(e) => setPersonPassword(e.target.value)}
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
        {successMessage && (
          <p className="text-green-700 text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-600 text-center">{errorMessage}</p>
        )}

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
