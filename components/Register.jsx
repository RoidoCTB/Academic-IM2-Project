"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Register = () => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API}/api/auth/register`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      setSuccess(true);

      setTimeout(() => {
        setSuccess(false);
      }, 1000);
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex items-center justify-center gap-[50px]">
      <div className="w-full max-w-[550px]">
        <div className="text-[50px] font-black text-blue-500">facebook</div>
        <p className="text-[28px]">
          Connect with friends and the world around you on Facebook.
        </p>
      </div>
      <div className="flex-1 border border-gray-300 w-[396px] shadow-lg rounded-lg p-5">
        {success ? (
          <>
            <div className="text-center py-[10px] bg-green-200 rounded-lg my-[20px]">
              Registered successfully
            </div>
          </>
        ) : (
          ""
        )}
        <form onSubmit={handleSubmit} className="flex flex-col gap-[20px]">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={formData.username}
            onChange={onChange}
            className="border border-gray-300 w-full h-[50px] rounded-md px-[16px] py-[14px] placeholder:text-[16px] focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="Firstname"
            name="firstname"
            value={formData.firstname}
            onChange={onChange}
            className="border border-gray-300 w-full h-[50px] rounded-md px-[16px] py-[14px] placeholder:text-[16px] focus:outline-none"
            required
          />
          <input
            type="text"
            placeholder="Lastname"
            name="lastname"
            value={formData.lastname}
            onChange={onChange}
            className="border border-gray-300 w-full h-[50px] rounded-md px-[16px] py-[14px] placeholder:text-[16px] focus:outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={onChange}
            className="border border-gray-300 w-full h-[50px] rounded-md px-[16px] py-[14px] placeholder:text-[16px] focus:outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={onChange}
            className="border border-gray-300 w-full h-[50px] rounded-md px-[16px] py-[14px] placeholder:text-[16px] focus:outline-none"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 text-center rounded-md h-[50px] text-white font-bold text-[20px]"
          >
            {loading ? "Registering..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
