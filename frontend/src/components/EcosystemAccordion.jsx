import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import MinimizeButton from "./MinimizeButton";

export default function EcosystemAccordion({}) {
  const [productivityValue, setProductivityValue] = React.useState(0);
  const [healthValue, setHealthValue] = React.useState(0);
  const [artValue, setArtValue] = React.useState(0);
  const [funValue, setFunValue] = React.useState(0);

  const ecosystemIcons = useSelector((state) => state.ecosystemIcons);

  //Health
  React.useEffect(() => {
    setHealthValue(
      ecosystemIcons.isPhoneActive * 35 +
        ecosystemIcons.isWatchActive * 35 +
        ecosystemIcons.isBudsActive * 15 +
        ecosystemIcons.isTvActive * 15
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
      ecosystemIcons.isPhoneActive * 30 +
        ecosystemIcons.isWatchActive * 20 +
        ecosystemIcons.isBudsActive * 15 +
        ecosystemIcons.isTvActive * 15 +
        ecosystemIcons.isTabActive * 20
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
      ecosystemIcons.isPhoneActive * 30 +
        ecosystemIcons.isWatchActive * 10 +
        ecosystemIcons.isBudsActive * 20 +
        ecosystemIcons.isTvActive * 10 +
        ecosystemIcons.isTabActive * 30
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
      ecosystemIcons.isBudsActive * 15 +
        ecosystemIcons.isPhoneActive * 35 +
        ecosystemIcons.isTabActive * 35 +
        ecosystemIcons.isWatchActive * 15
    );
  }, [
    ecosystemIcons.isPhoneActive,
    ecosystemIcons.isBudsActive,
    ecosystemIcons.isTabActive,
    ecosystemIcons.isWatchActive,
  ]);

  const handleChangePanel = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const [expanded, setExpanded] = React.useState(false);
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
      <Accordion
        expanded={expanded === "productivity"}
        onChange={handleChangePanel("productivity")}
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
        onChange={handleChangePanel("health")}
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
            some text
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "art"}
        onChange={handleChangePanel("art")}
      >
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
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "fun"}
        onChange={handleChangePanel("fun")}
      >
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
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
