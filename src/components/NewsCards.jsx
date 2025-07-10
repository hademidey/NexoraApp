import React from 'react'

export default function NewsCards({details}) {
  return (
      <div className="rounded-2xl mt-3 py-5 shadow-md bg-white overflow-hidden flex items-center flex-col">
        <div className="rounded  w-70 h-50 ">
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
        </div>
      </div>
  )
}
