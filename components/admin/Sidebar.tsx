"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Dumbbell,
  ClipboardList,
  FolderKanban,
  Users,
  MessageSquare,
  BarChart3,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

import { motion } from "framer-motion";

const links = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Exercises",
    href: "/admin/exercises",
    icon: Dumbbell,
  },
  {
    title: "Routines",
    href: "/admin/routines",
    icon: ClipboardList,
  },
  {
    title: "Categories",
    href: "/admin/categories",
    icon: FolderKanban,
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: Users,
  },
  {
    title: "Reviews",
    href: "/admin/reviews",
    icon: MessageSquare,
  },
  {
    title: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="
        hidden
        lg:flex
        w-72
        flex-col
        border-r
        border-white/10
        bg-[#111111]
      "
    >
      {/* Logo */}

      <div className="border-b border-white/10 p-8">

        <h1 className="text-3xl font-black tracking-wider text-white">
          FITFLOW
        </h1>

        <p className="mt-2 text-sm uppercase tracking-[4px] text-lime-400">
          Admin Panel
        </p>

      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 p-5">

        {links.map((item) => {

          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
            >
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: .2 }}
                className={`
                  group
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-5
                  py-4
                  transition

                  ${
                    active
                      ? "bg-lime-400/10 text-lime-400 border border-lime-400/20"
                      : "text-gray-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <div className="flex items-center gap-4">

                  <Icon size={20} />

                  <span className="font-medium">
                    {item.title}
                  </span>

                </div>

                <ChevronRight
                  size={18}
                  className="opacity-0 transition group-hover:opacity-100"
                />
              </motion.div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="border-t border-white/10 p-5">

        <div className="mb-5 rounded-2xl bg-[#181818] p-4">

          <p className="font-semibold text-white">
            Administrator
          </p>

          <p className="text-sm text-gray-500">
            admin@gym.com
          </p>

        </div>

        <button
          className="
            flex
            w-full
            items-center
            gap-3
            rounded-2xl
            px-5
            py-4
            text-gray-400
            transition
            hover:bg-red-500/10
            hover:text-red-400
          "
        >
          <LogOut size={20} />

          Logout
        </button>

      </div>
    </aside>
  );
}