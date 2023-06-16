"use client";

// Imports
import { useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";
import IcBack from "./icons/ic_back";
import IcForward from "./icons/ic_forward";
import IcHome from "./icons/ic_home";
import IcSearch from "./icons/ic_search";

interface HeaderPops {
  children: React.ReactNode;
  className?: string;
}

const Header: React.FC<HeaderPops> = ({ children, className }) => {
  const router = useRouter();

  const handleLogout = () => {};

  return (
    <div
      className={twMerge(
        `h-fit bg-gradient-to-b from-emerald-800 p-6`,
        className
      )}
    >
      <div className="w-full mb-4 flex items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          {/* Previous */}
          <button
            onClick={() => router.back()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <IcBack className="text-white" size={35}></IcBack>
          </button>
          {/* Forward */}
          <button
            onClick={() => router.forward()}
            className="rounded-full bg-black flex items-center justify-center hover:opacity-75 transition"
          >
            <IcForward className="text-white" size={35}></IcForward>
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          {/* Home icon */}
          <button className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 transition">
            <IcHome className="text-black" size={20}></IcHome>
          </button>{" "}
          {/* Search icon */}
          <button className="rounded-full bg-white p-2 flex items-center justify-center hover:opacity-75 transition">
            <IcSearch className="text-black" size={20}></IcSearch>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
