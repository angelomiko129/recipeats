import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { loginUser } from "@/api";

const Login = () => {
  // state for username and password
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // state for error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // login a user
      const { data } = await loginUser({ username, password });
      // if it exist store the username and token on localstorage
      if (data) {
        localStorage.setItem("username", data.username);
        localStorage.setItem("token", data.token);
        // redirect to recipes
        navigate("/recipes");
      }
    } catch (err) {
      setError("Failed to log in. Please check your credentials.");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <h1>Login</h1>
        <div className="m-4 flex w-3/4 flex-col gap-2 rounded-md bg-background p-16 font-mona shadow-md shadow-primary sm:w-1/3">
          {/* Username */}
          <label>Username:</label>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="rounded-md border bg-background p-2 text-primary"
          />
          {/* Password */}
          <label>Password:</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-md border bg-background p-2 text-primary"
          />
          {/* Error */}
          {error && <p className="text-red-400">{error}</p>}
          <button
            onClick={handleSubmit}
            className="rounded-full bg-primary px-4 py-2"
          >
            Log In
          </button>
          <p className="text-center">Dont have an account?</p>
          <NavLink to="/register">
            <button className="w-full rounded-full bg-primary px-4 py-2">
              Register
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Login;
