import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Mario from "../../../assets/Mario.jpeg";
import StatsSection from "./StatsSection";

export default function Statsbar() {
  const [statsOpen, setStatsOpen] = useState(true);

  return (
    <div
      className={`mb-5 flex rounded-b-lg bg-secondary px-3 py-2 ${
        statsOpen ? "h-40" : "h-10"
      }`}
    >
      <div>
        <img
          src={Mario}
          alt={"Ari's Profile"}
          className={`mx-auto mb-2 h-28 w-28 rounded-full ${
            !statsOpen && "hidden"
          }`}
        />
        <div className="flex self-end">
          <h1 className="whitespace-pre font-bold text-primary">Ari-the-don</h1>
          <h1 className="whitespace-pre pl-2 text-primary opacity-75">
            · Level 1
          </h1>
        </div>
      </div>
      <StatsSection statsOpen={statsOpen} />
      {statsOpen ? (
        <ChevronUpIcon
          className="h-10 w-10 self-end"
          onClick={() => setStatsOpen(!statsOpen)}
        />
      ) : (
        <ChevronDownIcon
          className="h-10 w-10 self-end"
          onClick={() => setStatsOpen(!statsOpen)}
        />
      )}
    </div>
  );
}
