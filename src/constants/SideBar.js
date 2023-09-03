import { useState } from 'react';
import { coloring } from "../GlobalTheme";
import { Link } from 'react-router-dom';
import "react-pro-sidebar/dist/css/styles.css";
import {Box, IconButton, Typography, useTheme } from '@mui/material';
import { ProSidebar, Menu, MenuItem } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import PaymentsIcon from '@mui/icons-material/Payments';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import bufficorn from "../assets/imgs/bufficorn.png";
import ReceiptIcon from '@mui/icons-material/Receipt';




const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = coloring(theme.palette.mode);
    return (
      <MenuItem
        active={selected === title}
        style={{
          color: colors.gray[100],
        }}
        onClick={() => setSelected(title)}
        icon={icon}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };


const SideBar = () => {

const theme = useTheme();
const colors = coloring(theme.palette.mode);
// const colorMode = useContext(ColorModeContext);
const [isCollapsed, setIsCollapsed] = useState(false);
const [selected, setSelected] = useState("Dashboard");

return (
  <Box
    sx={{
      "& .pro-sidebar-inner": {
        background: `${colors.gray[800]} !important`,
      },
      "& .pro-icon-wrapper": {
        backgroundColor: "transparent !important",
      },
      "& .pro-inner-item": {
        padding: "10px 35px 5px 20px !important",
      },
      "& .pro-inner-item:hover": {
        color: "#1be7ff !important",
      },
      "& .pro-menu-item.active": {
        color: "#1be7ff  !important",
      },
    }}
  >
    <ProSidebar collapsed={isCollapsed}>
      <Menu iconShape="square">
        <MenuItem
          onClick={() => setIsCollapsed(!isCollapsed)}
          icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
          style={{
            margin: "10px 0 20px 0",
            color: colors.gray[100],
          }}
        >
          {!isCollapsed && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              ml="5px"
            >
           
              <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                <MenuOutlinedIcon />
              </IconButton>
            </Box>
          )}
        </MenuItem>

        {!isCollapsed && (
          <Box mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="user-img"
                width="70px"
                height="70px"
                src={bufficorn}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
    
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h3"
                color={colors.gray[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                Valspin
              </Typography>
            </Box>
          </Box>
        )}

        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
           <Item
            title="Concept"
            to="/concept"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
             <Item
            title="Insurance"
            to="/insurance"
            icon={<PaymentsIcon />}
            selected={selected}
            setSelected={setSelected}
          />
             <Item
            title="Swap"
            to="/swap"
            icon={<SwapHorizIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Typography
            variant="h5"
            color={colors.green[500]}
            sx={{ m: "15px 0 5px 20px" }}
          >
            Data
          </Typography>
        
          <Item
            title="Bar"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Pie"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          <Item
            title="Line"
            to="/line"
            icon={<TimelineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
            <Item
            title="Invoice"
            to="/invoice"
            icon={<ReceiptIcon />}
            selected={selected}
            setSelected={setSelected}
          />
       
        </Box>
        
      </Menu>
    </ProSidebar>
  </Box>
);
};

export default SideBar;


{/* <Item
title="Geo"
to="/geo"
icon={<MapOutlinedIcon />}
selected={selected}
setSelected={setSelected}
/> */}