"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import Whatsapp from "../../../assets/whatsapp.png";
import Telegram from "../../../assets/telegram.png";
import Viber from "../../../assets/viber.png";
import Facebook from "../../../assets/facebook.png";
import Instagram from "../../../assets/instagram.png";
import { useTranslations } from "next-intl";

const Footer: React.FC = () => {
  const t = useTranslations();
  const [activeButton, setActiveButton] = useState("button1");
  const [inputValue, setInputValue] = useState<string>("");
  const [value, setValue] = useState<string | undefined>(undefined);
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setActiveButton(window.location.pathname);
  }, []);

  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const notify = () => toast.success("Your data has been sent successfully!");
    if (!value || !inputValue) {
      toast.error("Please fill in both fields.");
      return;
    }
    const token = "7229813830:AAFlDf6El0NDlFH5wod5x8vT1jV-IJhEKU8";
    const chat_id = "5730538728";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    // const name = document.getElementById("name").value;
    // const phoneNumber = document.getElementById("phone-number").value;
    const messageContent = `Name: ${inputValue} \nPhone Number: ${value}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        // document.getElementById("message-form")?.onreset();
        notify();
      })
      .catch((err) => {
        const notify = () =>
          toast.error("Your data has not been sent successfully!");
        console.log("Yuborishda xatolik,", err);
      });
  };

  return (
    <footer className="footer pt-[100px]">
      <div className="max-w-7xl mx-auto px-3 flex flex-col items-center">
        <div className="w-full flex items-center md:justify-evenly md:flex-row flex-col mb-12">
          <div className="w-[48%] pr-3 flex flex-col items-center">
            <h1 className="md:text-[42px] md:leading-[65px] md:font-bold md:mb-5 text-[37px] leading-[50px] font-semibold mb-3 text-center">
              {t("Мои контакты")}
            </h1>
            <div className="flex items-center md:justify-between md:mb-10 md:flex-row flex-col mb-7">
              <div className="social flex">
                <Link
                  href={"https://www.whatsapp.com/"}
                  target="_blank"
                  className="mr-3"
                >
                  <Image src={Whatsapp} width={32} height={32} alt="Whatsapp" />
                </Link>
                <Link
                  href={"https://www.telegram.org/"}
                  target="_blank"
                  className="mr-3"
                >
                  <Image src={Telegram} width={32} height={32} alt="Telegram" />
                </Link>
                <Link
                  href={"https://www.viber.com/eng"}
                  target="_blank"
                  className="mr-3"
                >
                  <Image src={Viber} width={32} height={32} alt="Viber" />
                </Link>
              </div>
              <div className="ml-2">
                <Link
                  href={"tel:+998931693454"}
                  className="text-[22px] text-white leading-[34px] font-normal"
                >
                  +998931693454
                </Link>
              </div>
            </div>
            <div className="mb-10 text-center">
              <Link
                href={"mailto:boburastonov33@gmail.com"}
                className="text-[22px] text-white leading-[34px] font-normal"
              >
                boburastonov33@gmail.com
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href={"https://facebook.com/"}
                target={"_blank"}
                className="mx-3"
              >
                <Image src={Facebook} width={50} height={50} alt={"Facebook"} />
              </Link>
              <Link
                href={"https://instagram.com/"}
                target={"_blank"}
                className="mx-3"
              >
                <Image
                  src={Instagram}
                  width={50}
                  height={50}
                  alt={"Instagram"}
                />
              </Link>
            </div>
          </div>
          <div className="w-[48%] flex flex-col items-center">
            <h1 className="md:text-[42px] md:leading-[65px] md:font-bold text-[37px] leading-[50px] font-semibold text-center mb-8 md:m-0 mt-6">
              {t('Есть вопросы? - Пишите!')}
            </h1>
            <form onSubmit={sendMessage} id="message-form">
              <input
                id="name"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder={t("Имя")}
                autoComplete="off"
                className="w-full md:h-[50px] h-11 bg-[#2e2e2e] rounded-[30px] text-base md:font-bold md:px-5 md:mb-6 font-semibold border border-solid border-[#e0e0e0] p-0 px-4 mb-5 outline-none cursor-pointer"
              />
              <PhoneInput
                placeholder="(99) 999 99 99"
                value={value}
                type="tel"
                international
                defaultCountry="UA"
                onChange={setValue}
                className="w-full md:h-[50px] h-11 bg-[#2e2e2e] rounded-[30px] text-base md:font-bold md:px-5 md:mb-6 font-semibold border border-solid border-[#e0e0e0] p-0 px-4 mb-5 cursor-pointer"
              />
              <textarea
                rows={3}
                placeholder={t("Сообщение")}
                className="w-full md:min-h-[110px] h-11 bg-[#2e2e2e] rounded-[30px] text-base md:font-bold md:px-5 md:mb-6 font-semibold border border-solid border-[#e0e0e0] p-0 py-3 px-4 mb-5 outline-none cursor-pointer"
                required
              ></textarea>
              <button className="w-full md:text-[14px] text-[12px] text-white bg-[#2e7bff] border border-solid border-[#2e7bff] md:py-3 py-2 px-[30px] text-center inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all duration-[0.3s] hover:opacity-90">
                {t("ЗАДАТЬ ВОПРОС")}
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
        <div className="py-4">
          <div className="flex mb-3 text-center items-center justify-center">
            <Link
              href={"/uz"}
              className={`${
                activeButton === "/uz" ? " text-[#2e7bff]" : " text-white"
              } text-base leading-[1.55] font-semibold mx-3`}
            >
              UZ
            </Link>
            <Link
              href={"/ru"}
              className={`${
                activeButton === "/ru" ? " text-[#2e7bff]" : " text-white"
              } text-base leading-[1.55] font-semibold mx-3`}
            >
              RU
            </Link>
          </div>
          <h1 className="text-center">
            @ 2015-2024. {t('Все права защищены.')} <br />
            {t("Политика Конфиденциальности")}
          </h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
