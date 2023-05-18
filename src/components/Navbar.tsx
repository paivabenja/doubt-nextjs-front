"use client";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="w-full border border-solid border-black grid grid-cols-3 py-4">
      <div className="text-center">buscador</div>
      <button onClick={() => router.push("/")} className="text-center">
        Logo
      </button>
      <button onClick={() => router.push("/cart")} className="text-center">
        Carrito
      </button>
    </div>
  );
};

export default Navbar;
