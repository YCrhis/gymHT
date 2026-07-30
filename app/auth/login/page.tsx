'use client'

import Image from "next/image";
import Link from "next/link";
import { Flame } from "lucide-react";
import UIButton from "@/components/UI/UIButton";
import UIInput from "@/components/UI/UIInput";
import { useState } from "react";
import { login } from "@/actions/auth/auth";

const LoginPage = () => {

  const [loginForm, setLoginForm] = useState({email:"", password:""})


  const handleSubmituser = async() => {
    const res = await login(loginForm);
  }

  return (
    <main className="min-h-screen bg-[#111111]">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left */}

        <div className="relative hidden lg:block">
          <Image
            src="/images/banner.webp"
            fill
            alt=""
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />

          <div className="absolute bottom-12 left-12 right-12">
            <div className="flex items-center gap-2 text-main mb-5">
              <Flame size={18} />
              Stronger Every Day
            </div>

            <h1 className="text-6xl font-black leading-tight">
              Push Beyond
              <br />
              Your Limits.
            </h1>

            <p className="text-zinc-300 mt-6 text-lg">
              Join hundreds of athletes transforming their lives through
              training.
            </p>
          </div>
        </div>

        {/* Right */}

        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h2 className="text-5xl font-black">Welcome Back</h2>

            <p className="text-zinc-400 mt-3 mb-10">
              Sign in to continue your fitness journey.
            </p>

            <form className="space-y-5">
              <UIInput type="email" placeholder="Email" />

              <UIInput type="password" placeholder="Password" />

              <div className="flex justify-between items-center text-sm">
                <label className="flex gap-2 items-center">
                  <input type="checkbox" />
                  Remember me
                </label>

                <Link href="/forgot-password" className="text-main">
                  Forgot password?
                </Link>
              </div>

              <UIButton className="w-full justify-center">Login</UIButton>
            </form>

            <div className="flex items-center my-8">
              <div className="flex-1 h-px bg-zinc-800" />

              <span className="mx-4 text-zinc-500">OR</span>

              <div className="flex-1 h-px bg-zinc-800" />
            </div>

            <button className="w-full rounded-2xl border border-zinc-800 py-4 hover:border-main transition">
              Continue with Google
            </button>

            <p className="text-center text-zinc-400 mt-8">
              Don't have an account?{" "}
              <Link href="/register" className="text-main font-semibold">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
