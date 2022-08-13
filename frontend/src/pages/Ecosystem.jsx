import React, { useState } from "react";

import EcosystemIcons from "../components/EcosystemIcons";
import MinimizeButton from "../components/MinimizeButton";
import EcosystemAccordion from "../components/EcosystemAccordion";

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
