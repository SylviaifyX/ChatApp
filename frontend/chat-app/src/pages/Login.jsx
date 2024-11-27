
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios"

const Login = () => {
  const [personName, setPersonName] = useState('')
  const [personPassword, setPersonPassword] = useState('')
  const navigate = useNavigate()

  const handleSummit = async (e) => {
    e.preventDefault()
    const dataDetails = {
      username: personName,
      password: personPassword
    }

    try {
      const { data } = await axios.post("http://localhost:5005/auth/login", dataDetails)
      console.log(data)
      if (data.token) {
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        navigate("/signup")
        alert("You are not registered to this service")
      }

    } catch (error) {
      console.log("there is login in error", error)
    }
  }
  return (
    <div className="w-full h-screen bg-green-50 flex flex-col items-center justify-center p-3">
      <div className="w-full max-w-[500px] flex flex-col mx-auto  gap-3 font-font text-[18px]">
        <h1 className="text-[30px]">
          <span className="text-[48px]">F</span>army
        </h1>
        <form className="form flex flex-col gap-5" onSubmit={handleSummit}>
          <input
            type="text"
            name="username"
            value={personName}
            placeholder="name"
            className="p-3 outline-none rounded border border-green-600"
            required
            onChange={(e) => setPersonName(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={personPassword}
            placeholder="Password"
            className="p-3 outline-none rounded border border-green-600"
            required
            onChange={(e) => setPersonPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-green-800 p-3 rounded outline-none
                       text-white text-[18px]
                      hover:bg-white
                       hover:text-black hover:border
                       hover:border-green-700"
          >
            Login
          </button>
        </form>

        <div className="flex items-center gap-2">
          <p className="text-[16px]">Don't have an account?</p>{" "}
          <span className="text-green-800 font-medium">
            <Link to="/signup">SignUp</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Login