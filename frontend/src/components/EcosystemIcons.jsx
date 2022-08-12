import React from "react";
import { Typography } from "@mui/material";
import budson from "../img/budson.svg";
import budsoff from "../img/budsoff.svg";
import phoneon from "../img/phoneon.svg";
import phoneoff from "../img/phoneoff.svg";
import tabon from "../img/tabon.svg";
import taboff from "../img/taboff.svg";
import watchon from "../img/watchon.svg";
import watchoff from "../img/watchoff.svg";
import sthingson from "../img/sthingon.svg";
import sthingsoff from "../img/sthingsoff.svg";
import { IconBox } from "../styles/IconBox";


export default function EcosystemIcons({
  isPhoneActive,
  setPhoneActive,
  isWatchActive,
  setWatchActive,
  isTabActive,
  setTabActive,
  isBudsActive,
  setBudsActive,
  isTvActive,
  setTvActive,
}) {


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginBottom: "2vh",
      }}
    >
      <Typography sx={{ padding: "10px" }} align="center">
        Выбери устройства из экосистемы Galaxy!
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          maxWidth: "95vw",
          minWidth: "80vw",
          alignSelf: "center",
        }}
      >
        <div style={IconBox} onClick={() => setPhoneActive(!isPhoneActive)}>
          <img
            src={isPhoneActive ? phoneon : phoneoff}
            height="70%"
            alt="phone"
            style={{ padding: "0px 5px" }}
          />
        </div>
        <div style={IconBox} onClick={() => setWatchActive(!isWatchActive)}>
          <img
            src={isWatchActive ? watchon : watchoff}
            height="70%"
            alt="watch"
            style={{ padding: "0px 5px" }}
          />
        </div>
        <div style={IconBox}>
          <img
            src={isBudsActive ? budson : budsoff}
            height="70%"
            alt="buds"
            style={{ padding: "0px 5px" }}
            onClick={() => setBudsActive(!isBudsActive)}
          />
        </div>
        <div style={IconBox} onClick={() => setTabActive(!isTabActive)}>
          <img
            src={isTabActive ? tabon : taboff}
            height="50%"
            alt="tab"
            style={{ padding: "0px 5px" }}
          />
        </div>
        <div style={IconBox} onClick={() => setTvActive(!isTvActive)}>
          <img
            src={isTvActive ? sthingson : sthingsoff}
            height="70%"
            alt="tv"
            style={{ padding: "0px 5px" }}
          />
        </div>
      </div>
    </div>
  );
}
