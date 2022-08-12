import React, { useState } from "react";


import EcosystemIcons from "../components/EcosystemIcons";
import MinimizeButton from "../components/MinimizeButton";
import EcosystemAccordion from "../components/EcosystemAccordion";

export default function Ecosystem() {


  const [isPhoneActive, setPhoneActive] = useState(false);
  const [isWatchActive, setWatchActive] = useState(false);
  const [isTabActive, setTabActive] = useState(false);
  const [isBudsActive, setBudsActive] = useState(false);
  const [isTvActive, setTvActive] = useState(false);

  const [productivityValue, setProductivityValue] = useState(0);
  const [healthValue, setHealthValue] = useState(0);
  const [artValue, setArtValue] = useState(0);
  const [funValue, setFunValue] = useState(0);

  const [expanded, setExpanded] = React.useState(false);

  const needMinimazeButton = () => {
    if (expanded) {
      return <MinimizeButton />;
    }
  };

  //Health
  React.useEffect(() => {
    setHealthValue(
      isPhoneActive * 35 +
        isWatchActive * 35 +
        isBudsActive * 15 +
        isTvActive * 15
    );
  }, [isPhoneActive, isBudsActive, isTvActive, isWatchActive]);

  //Productivity
  React.useEffect(() => {
    setProductivityValue(
      isPhoneActive * 30 +
        isWatchActive * 20 +
        isBudsActive * 15 +
        isTvActive * 15 +
        isTabActive * 20
    );
  }, [isPhoneActive, isBudsActive, isTvActive, isWatchActive, isTabActive]);

  //Fun
  React.useEffect(() => {
    setFunValue(
      isPhoneActive * 30 +
        isWatchActive * 10 +
        isBudsActive * 20 +
        isTvActive * 10 +
        isTabActive * 30
    );
  }, [isPhoneActive, isBudsActive, isTvActive, isWatchActive, isTabActive]);
  //art
  React.useEffect(() => {
    setArtValue(
      isBudsActive * 15 +
        isPhoneActive * 35 +
        isTabActive * 35 +
        isWatchActive * 15
    );
  }, [isPhoneActive, isBudsActive, isTabActive, isWatchActive]);

  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
      <div
        style={{ position: "absolute", bottom: "10vh" }}
        onClick={() => setExpanded(false)}
      >
        {needMinimazeButton()}
      </div>

      <EcosystemIcons
        isPhoneActive={isPhoneActive}
        setPhoneActive={setPhoneActive}
        isWatchActive={isWatchActive}
        setWatchActive={setWatchActive}
        isTabActive={isTabActive}
        setTabActive={setTabActive}
        isBudsActive={isBudsActive}
        setBudsActive={setBudsActive}
        isTvActive={isTvActive}
        setTvActive={setTvActive}
      />

      <EcosystemAccordion
        expanded={expanded}
        setExpanded={setExpanded}
        handleChangePanel={handleChangePanel}
        productivityValue={productivityValue}
        healthValue={healthValue}
        artValue={artValue}
        funValue={funValue}
      />
    </div>
  );
}
