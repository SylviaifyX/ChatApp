import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProtectedRoute from "./context/ProtectedRoutes";

function App() {
  const isAuthenticated = !!localStorage.getItem("token"); // Check if token exists

  return (
    <BrowserRouter>
      <Routes>
        {/* Protect the home route */}
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Login route */}
      <Route path="/login" element= {<Login />}/>
      
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
