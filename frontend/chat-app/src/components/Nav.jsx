import { useNavigate } from "react-router-dom"; // For navigation

const NavSection = () => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleLogout = () => {
    // Remove token from localStorage or sessionStorage
    localStorage.removeItem("authToken");

    // Redirect to the login page
    navigate("/login");
  };

  return (
    <div className="w-full h-[85px] bg-green-800 p-5 font-font flex items-center justify-between gap-2 md:gap-0">
      <h1 className="text-white text-[16px] md:text-2xl">ChatApp</h1>
      <button
        onClick={handleLogout}
        className="md:px-3 md:py-2 px-1 py-1 bg-white rounded-sm"
      >
        LogOut
      </button>
    </div>
  );
};

export default NavSection;
