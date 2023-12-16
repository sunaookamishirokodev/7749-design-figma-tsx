"use client";
import Image from "next/image";
import avatar from "./avatar-square.jpg";
import { FaLock, FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";

export default function EnterPassword() {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [isStaySignedIn, setIsStaySignedIn] = useState<boolean>(false);

  return (
    <main className="h-screen w-full flex">
      <div className="flex flex-col gap-6 w-[500px] bg-white m-auto text-[#1D3153] p-14 rounded-xl">
        <h1 className="text-2xl font-bold">Enter your password</h1>
        <div className="flex gap-3">
          <Image src={avatar} height={60} width={60} alt="avatar" className="rounded-full" />
          <div>
            <h4 className="">Business Account</h4>
            <h2 className="font-semibold text-lg">Sunaookami Shiroko</h2>
          </div>
        </div>
        <div>
          <label htmlFor="password" className="block font-semibold text-sm mb-[6px]">
            Password
          </label>
          <div className="flex gap-3">
            <div className="flex gap-2 h-12 px-3 flex-1 outline rounded-lg outline-[1.5px]">
              <FaLock className="my-auto" />
              <input
                className="outline-none w-full"
                type={passwordVisible ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Type your password"
                autoComplete="false"
              />
            </div>
            <div className="text-2xl my-auto cursor-pointer" onClick={() => setPasswordVisible(!passwordVisible)}>
              <FaRegEye className={`${!passwordVisible && "hidden"}`} />
              <FaRegEyeSlash className={`${passwordVisible && "hidden"}`} />
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div
              className={`flex outline outline-[1.5px] h-8 w-14 px-1 my-auto rounded-full cursor-pointer`}
              onClick={() => setIsStaySignedIn(!isStaySignedIn)}
            >
              <div
                className={`${!isStaySignedIn ? "translate-x-full " : ""}h-6 w-6 bg-[#1D3153] my-auto rounded-full transition-transform`}
              />
            </div>
            <span className="my-auto font-semibold text-sm">Stay signed in</span>
          </div>
          <button className="bg-[#1D3153] text-white px-4 py-3 rounded-lg mr-[34px]">Continue</button>
        </div>
        <h3 className="font-semibold underline cursor-pointer">Reset password</h3>
      </div>
    </main>
  );
}
