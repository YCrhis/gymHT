"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f150d]">
      <div className="px-6 py-16">
        {/* BIG TEXT */}

        <Link href="/contact" className="group block overflow-hidden">
          <h2 className=" text-center text-[4rem] font-black uppercase tracking-[0.08em] leading-none text-transparent stroke-title transition-colors duration-300 md:text-[6rem] lg:text-[8rem] xl:text-[9rem]">
            GO TO THE GYM NOW
          </h2>
        </Link>

        {/* Divider */}

        <div className="my-10 h-px bg-white/10" />

        {/* Bottom */}

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} KillFat. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="font-semibold text-white">Follow Us:</span>

            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-lime-400 transition hover:scale-110 hover:text-white"
              >
                {/* <Facebook size={18} /> */}
              </Link>

              <Link
                href="#"
                className="text-lime-400 transition hover:scale-110 hover:text-white"
              >
                {/* <Instagram size={18} /> */}
              </Link>

              {/* X (Twitter) */}

              <Link
                href="#"
                className="text-lime-400 transition hover:scale-110 hover:text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-current"
                >
                  <path d="M18.901 2H22l-6.765 7.733L23.2 22h-6.245l-4.89-7.166L5.8 22H2.7l7.236-8.272L1 2h6.403l4.42 6.61L18.901 2Z" />
                </svg>
              </Link>

              <Link
                href="#"
                className="text-lime-400 transition hover:scale-110 hover:text-white"
              >
                {/*  <Linkedin size={18} /> */}
              </Link>

              <Link
                href="#"
                className="text-lime-400 transition hover:scale-110 hover:text-white"
              >
                {/* <Youtube size={18} /> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
