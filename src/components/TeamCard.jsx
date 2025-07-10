


export default function TeamCard({ details }) {
  return (
    
      <div className="rounded-2xl mt-3 px-10 py-5 border border-zinc-200 bg-white overflow-hidden flex items-center flex-col">
        <div className="rounded-full overflow-hidden border w-50 h-50 ">
          <img
            src={details.image}
            alt=""
            className="w-full h-full object-cover "
          />
        </div>
        <div className="flex flex-col mt-12 text-center">
          <span className="font-semibold text-2xl ">{details.name}</span>
          <p className=" p-5 items-center pt-3">
            {details.position}
          </p>
        </div>
        
      </div>

   

  );
}