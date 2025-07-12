import React from "react";
import Logo from "./Logo";
import Contacts from "./Contacts";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white mt-18">
      <div className="items-center flex flex-col w-[90%] md:w-[40%] mx-auto justify-center shadow-md p-3 rounded-br-3xl rounded-bl-2xl  bg-[#F5FCFF] ">
        <Logo size="md:text-3xl text-2xl" colour="text-black" bold="font-bold" />
      </div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center pt-20">
        {/* About */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-4">ABOUT US</h2>
          <p className="text-sm text-gray-300  ">
            We have 20+ years of experience solving business challenges and
            positioning our clients for long-term success.
          </p>
          <div>
            <Contacts />
          </div>
        </div>

        {/* Services */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-4">SERVICES</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Strategic Planning</li>
            <li>Market Analysis</li>
            <li>Finance Planning</li>
            <li>Investment Ideas</li>
            <li>Digital Solutions</li>
          </ul>
        </div>

        {/* Recent News */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-4">RECENT NEWS</h2>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-2 justify-center pt-5">
              <div className="object-contain">
                <img src="/img/footer1.png" alt="" />
              </div>
              <div className="flex flex-col ">
                <strong className="text-white flex flex-col ">
                  Providing all types of business
                </strong>{" "}
               
                <span>15th Jan, 2025</span>
              </div>
            </li>
            <li className="flex gap-2 justify-center">
              <div className="object-contain w-17 ">
                <img src="/img/footer2.png" alt="" />
              </div>
              <div className=" flex flex-col">
                <strong className="text-white">
                  {" "}
                  People saying about business
                </strong>{" "}
                
                <span>8th Jan, 2025</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-lg font-bold mb-4">NEWSLETTER</h2>
          <p className="text-sm text-gray-300 mb-4">
            Subscribe for updates and discounts
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-3">
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-full text-white w-full sm:w-auto border border-white"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 transition px-5 py-2 rounded-full text-sm font-semibold"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        ©2025 Nexora Solution Inc. All rights reserved.
      </div>
    </footer>





























































    // <footer className=" ">
    //   <div className="items-center flex flex-col w-[80%] mx-auto justify-center shadow-md p-5 rounded-br-xl rounded-bl-xl  bg-[#F5FCFF] ">
    //     <Logo size="text-3xl" colour="text-black" bold="font-bold" />
    //   </div>
    //   <div className=" grid grid-cols-1 md:grid-cols-[auto_auto_auto_auto] md:justify-center md:items-center md:h-[400px] border">
    //     <div className="text-center border justify-center items-center flex flex-col md:w-[320px] md:h-full">
    //       <span className="text-white text-2xl font-bold">ABOUT US</span>
    //       <p className="text-white text-xl ">
    //         We have 20+ years of experience, We are committed in solving
    //         business challenges and also position our clients for long-term
    //         success.
    //       </p>
    //       <div className="flex justify-center">
    //         <Contacts />
    //       </div>
    //     </div>

    //     <div className="text-center flex flex-col border justify-center items-center md:w-[320px] md:h-full">
    //       <span className="text-white text-3xl font-bold pt-8">SERVICE</span>
    //       <ul className="text-white  text-xl pt-5">
    //         <li>Strategic Planning</li>
    //         <li>Market Analysis</li>
    //         <li>Finance Planning</li>
    //         <li>Investment Ideas</li>
    //         <li>Digital Solutions</li>
    //       </ul>
    //     </div>

    //     <div className="border md:w-[320px] flex flex-col justify-center items-center md:h-full">
    //       <span className="text-white text-center text-3xl font-bold pt-8">
    //         RECENT NEWS
    //       </span>
    //       <div className="flex justify-center">
    //         <div className="flex it gap-2 h-30 pt-8">
    //
    //           <div className="flex flex-col">
    //             <span className="text-white font-bold">
    //               Providing all types of business
    //             </span>
    //             <span className="text-white font-bold ">15th Jan, 2025</span>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="flex gap-2 justify-center pt-5">
    //
    //         <div className="flex flex-col">
    //           <span className="text-white font-bold">
    //             People saying about business
    //           </span>
    //           <span className="text-white font-bold ">8th Jan, 2025</span>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="text-center flex flex-col border justify-center items-center md:w-[320px] md:h-full">
    //       <span className="text-white text-3xl font-bold mt-10">
    //         NEWSLETTER
    //       </span>
    //       <p className="text-white font-bold">
    //         Subscribe to our Newsletter for discounts or more
    //       </p>
    //       <div className="mt-5">
    //         <input
    //           type="text"
    //           name=""
    //           id=""
    //           className="bg-white  p-2 rounded-xl"
    //           placeholder="Subscribe with us."
    //         />
    //         <button className="bg-blue-500 p-2 rounded-xl mt-2">
    //           SUBSCRIBE
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="mt-20 flex justify-center text-center">
    //     <span>©2025 Nexora Solution Inc. </span>
    //     <span className="text-blue-700"> All rights reserved</span>
    //   </div>
    // </footer>
  );
}
