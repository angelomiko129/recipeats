import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "@/api";

const Register = () => {
  // state for username and password
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // state for error
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // create a user
      const { data } = await createUser({ username, password });
      // if success then redirect to login
      if (data) {
        navigate("/login");
      }
    } catch (err) {
      setError("User already exist. Please try again.");
    }
  };
  return (
    <>
      <div className="flex flex-col items-center">
        <h1>Register</h1>
        <p>
          More than <strong className="text-primary">100 recipes</strong> to
          choose from.
        </p>
        <p>Join Now!</p>
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
          {error && <p className="text-red-500">{error}</p>}
          <button
            onClick={handleSubmit}
            className="rounded-full bg-primary px-4 py-2"
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
