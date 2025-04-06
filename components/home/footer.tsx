"use client";

import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { FaXTwitter, FaInstagram, FaGithub } from "react-icons/fa6";

interface ProjectProps {
  className?: string;
}

const Footer = ({ className }: ProjectProps) => {
  return (
    <footer
      className={`${className} bg-slate-800/30 shadow-xs relative mx-auto mb-6 flex w-full max-w-5xl flex-col rounded-2xl p-8 saturate-100 backdrop-blur-[10px]`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex justify-center gap-4">
          <Link
            href="https://twitter.com/faiqthirafi"
            isExternal
            className="flex items-center gap-2"
          >
            <Button variant="ghost" color="default" size="lg" isIconOnly>
              <FaXTwitter className="text-lg" />
            </Button>
          </Link>
          <Link
            href="https://instagram.com/faiqthirafi"
            isExternal
            className="flex items-center gap-2"
          >
            <Button variant="ghost" color="default" size="lg" isIconOnly>
              <FaInstagram className="text-lg" />
            </Button>
          </Link>
          <Link
            href="https://instagram.com/thirapi"
            isExternal
            className="flex items-center gap-2"
          >
            <Button variant="ghost" color="default" size="lg" isIconOnly>
              <FaGithub className="text-lg" />
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-6 flex items-center justify-center text-sm">
        <div>
          &copy; {new Date().getFullYear()} Made with ✌️ by Faiq Thirafi
        </div>
      </div>
    </footer>
  );
};
export default Footer;
