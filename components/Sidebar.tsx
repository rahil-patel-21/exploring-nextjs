"use client";

// Imports
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import Box from "./Box";
import SideBarItem from "./SideBarItem";
import Library from "./Library";
import IcHome from "./icons/ic_home";
import IcSearch from "./icons/ic_search";
import Header from "./Header";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathName = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: IcHome,
        label: "Home",
        active: pathName !== "/search",
        href: "/",
      },
      {
        icon: IcSearch,
        label: "Search",
        active: pathName === "/search",
        href: "/search",
      },
    ],
    [pathName]
  );

  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col gap-y-2 bg-black h-full w-[300px] p-2">
        <Box>
          <div className="flex flex-col gap-y-4 px-5 py-4">
            {routes.map((item) => (
              <SideBarItem key={item.label} {...item} />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
          <Library></Library>
        </Box>
      </div>
      <main className="h-full flex-1 overflow-y-auto py-2">{children}</main>
    </div>
  );
};

export default Sidebar;
