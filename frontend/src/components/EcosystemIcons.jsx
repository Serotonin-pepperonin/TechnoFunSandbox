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
import {
  setPhoneActive,
  setWatchActive,
  setTabActive,
  setBudsActive,
  setTvActive,
} from "../store/ecosystemIconsSlice";
import { useSelector, useDispatch } from "react-redux";

export default function EcosystemIcons({}) {
  const ecosystemIcons = useSelector((state) => state.ecosystemIcons);
  const dispatch = useDispatch();

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
          minWidth: "60vw",
          alignSelf: "center",
        }}
      >
        <div style={IconBox} onClick={() => dispatch(setPhoneActive())}>
          <img
            src={ecosystemIcons.isPhoneActive ? phoneon : phoneoff}
            height="70%"
            alt="phone"
            style={{ padding: "0px 5px" }}
          />
        </div>
        <div style={IconBox} onClick={() => dispatch(setWatchActive())}>
          <img
            src={ecosystemIcons.isWatchActive ? watchon : watchoff}
            height="70%"
            alt="watch"
            style={{ padding: "0px 5px" }}
          />
        </div>
        <div style={IconBox} onClick={() => dispatch(setBudsActive())}>
          <img
            src={ecosystemIcons.isBudsActive ? budson : budsoff}
            height="70%"
            alt="buds"
            style={{ padding: "0px 5px" }}
          />
        </div>
        <div style={IconBox} onClick={() => dispatch(setTabActive())}>
          <img
            src={ecosystemIcons.isTabActive ? tabon : taboff}
            height="50%"
            alt="tab"
            style={{ padding: "0px 5px" }}
          />
        </div>
        <div style={IconBox} onClick={() => dispatch(setTvActive())}>
          <img
            src={ecosystemIcons.isTvActive ? sthingson : sthingsoff}
            height="70%"
            alt="tv"
            style={{ padding: "0px 5px" }}
          />
        </div>
      </div>
    </div>
  );
}
