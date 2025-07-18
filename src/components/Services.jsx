import ServiceCard from "./ServiceCard";

const ServiceCardInfo = [
  {
    img: "/img/pix3.png",
    title: "Consulting",
    description:
      "Expert advice to improve your business strategy and operations.",
    buttonText: "READ MORE",
  },
  {
    img: "/img/pix4.png",
    title: "Technology ",
    description: "Innovative tech solutions tailored to your company's goals.",
    buttonText: "READ MORE",
  },
  {
    img: "/img/img5.png",
    title: "Support",
    description: "24/7 customer support to ensure your business runs smoothly.",
    buttonText: "READ MORE",
  },
];

export default function Services() {
  return (
    <div
      className="text-center pt-12 bg-[#F5FCFF] px-15"
      id="services"
    >
      <span className="text-blue-700 font-bold text-2xl ">OUR SERVICES</span>
      <h2 className="font-semibold text-2xl mb-4">Services We Provide</h2>
      <div className="flex flex-col justify-center items-center md:flex-row md:gap-6">
        {ServiceCardInfo.map((service) => (
          <ServiceCard details={service} />
        ))}
      </div>
    </div>
  );
}
