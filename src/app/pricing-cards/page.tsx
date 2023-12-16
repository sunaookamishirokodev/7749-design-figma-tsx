"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

export default function PricingCards() {
  const [isSelected, setIsSelected] = useState<number>(0);
  return (
    <main className="flex justify-center gap-6 h-screen w-full bg-[#1C243C] text-white">
      {[
        {
          title: "BASIC",
          storage: 100,
          type: "GB",
          desc: "1 month, then $1,7/month",
          firstLine: "100 GB storage",
          secondLine: "Option to add members",
          thirdLine: "Extra member benefits",
        },
        {
          title: "STANDARD",
          storage: 200,
          type: "GB",
          desc: "1 month, then $2,9/month",
          firstLine: "200 GB storage",
          secondLine: "Option to add members",
          thirdLine: "Extra member benefits",
        },
        {
          title: "BASIC",
          storage: 2,
          type: "TB",
          desc: "1 month, then $8,9/month",
          firstLine: "2 TB storage",
          secondLine: "Option to add members",
          thirdLine: "Extra member benefits",
        },
      ].map(({ title, storage, type, desc, firstLine, secondLine, thirdLine }, index) => {
        return (
          <div
            key={index}
            onClick={() => setIsSelected(index)}
            className={`${
              isSelected === index ? "border-[#7B3BF3]" : "border-[#212C4D]"
            } flex flex-col items-center w-[250px] my-auto border-8 p-6 rounded-xl transition-[border] cursor-pointer`}
          >
            <h3 className="text-sm font-semibold mb-4">{title}</h3>
            <div className="mb-1">
              <span className="text-5xl">{storage}</span>
              <span className="text-6xl">{type}</span>
            </div>
            <h4 className="">{desc}</h4>
            <button
              className={`${
                isSelected === index ? "bg-[#7B3BF3]" : "outline outline-1 outline-[#7B3BF3] text-white/70"
              } my-6 py-2 px-10 rounded-md text-sm`}
            >
              Purchase
            </button>
            <div className="w-full bg-[#212C4D] h-0.5 -mx-5 rounded-full" />
            <ul className="flex flex-col items-center mt-5">
              <li className="my-0.5">
                <FaCheck className="inline-block mr-2" />
                <span>{firstLine}</span>
              </li>
              <li className="my-0.5">
                <FaCheck className="inline-block mr-2" />
                <span>{secondLine}</span>
              </li>
              <li className="my-0.5">
                <FaCheck className="inline-block mr-2" />
                <span>{thirdLine}</span>
              </li>
            </ul>
          </div>
        );
      })}
    </main>
  );
}
