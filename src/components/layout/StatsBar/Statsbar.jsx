import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Mario from "../../../assets/images/Mario.jpeg";
import StatsSection from "./StatsSection";

export default function Statsbar() {
  const [statsOpen, setStatsOpen] = useState(true);

  return (
    <div
      className={`mb-5 flex rounded-b-lg bg-secondary px-3 py-2 duration-200 ease-in ${
        statsOpen ? "h-44" : "h-10"
      }`}
    >
      <div className="flex flex-col">
        <div
          className={`${
            !statsOpen && "-translate-y-32"
          } mx-auto duration-200 ease-in`}
        >
          <div className="avatar left-8">
            <div className="my-2 w-24 rounded-full">
              <img src={Mario} alt={"Ari's Profile"} />
            </div>
          </div>
          <div className="flex self-end">
            <h1 className="whitespace-pre font-bold text-primary">
              Ari-the-don
            </h1>
            <h1 className="whitespace-pre pl-2 text-primary opacity-75">
              · Level 1
            </h1>
          </div>
        </div>
      </div>
      <StatsSection statsOpen={statsOpen} />
      {statsOpen ? (
        <ChevronUpIcon
          className="h-10 w-10 self-end hover:cursor-pointer"
          onClick={() => setStatsOpen(!statsOpen)}
        />
      ) : (
        <ChevronDownIcon
          className="h-10 w-10 self-end hover:cursor-pointer"
          onClick={() => setStatsOpen(!statsOpen)}
        />
      )}
    </div>
  );
}
