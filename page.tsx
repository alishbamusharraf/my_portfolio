
"use client";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="text-white body-font bg-gray-900">
      <div
        id="about"
        className="container mx-auto flex px-3 md:px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-[40%] w-5/6 mb-10 md:mb-0">
          <Image
            className="img object-cover object-center mx-auto w-[25rem]"
            alt="hero"
            src={("/picture/aboutss.jpg")}
            width={400}
            height={400}
          />
        </div>


        <div className="lg:flex-grow md:w-[60%] lg:pl-14 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            About Me
          </h1>
          <br className="hidden lg:inline-block" />
          <p className="font mb-8 leading-relaxed text-left ">
            Hi, I'm Alishba, a 18-year-old web Developer from Karachi Pakistan.
            I'm second-year pre-Engneering student. recently i am completing my FSC,
            and i am a student of GIAIC (governor sindh initiative for IT)
            I’ve also developed a strong interest in web development. Currently,
            I’m learning the essentials of HTML, CSS, and JavaScript, TypeScript
            TailwindCSS to create responsive and functional websites. Looking
            ahead, I'm also planning to dive deeper into frameworks like React
            and Next.js Powerful Framework ro enhance to deliver high-quality
            modern web solutions. My goal is to combine my passion for learning
            with technical expertise to create efficient, user-friendly digital
            experiences. Let’s collaborate and bring your ideas to life!
          </p>
          <div className="flex justify-center">
            <button className="button inline-flex text-whit border-0 py-2 px-6 focus:outline-none  text-lg">
              Hire
            </button>
          </div>
        </div>

        
      </div>
    </section>
  );
}