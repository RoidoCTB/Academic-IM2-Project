"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/api/auth/login`, formData, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-8 text-center">
        {/* Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="text-blue-400 text-5xl">💻</div>
          <h1 className="text-2xl font-bold mt-2 text-blue-500">Welcome to Social Portal</h1>
        </div>
        <h2 className="text-lg font-semibold mb-4 text-black">Log In</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
  <input
    type="text"
    placeholder="Username or Email"
    name="email"
    value={formData.email}
    onChange={onChange}
    className="w-full h-11 px-4 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
    required
  />
  <input
    type="password"
    placeholder="Password"
    name="password"
    value={formData.password}
    onChange={onChange}
    className="w-full h-11 px-4 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
    required
  />
  <button
    type="submit"
    disabled={loading}
    className="w-full h-11 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition"
  >
    {loading ? "Logging in..." : "Login"}
  </button>
</form>


        {/* Footer */}
        <p className="text-sm text-gray-600 mt-6">
          No account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
