import { AppBar, Box, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import tflogo from '../img/tflogo.svg'

export default function Layout() {
  return (
    <>
      <Box>
        <AppBar position="static" color="primary" sx={{marginBottom: "10px", backgroundColor: "black"}}>
          <Toolbar>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              <img src={tflogo} alt="Technofun"/>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
      <Container>
        <Outlet></Outlet>
      </Container>
    </>
  );
}
