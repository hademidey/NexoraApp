import TeamCard from "./TeamCard";

const TeamCardInfo = [
  {
    image: "/img/lian.png",
    name: "Ethan Lian",
    position: "IT Business Analyst",
  },
  {
    image: "/img/eva.png",
    name: "Emma Eva",
    position: "Financial Analyst",
  },
  {
    image: "/img/caleb.png",
    name: "Caleb Aiden",
    position: "Data Analyst",
  },
  {
    image: "/img/mia.png",
    name: "Sophia Mia",
    position: "Marketing Analyst",
  },
];

export default function OurTeam() {
  return (
    <div className=" pt-12 bg-[#F5FCFF] text-center ">
      <span className="text-blue-700 font-bold text-xl">MEET OUR TEAM</span>
      <h2 className="font-semibold text-2xl mb-4">Our Specialized Team</h2>
      <div className="items-center flex flex-col justify-center gap-3 md:flex-row ">
        {TeamCardInfo.map((service) => (
          <TeamCard details={service} />
        ))}
      </div>
    </div>
  );
}
