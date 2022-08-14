import React from "react";
import EcosystemIcons from "../components/EcosystemIcons";
import EcosystemAccordion from "../components/EcosystemAccordion.tsx";

export default function Ecosystem() {
  return (
    <div
      style={{
        display: "flex",
        alightItems: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
      }}
    >
      <EcosystemIcons />
      <EcosystemAccordion />
    </div>
  );
}
