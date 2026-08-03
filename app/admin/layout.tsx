"use client";

import Sidebar from "@/components/admin/Sidebar";


interface Props {
  children: React.ReactNode;
}

export default function AdminLayout({
  children,
}: Props) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#0E0E0E]">
      {/* Sidebar */}

      <Sidebar />

      {/* Main */}

      <div className="flex flex-1 flex-col overflow-hidden">

        {/* <Topbar /> */}

        <main
          className="
            flex-1
            overflow-y-auto
            bg-[#151515]
            px-6
            py-6
            lg:px-10
          "
        >
          <div className="mx-auto w-full max-w-7xl">
            {children}
          </div>
        </main>

      </div>
    </div>
  );
}