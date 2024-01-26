/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainButton from "../common/MainButton";

function HeroSection() {
  return (
    <section className="flex items-center justify-between flex-col md:flex-row gap-4">
      <div className="w-1/2">
        <p className="font-[850] md:leading-[81px] text-2xl md:text-[4.375rem] text-darkBlue">We boost growth for your statup business</p>
        <p className="text-[22px] font-[500]">
          Our goal is top at the heart of creativity services industry as a
          digital creator. In has a after comment
        </p>
        <div className="flex gap-4 items-center mt-[3rem]">
        <MainButton text="Get Started" classes="shadow-none" />
            <div className="flex gap-4 items-center">
                <img src="/images/fancy_play_icon.png" alt="play"  />
                <p className="font-bold text-normal">Learn more</p>
            </div>
        </div>
      </div>

      <div className="2/2">
        <img src="/images/happy_guy.png" alt="" className="w-full"/>
      </div>
    </section>
  );
}

export default HeroSection;
