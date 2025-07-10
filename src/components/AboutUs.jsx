export default function AboutUs() {
  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-4" id="about">
 <div className="items-center flex flex-col justify-center m-12 ">
        <span className="text-blue-700 text-5xl center font-bold">ABOUT US</span>
        <h1 className="text-4xl text-center font-bold mb-4 mt-5">
          Empowering Businesses With Innovative Solutions
        </h1>
        <p className="mt-2 text-[20.2px] ml-5 mb-4 text-center justify-center md:w-[620px]">
          We are leading company providing innovative solutions to help business
          grow. Our team is dedicated to delivering high-quality services and
          products tailored to your needs
        </p>

        <h2 className="text-4xl text-center font-bold mb-4">Our Mission</h2>
        <p className="text-center justify-center mt-2 text-[20.2px] ml-5 mb-4 md:w-[720px]">
          At Nexora Solution Inc, our mission is to empower businesses with
          innovative solutions that drive growth and efficiency. We are
          committed to delivering exceptional service and value to our clients.
        </p>
      </div>

      <div className="rounded-lg w-[80%]">
        <img src="/img/pix2.png" alt="" className="w-full h-full " />
      </div>

     
    </div>
  );
}
