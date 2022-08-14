import React from 'react'
import { Accordion, Typography, AccordionSummary, CircularProgress, AccordionDetails } from '@mui/material'


export interface Props{
    value: number,
    handleChangePanel: any,
    expanded: string | boolean,
    panelName: string,
    color: string
}

export default function MyAccordion(props: Props) {
    const {value, handleChangePanel, expanded, panelName, color } = props;
  return (
    <Accordion
        expanded={expanded === panelName}
        onChange={handleChangePanel(panelName)}
      >
        <AccordionSummary>
          <CircularProgress
            variant="determinate"
            value={value}
            size={60}
            sx={{ padding: "0px 5px", color: `${color}` }}
          />
          <Typography
            variant="body1"
            color="initial"
            sx={{ padding: "0px 20px" }}
          >
            {panelName}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" color="initial">
            {}
          </Typography>
        </AccordionDetails>
      </Accordion>
  )
}
