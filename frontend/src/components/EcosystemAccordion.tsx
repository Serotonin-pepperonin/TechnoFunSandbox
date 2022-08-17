import React from "react";
import { useSelector } from "react-redux";
import MinimizeButton from "./MinimizeButton";
import type { RootState} from '../store'
// @ts-ignore
import MyAccordion from "./MyAccordion.tsx";


export default function EcosystemAccordion() {
  const [productivityValue, setProductivityValue] = React.useState(0);
  const [healthValue, setHealthValue] = React.useState(0);
  const [artValue, setArtValue] = React.useState(0);
  const [funValue, setFunValue] = React.useState(0);

  const ecosystemIcons = useSelector((state: RootState) => state.ecosystemIcons);

  const handleChangePanel = (panel: string) => (event: React.SyntheticEvent, isExpanded:boolean) => {
    setExpanded(isExpanded ? panel : false);
  };
  const [expanded, setExpanded] = React.useState<string|false>(false);

  const accordionData = [
    {value: productivityValue,
      panelName: "Продуктивность",
      color: "rgb(140, 80, 240)"},
    {value: healthValue,
      panelName: "Здоровье",
      color: "rgb(140, 180, 140)"},
    {value: artValue,
      panelName: 'Творчество',
      color: "rgb(40, 180, 240)"},
    {value: funValue,
      panelName: 'Веселье',
      color: "rgb(140, 180, 40)"},
  ]

  //Health
  React.useEffect(() => {
    setHealthValue(
        Number(ecosystemIcons.isPhoneActive) * 35 +
        Number(ecosystemIcons.isWatchActive) * 35 +
        Number(ecosystemIcons.isBudsActive) * 15 +
        Number(ecosystemIcons.isTvActive) * 15
    );
  }, [
    ecosystemIcons.isPhoneActive,
    ecosystemIcons.isBudsActive,
    ecosystemIcons.isTvActive,
    ecosystemIcons.isWatchActive,
  ]);

  //Productivity
  React.useEffect(() => {
    setProductivityValue(
      Number(ecosystemIcons.isPhoneActive) * 30 +
      Number(ecosystemIcons.isWatchActive) * 20 +
      Number(ecosystemIcons.isBudsActive) * 15 +
      Number(ecosystemIcons.isTvActive) * 15 +
      Number(ecosystemIcons.isTabActive) * 20
    );
  }, [
    ecosystemIcons.isPhoneActive,
    ecosystemIcons.isBudsActive,
    ecosystemIcons.isTvActive,
    ecosystemIcons.isWatchActive,
    ecosystemIcons.isTabActive,
  ]);

  //Fun
  React.useEffect(() => {
    setFunValue(
      Number(ecosystemIcons.isPhoneActive) * 30 +
      Number(ecosystemIcons.isWatchActive) * 10 +
      Number(ecosystemIcons.isBudsActive) * 20 +
      Number(ecosystemIcons.isTvActive) * 10 +
      Number(ecosystemIcons.isTabActive) * 30
    );
  }, [
    ecosystemIcons.isPhoneActive,
    ecosystemIcons.isBudsActive,
    ecosystemIcons.isTvActive,
    ecosystemIcons.isWatchActive,
    ecosystemIcons.isTabActive,
  ]);
  //art
  React.useEffect(() => {
    setArtValue(
      Number(ecosystemIcons.isBudsActive) * 15 +
      Number(ecosystemIcons.isPhoneActive) * 35 +
      Number(ecosystemIcons.isTabActive) * 35 +
      Number(ecosystemIcons.isWatchActive) * 15
    );
  }, [
    ecosystemIcons.isPhoneActive,
    ecosystemIcons.isBudsActive,
    ecosystemIcons.isTabActive,
    ecosystemIcons.isWatchActive,
  ]);

  const needMinimazeButton = () => {
    if (expanded) {
      return <MinimizeButton />;
    }
  };
  return (
    <div>
      <div
        style={{ position: "absolute", bottom: "10vh" }}
        onClick={() => setExpanded(false)}
      >
        {needMinimazeButton()}
      </div>
      <div>
        {accordionData.map((panel)=>(
        <MyAccordion
        key={panel.panelName}
        value={panel.value}
        handleChangePanel = {handleChangePanel}
        expanded = {expanded}
        panelName = {panel.panelName}
        color = {panel.color}
        >
        </MyAccordion>))}
      </div>
    </div>
  );
}


