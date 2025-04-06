"use client";

import { Avatar, AvatarGroup, AvatarIcon } from "@heroui/avatar";
import { LuGlobe } from "react-icons/lu";

export default function Hero() {
  return (
    <div className="flex justify-between gap-8">
      <div className="flex flex-col gap-4 w-full max-w-2xl">
        <h1 className="text-xl font-bold leading-[30px] sm:text-3xl sm:leading-[45px]">
          I&apos;m{" "}
          <a
            className="text-blue-600 after:content-['_↗']"
            href="https://twitter.com/faiqthirapi"
          >
            Faiq Thirafi
          </a>
          , — learning cyber security and building cool stuff for the web by
          experimenting, exploring, and creating.
        </h1>
        <span className="flex items-center text-sm text-gray-500 gap-1">
          <LuGlobe className="text-blue-600" />
          <a
            href="https://id.wikipedia.org/wiki/Kabupaten_Nganjuk"
            className="hover:underline"
          >
            Nganjuk, Indonesia
          </a>
        </span>
      </div>
      <div className="flex flex-col items-center justify-center gap-4">
        <Avatar isBordered className="w-32 h-32 " src="/ava.png" />
      </div>
    </div>
  );
}
