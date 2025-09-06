"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const API = process.env.NEXT_PUBLIC_API_URL;

const Logout = () => {
  const router = useRouter();
  const handleLogout = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/auth/logout`, {}, { withCredentials: true });

      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={handleLogout}>
      <button type="submit" className="bg-blue-500 p-2">
        Logout
      </button>
    </form>
  );
};

export default Logout;
