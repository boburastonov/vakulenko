"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ReactSlider from "react-slider";
import Image from "next/image";
import Author from "../../../assets/author.jpeg";
import { useTranslations } from "next-intl";

const MIN = 30;
const MAX = 500;

const AuthForm: React.FC = () => {
  const t = useTranslations();
  const [inputValue, setInputValue] = useState<string>("");
  const [regValue, setRegValue] = useState<string>("");
  const [checkValue, setCheckValue] = useState<string>("");
  const [value, setValue] = useState<string | undefined>(undefined);
  const [sliderValue, setSliderValue] = useState<number | undefined>();
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const handleRegChange = (event: any) => {
    setRegValue(event.target.value);
  };
  const handleCheckChange = (event: any) => {
    setCheckValue(event.target.value);
  };

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const notify = () => toast.success("Your data has been sent successfully!");
    if (!value || !inputValue) {
      toast.error("Please fill in following fields.");
      return;
    }
    const token = "7229813830:AAFlDf6El0NDlFH5wod5x8vT1jV-IJhEKU8";
    const chat_id = "5730538728";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const messageContent = `Name: ${inputValue} \nPhone Number: ${value} \nPromotion Region: ${regValue} \nAverage bill: ${checkValue} \nClients count:${sliderValue}`;

    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        setInputValue(""),
          setValue(""),
          setRegValue(""),
          setCheckValue(""),
          setSliderValue(undefined),
          notify();
      })
      .catch((err) => {
        const notify = () =>
          toast.error("Your data has not been sent successfully!");
        console.log("Yuborishda xatolik,", err);
      });
  };

  return (
    <section className="pt-10 pb-8 bg-black">
      <div className="max-w-7xl mx-auto px-3 flex lg:justify-between justify-center items-center">
        <div className="form-pr lg:w-[48%] lg:text-left w-[80%] text-center ">
          <h2 className="lg:mb-8 md:mb-6 lg:relative md:text-[42px] md:leading-[65px] leading-[45px] mb-4 text-[29px] font-bold">
            {t("Есть конкретная цель")}{" "}
            <span className="lg:block absolute w-[120px] right-[127px] bottom-[6px] h-[2px] bg-[#2e7bff]"></span>
          </h2>
          <p className="md:mb-12 md:text-[20px] md:leading-[31px] leading-[28px] mb-8 text-[18px] font-normal">
            {t(
              "Заполняйте форму и укажите желаемое количество клиентов, а я предложу путь к достижению Ваших целей"
            )}
          </p>
          <form
            onSubmit={sendMessage}
            id="message-form"
            className="lg:w-[80%] w-[90%]"
          >
            <input
              id="name"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder={t("Имя")}
              required
              autoComplete="off"
              className="w-full md:h-[50px] text-black h-11 bg-[#fff] rounded-[30px] text-base md:px-5 md:mb-6 font-normal border border-solid border-[#e0e0e0] p-0 px-4 mb-5 outline-none cursor-pointer"
            />
            <PhoneInput
              placeholder="(99) 999 99 99"
              value={value}
              type="tel"
              international
              defaultCountry="UZ"
              required
              onChange={setValue}
              className="w-full md:h-[50px] text-black h-11 bg-[#fff] rounded-[30px] text-base md:px-5 md:mb-6 font-normal border border-solid border-[#e0e0e0] p-0 px-4 mb-5 outline-none cursor-pointer"
            />
            <input
              id="region"
              type="text"
              value={regValue}
              onChange={handleRegChange}
              placeholder={t("Регион продвижения")}
              autoComplete="off"
              className="w-full md:h-[50px] text-black h-11 bg-[#fff] rounded-[30px] text-base md:px-5 md:mb-6 font-normal border border-solid border-[#e0e0e0] p-0 px-4 mb-5 outline-none cursor-pointer"
            />
            <input
              id="check"
              type="text"
              value={checkValue}
              onChange={handleCheckChange}
              placeholder={t("Средний чек")}
              autoComplete="off"
              className="w-full md:h-[50px] text-black h-11 bg-[#fff] rounded-[30px] text-base md:px-5 md:mb-6 font-normal border border-solid border-[#e0e0e0] p-0 px-4 mb-5 outline-none cursor-pointer"
            />
            <p className="text-[20px] font-normal leading-[2rem] mb-4">
              {t("Сколько клиентов необходимо до цели?")}
            </p>
            <label className="mb-5">Clients: {sliderValue}</label>
            <ReactSlider
              className="horizontal-slider relative w-full mb-5 mt-5 h-[6px] rounded-[50px] "
              thumbClassName="example-thumb"
              trackClassName="example-track"
              value={sliderValue}
              min={MIN}
              max={MAX}
              onChange={setSliderValue}
              pearling
              minDistance={10}
            />
            <div className="flex items-center justify-between">
              <p className="text-[20px] font-normal leading-[32px] mb-4">30</p>
              <p className="text-[20px] font-normal leading-[32px] mb-4">500</p>
            </div>
            <button className="w-full md:text-[14px] text-[12px] text-white bg-[#2e7bff] border border-solid border-[#2e7bff] md:py-3 py-2 px-[30px] text-center inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all duration-[0.3s] hover:opacity-90">
              {t("УЗНАТЬ РЕЗУЛЬТАТ")}
            </button>
            <ToastContainer />
          </form>
        </div>
        <div className="lg:block hidden w-[48%] -mt-[130px]">
          <Image
            className="w-full h-auto"
            src={Author}
            width={560}
            height={841}
            alt="Author"
          />
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
