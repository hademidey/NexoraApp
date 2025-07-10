export default function ServicesCard({details}) {
  return (
    
      <div className="rounded-2xl mt-3 pt-5 border border-zinc-200 bg-white overflow-hidden flex items-center flex-col" >
        <div className="rounded-full overflow-hidden w-50 h-50 ">
          <img
            src={details.img}
            alt=""
            className="w-full h-full object-center"
          />
        </div>
        <div className="flex flex-col mt-12 text-center">
          <span className="font-semibold text-2xl ">{details.title}</span>
          <p className=" p-5 items-center pt-3">
            {details.description}
          </p>
          <button className="font-semibold border border-zinc-300 p-2">READ MORE</button>
        </div>
      </div>

  );
}