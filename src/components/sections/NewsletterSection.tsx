/* eslint-disable @next/next/no-img-element */
import React from "react";
import Header from "../common/Header";
import { Input } from "../ui/input";
import MainButton from "../common/MainButton";

function NewsletterSection() {
  return (
    <section className="mt-[9rem]">
      <Header title="OUR NEWSLETTER" subtitle="Subscribe Our Newsleter" />
      <div className="flex flex-col md:flex-row items-center mt-8 md:mt-[3.75rem]">
        <div className="w-[35%]">
          <img
            src="/images/newsletter_large_icon.png"
            alt=""
            className="w-[10rem] md:w-full"
          />
        </div>
        <div className="mx-[10px] w-[65%]">
          <p className="mb-[1.44rem] text-normal font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam
          </p>
          <Input
            type="email"
            placeholder="Your Email here..."
            className="h-[57px] rounded-[49px] newsshadow"
          />

          <div className="mt-[3.12rem]">
            <MainButton text="Subscribe Our Newsletter" width="full_width" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSection;
