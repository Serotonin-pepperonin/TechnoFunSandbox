import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import budson from "../img/budson.svg";
import budsoff from "../img/budsoff.svg";
import phoneon from "../img/phoneon.svg";
import phoneoff from "../img/phoneoff.svg";
import tabon from "../img/tabon.svg";
import taboff from "../img/taboff.svg";
import watchon from "../img/watchon.svg";
import watchoff from "../img/watchoff.svg";
import tvon from "../img/tvon.svg";
import tvoff from "../img/tvoff.svg";
import MinimizeButton from "../components/MinimizeButton";

export default function Ecosystem() {
  const [isPhoneActive, setPhoneActive] = useState(false);
  const [isWatchActive, setWatchActive] = useState(false);
  const [isTabActive, setTabActive] = useState(false);
  const [isBudsActive, setBudsActive] = useState(false);
  const [isTvActive, setTvActive] = useState(false);
  const [isAnyActive, setAnyActive] = useState(false);

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

  const healthText = () => {
    return "some text";
  };

  //Health
  React.useEffect(() => {
    let value = 0;
    if (isPhoneActive) {
      value += 35;
    }
    if (isWatchActive) {
      value += 35;
    }
    if (isBudsActive) {
      value += 15;
    }
    if (isTvActive) {
      value += 15;
    }

    setHealthValue(value);
  }, [isPhoneActive, isBudsActive, isTvActive, isWatchActive]);

  //Productivity
  React.useEffect(() => {
    let value = 0;
    if (isPhoneActive) {
      value += 30;
    }
    if (isWatchActive) {
      value += 20;
    }
    if (isBudsActive) {
      value += 15;
    }
    if (isTvActive) {
      value += 15;
    }
    if (isTabActive) {
      value += 20;
    }
    setProductivityValue(value);
  }, [isPhoneActive, isBudsActive, isTvActive, isWatchActive, isTabActive]);

  //Fun
  React.useEffect(() => {
    let value = 0;
    if (isPhoneActive) {
      value += 30;
    }
    if (isWatchActive) {
      value += 10;
    }
    if (isBudsActive) {
      value += 20;
    }
    if (isTvActive) {
      value += 10;
    }
    if (isTabActive) {
      value += 30;
    }
    setFunValue(value);
  }, [isPhoneActive, isBudsActive, isTvActive, isWatchActive, isTabActive]);

  //Art
  React.useEffect(() => {
    let value = 0;
    if (isPhoneActive) {
      value += 35;
    }
    if (isWatchActive) {
      value += 15;
    }
    if (isBudsActive) {
      value += 15;
    }
    if (isTabActive) {
      value += 35;
    }
    setArtValue(value);
  }, [isPhoneActive, isBudsActive, isTabActive, isWatchActive]);

  //Any
  React.useEffect(() => {
    if (isPhoneActive) {
      setAnyActive(true);
    } else {
      setAnyActive(false);
    }
    console.log(isAnyActive);
  }, [isPhoneActive, isBudsActive, isTvActive, isWatchActive, isTabActive]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div
      style={{
        display: "flex",
        alightItems: "center",
        flexDirection: "column",
        flexWrap: "nowrap",
      }}
    >
      <div
        style={{ position: "absolute", bottom: "10vh" }}
        onClick={() => setExpanded(false)}
      >
        {needMinimazeButton()}
      </div>
      <Typography sx={{ padding: "10px" }} align="center">
        Выбери устройства из экосистемы Galaxy!
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          maxWidth: "60%",
          alignSelf: "center",
        }}
      >
        <img
          src={isPhoneActive ? phoneon : phoneoff}
          height="60vw"
          alt="phone"
          style={{ padding: "0px 5px" }}
          onClick={() => setPhoneActive(!isPhoneActive)}
        />
        <img
          src={isWatchActive ? watchon : watchoff}
          height="60vw"
          alt="watch"
          style={{ padding: "0px 5px" }}
          onClick={() => setWatchActive(!isWatchActive)}
        />
        <img
          src={isBudsActive ? budson : budsoff}
          height="60vw"
          alt="buds"
          style={{ padding: "0px 5px" }}
          onClick={() => setBudsActive(!isBudsActive)}
        />
        <img
          src={isTabActive ? tabon : taboff}
          height="60vw"
          alt="tab"
          style={{ padding: "0px 5px" }}
          onClick={() => setTabActive(!isTabActive)}
        />
        <img
          src={isTvActive ? tvon : tvoff}
          height="60vw"
          alt="tv"
          style={{ padding: "0px 5px" }}
          onClick={() => setTvActive(!isTvActive)}
        />
      </div>
      <Divider sx={{ padding: "10px" }}></Divider>

      <div>
        <Accordion
          expanded={expanded === "productivity"}
          onChange={handleChange("productivity")}
        >
          <AccordionSummary>
            <CircularProgress
              variant="determinate"
              value={productivityValue}
              size={60}
              sx={{ padding: "0px 5px", color: "rfb(140, 80, 240)" }}
            />
            <Typography
              variant="body1"
              color="initial"
              sx={{ padding: "0px 20px" }}
            >
              Продуктивность
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="initial">
              {}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === "health"}
          onChange={handleChange("health")}
        >
          <AccordionSummary>
            <CircularProgress
              variant="determinate"
              value={healthValue}
              size={60}
              sx={{ padding: "0px 5px", color: "rfb(140, 80, 240)" }}
            />
            <Typography
              variant="body1"
              color="initial"
              sx={{ padding: "0px 20px" }}
            >
              Здоровый образ жизни
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="initial">
              {healthText()}
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "art"} onChange={handleChange("art")}>
          <AccordionSummary>
            <CircularProgress
              variant="determinate"
              value={artValue}
              size={60}
              sx={{ padding: "0px 5px", color: "rfb(140, 80, 240)" }}
            />
            <Typography
              variant="body1"
              color="initial"
              sx={{ padding: "0px 20px" }}
            >
              Творчество
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="initial">
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={expanded === "fun"} onChange={handleChange("fun")}>
          <AccordionSummary>
            <CircularProgress
              variant="determinate"
              value={funValue}
              size={60}
              sx={{ padding: "0px 5px", color: "rfb(140, 80, 240)" }}
            />
            <Typography
              variant="body1"
              color="initial"
              sx={{ padding: "0px 20px" }}
            >
              Развлечения
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1" color="initial">
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
              feugiat. Aliquam eget maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
