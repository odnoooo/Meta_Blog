"use client";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

const SocialIcons = () => (
  <div className="w-[144px] flex justify-between text-gray-500">
    <a
      href="https://www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebook />
    </a>
    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter />
    </a>
    <a
      href="https://www.instagram.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>
    <a
      href="https://www.linkedin.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaLinkedin />
    </a>
  </div>
);

const ContactInfo = () => (
  <div className="flex flex-col gap-2 text-gray-700">
    <p>Email: info@jstemplate.net</p>
    <p>Phone: 880 123 456 789</p>
  </div>
);

export const Footer = () => {
  return (
    <div className="text-gray-500 flex flex-col gap-6 bg-gray-100 py-16 lg:gap-20 w-screen mt-12 px-3">
      <div className="flex flex-col gap-6 lg:flex-row w-full lg:w-[1216px] m-auto">
        <div className="flex flex-col gap-6">
          <h2 className="font-bold text-black text-lg">About</h2>
          <h3 className="font-semibold text-base">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
            Ut <br />
            enim ad minim veniam
          </h3>
          <ContactInfo />
        </div>
        <nav className="flex gap-10 items-center justify-center px-5 lg:flex-col lg:gap-2 lg:w-[520px]">
          <Link href="/">Home</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <SocialIcons />
      </div>
      <div className="border-t-[1px] border-slate-300 flex flex-col py-6 gap-12 lg:flex-row lg:justify-between w-full lg:w-[1216px] m-auto">
        <div className="h-12 flex gap-3 items-center">
          <Image
            className="object-cover"
            src="/image/Logo (2).png"
            alt="Logo"
            width={48}
            height={48}
          />
          <div className="h-12 flex items-center">
            <Image
              className="h-5"
              src="/image/MetaBlog (2).png"
              alt="MetaBlog"
              height={28}
              width={94}
            />
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className="flex flex-col text-base text-[#3B3C4A] font-normal lg:flex-row lg:gap-4 lg:items-center">
          <Link href="/terms">Terms of Use</Link>
          <p className="invisible lg:visible text-gray-300">|</p>
          <Link href="/privacy">Privacy Policy</Link>
          <p className="invisible lg:visible text-gray-300">|</p>
          <Link href="/cookies">Cookie Policy</Link>
        </div>
      </div>
    </div>
  );
};
