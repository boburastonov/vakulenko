"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import MobileNav from "./MobileNav";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const { t, i18n } = useTranslation();
  const changeLang = (e: string) => {
    i18n.changeLanguage(e);
    
  };

  return (
    <header className="py-1 relative">
      <div className="max-w-7xl mx-auto px-3 flex items-center justify-between">
        <Link href={"/"} className="hover:opacity-85">
          <Image src={Logo} width={92} height={74} alt="Logo" />
        </Link>
        <ul className="nav-list md:hidden lg:flex lg:items-center lg:p-0 lg:m-0 list-none">
          <li className="mx-9">
            <Link
              className="text-[14px] leading-[1.55] font-bold border border-solid border-transparent transition-all duration-[0.3s] ease-in-out px-7 py-2 rounded-[30px] hover:border-[#2e7bff] active:opacity-85"
              href={"#portfolio"}
            >
              {t("КЕЙСЫ")}
            </Link>
          </li>
          <li className="mx-9">
            <Link
              className="text-[14px] leading-[1.55] font-bold border border-solid border-transparent transition-all duration-[0.3s] ease-in-out px-7 py-2 rounded-[30px] hover:border-[#2e7bff] active:opacity-85"
              href={"#reviews"}
            >
              {t("ОТЗЫВЫ")}
            </Link>
          </li>
          <li className="mx-9">
            <Link
              className="text-[14px] leading-[1.55] font-bold border border-solid border-transparent transition-all duration-[0.3s] ease-in-out px-7 py-2 rounded-[30px] hover:border-[#2e7bff] active:opacity-85"
              href={"#contact"}
            >
              {t("КОНТАКТЫ")}
            </Link>
          </li>
        </ul>
        <div className="btns-pr lg:flex items-center md:hidden">
          <button className="text-center border border-solid border-[#2e7bff] px-4 py-1 hover:opacity-85">
            <Link
              className="text-[14px] leading-[1.55] font-semibold"
              href={"#"}
              onClick={() => changeLang("uz")}
            >
              UZ
            </Link>
          </button>
          <button className="active-btn text-center border border-solid border-[#2e7bff] px-4 py-1 hover:opacity-85">
            <Link
              className="text-[14px] leading-[1.55] font-semibold"
              href={"#"}
              onClick={() => changeLang("ru")}
            >
              RU
            </Link>
          </button>
        </div>
        {open ? (
          <IoClose
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[32px] text-white cursor-pointer hover:opacity-90"
          />
        ) : (
          <RiMenu3Fill
            onClick={() => setOpen(!open)}
            className="lg:hidden text-[32px] text-white cursor-pointer hover:opacity-85"
          />
        )}{" "}
        {open ? <MobileNav /> : ""}
      </div>
    </header>
  );
};

export default Navbar;
