"use client";
import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const Contact: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [value, setValue] = useState<string | undefined>(undefined);
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
    <section id="contact" className="contact py-[150px]">
      <div className="max-w-7xl mx-auto px-3 flex items-center justify-between">
        <div className="w-[41%]">
          <h1 className="text-[52px] leading-[65px] font-bold mb-14">
            Готовы к потоку клиентов?
          </h1>
          <p className="text-[19px] leading-[29px] font-normal">
            Увеличу продажи с помощью рекламы в интернете и предоставлю первые
            обращения клиентов уже через 48 часов
          </p>
        </div>
        <div className="lg:w-[40%] lg:p-16 lg:ml-6 md:w-[60%] md:p-14 p-10 m-0 border-[3px] border-solid border-[#2e7bff] text-center text-white bg-[#0000009a] rounded-[30px]">
          <h2 className="lg:mb-8 md:mb-6 md:text-[24px] leading-[37px] mb-4 text-[22px] font-bold">
            СТРАТЕГИЯ БЕСПЛАТНО
          </h2>
          <p className="lg:mb-12 md:mb-10 md:text-[18px] md:leading-[28px] leading-[22px] mb-8 text-[16px] font-normal">
            Заполняйте форму и получите от меня бесплатную стратегию по
            привлечению клиентов в Ваш бизнес!
          </p>
          <form onSubmit={sendMessage} id="message-form">
            <input
              id="name"
              type="text"
              value={inputValue}
              onChange={handleChange}
              placeholder="Имя"
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
            <button className="w-full md:text-[14px] text-[12px] text-white bg-[#2e7bff] border border-solid border-[#2e7bff] md:py-3 py-2 px-[30px] text-center inline-block rounded-[25px] font-medium capitalize tracking-[0.5px] transition-all duration-[0.3s] hover:opacity-90">
              ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
