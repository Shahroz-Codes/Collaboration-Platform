import { useState } from "react";
import api from "../../utils/api";
import { useAuthStore } from "../../store/auth.store.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((state) => state.login);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(email, password); // call Zustand action directly
    } catch (err) {
      console.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="bg-gray-00 flex items-center justify-center">
      <form onSubmit={handleSubmit} className=" bg-white p-6  shadow-md w-96 border border-gray-950">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-3 border "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-black text-white py-2  hover:bg-gray-200">
          Login
        </button>
      </form>
    </div>
  );
}
