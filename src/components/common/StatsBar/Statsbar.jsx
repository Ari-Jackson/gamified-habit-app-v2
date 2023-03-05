import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Mario from "../../../assets/Mario.jpeg";
import StatsSection from "./StatsSection";

export default function Statsbar() {
  const [statsOpen, setStatsOpen] = useState(true);

  return (
    <div
      className={`bg-secondary rounded-b-lg duration-500 px-3 py-2 flex ${
        statsOpen ? "h-40" : "h-10"
      }`}
    >
      <div>
        <img
          src={Mario}
          alt={"Ari's Profile"}
          className={`${
            !statsOpen && "hidden"
          } h-28 w-28 rounded-full mx-auto mb-2`}
        />
        <div className="flex self-end">
          <h1 className="font-bold text-slate-700">Ari-the-don</h1>
          <h1 className="text-slate-600 pl-2">· Level 1</h1>
        </div>
      </div>
      <StatsSection statsOpen={statsOpen} />
      {statsOpen ? (
        <ChevronUpIcon
          className="w-10 h-10 self-end"
          onClick={() => setStatsOpen(!statsOpen)}
        />
      ) : (
        <ChevronDownIcon
          className="w-10 h-10 self-end"
          onClick={() => setStatsOpen(!statsOpen)}
        />
      )}
    </div>
  );
}
