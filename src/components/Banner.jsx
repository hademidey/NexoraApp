export default function Banner() {
  return (
    <div
      className="relative w-full h-full flex items-center text-white"
      id="home"
    >
      <div className="absolute w-full h-full -z-10">
        <div className="relative w-full h-full">
          <img
            src="/img/Banner2.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-950 opacity-95"></div>
        </div>
      </div>
      <div className=" ml-4 md:ml-16">
        <div className="p-2 h-40 w-[331px] md:w-[900px] ">
          <span className="text-xl text-blue-700 md:text-3xl">Welcome To</span>
          <h1 className="text-6xl md:text-8xl">Nexora Solution Inc</h1>
          <p className="mt-2 mb-4 md:text-xl">
            Your trusted partner in business solutions leading your business to
            success.{" "}
          </p>
          <button className="bg-blue-500 p-3 rounded cursor-pointer">
            Discover More
          </button>
          <button className="cursor-pointer ml-6 ">Get A Quote</button>
        </div>
      </div>
    </div>
  );
}
