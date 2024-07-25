import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

const MobileNav = () => {
  const { t, i18n } = useTranslation();
  const changeLang = (e: string) => {
    i18n.changeLanguage(e);
  };

  return (
    <div className="lg:hidden w-[90%] h-[400px] px-[90px] py-3 mx-auto absolute right-[50%] translate-x-[50%] top-[81px] shadow-black shadow-lg bg-[#2e7bff] transition-all duration-[.7s] text-white flex flex-col items-center justify-center text-base rounded-[10px]">
      <ul className="p-0 m-0 list-none">
        <li className="mb-4">
          <a className="hover:opacity-85" href="#portfolio">
            {t("КЕЙСЫ")}
          </a>
        </li>
        <li className="mb-4">
          <a className="hover:opacity-85" href="#reviews">
            {t("ОТЗЫВЫ")}
          </a>
        </li>
        <li className="mb-4">
          <a className="hover:opacity-85" href="#contact">
            {t("КОНТАКТЫ")}
          </a>
        </li>
        <div className="btn-group flex items-center">
          <button className="text-center border border-solid border-[#2e7bff] px-4 py-1 hover:opacity-85">
            <Link
              className="text-[14px] leading-[1.55] font-semibold"
              href={"/uz"}
              onClick={() => changeLang("uz")}
            >
              UZ
            </Link>
          </button>
          <button className="active-mobilebtn text-center border border-solid border-[#2e7bff] px-4 py-1 hover:opacity-85">
            <Link
              className="text-[14px] leading-[1.55] font-semibold"
              href={"/ru"}
              onClick={() => changeLang("ru")}
            >
              RU
            </Link>
          </button>
        </div>
      </ul>
    </div>
  );
};

export default MobileNav;
