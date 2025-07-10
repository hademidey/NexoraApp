import React from "react";
import { ImQuotesLeft } from "react-icons/im";

export default function Testimonials() {
  return (
    <div
      className="items-center flex flex-col justify-center pt-12 pb-15 bg-[#F5FCFF] "
      id="Testimonials"
    >
      <span className="text-blue-700 font-bold text-2xl">TESTIMONIALS</span>
      <h2 className="font-bold ">Review Our Clients</h2>
      <ImQuotesLeft />
      <p className="items-center flex justify-center pt-2 text-center mt-2 text-[20.2px] ml-5 mb-4 md:w-[720px]">
        "Partnering with Nexora Solution Inc. has transformed our business
        operations.Their innovative solutions and expert guidance have
        significantly increased our efficiency and revenue."
      </p>
      <p>
        <span className="text-blue-700 font-bold text-xl">- Micheal Thompson,</span> CEO
        of InnovateCorp
      </p>
      <div className="flex justify-between pt-5 gap-10 w-64 ">
        <div className="rounded-full overflow-hidden  w-30 h-20 ">
          <img
            src="/img/boss1.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-full overflow-hidden  w-30 h-20 ">
          <img
            src="/img/lian.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-full overflow-hidden  w-30 h-20 ">
          <img
            src="/img/boss3.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
