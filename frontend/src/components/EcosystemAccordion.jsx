import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  CircularProgress,
  Typography,
} from "@mui/material";

export default function EcosystemAccordion({expanded, handleChangePanel, productivityValue, healthValue, artValue, funValue}) {
  return (
    <div>
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
      <Accordion expanded={expanded === "art"} onChange={handleChangePanel("art")}>
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
      <Accordion expanded={expanded === "fun"} onChange={handleChangePanel("fun")}>
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
