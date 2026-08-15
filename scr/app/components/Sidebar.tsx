"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Tasks",
      path: "/tasks",
    },
    {
      name: "Calendar",
      path: "/calendar",
    },
    {
      name: "Team",
      path: "/team",
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-white p-6">
      
      {/* Logo */}
      <div className="mb-10">
        <h1 className="text-2xl font-bold tracking-tight">
          TEAMWORK
        </h1>

        <p className="mt-1 text-xs text-gray-500">
          Task & Engagement Assistant
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">

        {menuItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block rounded-lg px-4 py-3 text-sm font-medium transition ${
              pathname === item.path
                ? "bg-black text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.name}
          </Link>
        ))}

      </nav>

    </aside>
  );
}