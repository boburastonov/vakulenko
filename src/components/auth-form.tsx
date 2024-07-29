"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import ReactSlider from "react-slider";
import Image from "next/image";
import Author from "../assets/author.jpeg";

const MIN = 30;
const MAX = 500;

const AuthForm: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [value, setValue] = useState<string | undefined>(undefined);
  const [sliderValue, setSliderValue] = useState([MIN, MAX]);
  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

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
    <section className="pt-10 pb-8 bg-black">
      <div className="max-w-7xl mx-auto px-3 flex lg:justify-between justify-center items-center">
        <div className="form-pr lg:w-[48%] lg:text-left w-[80%] text-center ">
          <h2 className="lg:mb-8 md:mb-6 md:text-[42px] md:leading-[65px] leading-[45px] mb-4 text-[29px] font-bold">
            Есть конкретная цель?
          </h2>
          <p className="md:mb-12 md:text-[20px] md:leading-[31px] leading-[28px] mb-8 text-[18px] font-normal">
            Заполняйте форму и укажите желаемое количество клиентов, а я
            предложу путь к достижению Ваших целей
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
              placeholder="Имя"
              autoComplete="off"
              className="w-full md:h-[50px] text-black h-11 bg-[#fff] rounded-[30px] text-base md:px-5 md:mb-6 font-normal border border-solid border-[#e0e0e0] p-0 px-4 mb-5 outline-none cursor-pointer"
            />
            <PhoneInput
              placeholder="(99) 999 99 99"
              value={value}
              type="tel"
              international
              defaultCountry="UA"
              onChange={setValue}
              className="w-full md:h-[50px] text-black h-11 bg-[#fff] rounded-[30px] text-base md:px-5 md:mb-6 font-normal border border-solid border-[#e0e0e0] p-0 px-4 mb-5 outline-none cursor-pointer"
            />
            <input
              id="region"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Регион продвижения"
              autoComplete="off"
              className="w-full md:h-[50px] text-black h-11 bg-[#fff] rounded-[30px] text-base md:px-5 md:mb-6 font-normal border border-solid border-[#e0e0e0] p-0 px-4 mb-5 outline-none cursor-pointer"
            />
            <input
              id="check"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Средний чек"
              autoComplete="off"
              className="w-full md:h-[50px] text-black h-11 bg-[#fff] rounded-[30px] text-base md:px-5 md:mb-6 font-normal border border-solid border-[#e0e0e0] p-0 px-4 mb-5 outline-none cursor-pointer"
            />
            {/* <ReactSlider
              className="horizontal-slider relative w-full max-w-[240px] h-[6px] rounded-[50px] "
              thumbClassName="example-thumb"
              trackClassName="example-track"
              value={sliderValue}
              min={MIN}
              max={MAX}
              onChange={setSliderValue}
              pearling
              minDistance={10}
            /> */}
            {/* <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
            /> */}
            <button className="w-full md:text-[14px] text-[12px] text-white bg-[#2e7bff] border border-solid border-[#2e7bff] md:py-3 py-2 px-[30px] text-center inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all duration-[0.3s] hover:opacity-90">
              УЗНАТЬ РЕЗУЛЬТАТ
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
