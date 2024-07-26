"use client";
import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Hero = () => {
  const sendMessage = (e:any) => {
    const notify = () =>
      toast.success("Your reservation has been sent successfully!");
    e.preventDefault();
    const token = "7229813830:AAFlDf6El0NDlFH5wod5x8vT1jV-IJhEKU8";
    const chat_id = "5730538728";
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const name = document.getElementById("name").value;
    const phoneNumber = document.getElementById("phone-number").value;
    const messageContent = `Name: ${name} \nPhone Number: ${phoneNumber}`;


    axios({
      url: url,
      method: "POST",
      data: {
        chat_id: chat_id,
        text: messageContent,
      },
    })
      .then((res) => {
        document.getElementById("message-form")?.onreset();
        notify();
      })
      .catch((err) => {
        console.log("Yuborishda xatolik,", err);
      });
  };

  return (
    <section>
      <div className="max-w-7xl mx-auto px-3 pb-11 flex flex-col lg:flex-row lg:justify-between items-center">
        <div className="lg:w-[50%] self-start lg:py-12 lg:text-left lg:m-0 w-[75%] mx-auto text-center md:mb-7 mb-5">
          <h1 className="text-white lg:text-[59px] lg:mb-10 lg:relative md:text-[55px] text-[47px] font-bold text-center mb-6">
            Таргетолог
            <span className="lg:absolute w-[370px] h-[2px] bg-[#2e7bff] lg:block md:hidden"></span>{" "}
            Антон Вакуленко
          </h1>
          <p className="text-white md:text-[19px] text-base font-normal">
            Увеличу продажи с помощью рекламы в интернете и предоставлю первые
            обращения клиентов уже через 48 часов
          </p>
        </div>
        <div className="lg:w-[40%] lg:p-16 lg:ml-6 md:w-[60%] md:p-14 p-10 m-0 border-[3px] border-solid border-[#2e7bff] text-center text-white bg-[#0000009a]">
          <h2 className="lg:mb-8 md:mb-6 md:text-[24px] mb-4 text-[22px] font-bold ">
            СТРАТЕГИЯ БЕСПЛАТНО
          </h2>
          <p className="lg:mb-12 md:mb-10 md:text-[18px] mb-8 text-[16px] font-normal">
            Напишу стратегию по Таргетированной Рекламе для Вашей компании
            бесплатно и презентую ее!
          </p>
          <form onSubmit={sendMessage} id="message-form">
            <input
              id="name"
              type="text"
              placeholder="Имя"
              autoComplete="off"
              className="w-full md:h-[50px] h-11 bg-[#2e2e2e] rounded-[30px] text-base md:font-bold md:px-5 md:mb-6 font-semibold border border-solid border-[#e0e0e0] p-0 px-4 mb-5 cursor-pointer"
            />
            <input
              type="tel"
              id="phone-number"
              autoComplete="off"
              placeholder="+998 99 899 77 54"
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

export default Hero;