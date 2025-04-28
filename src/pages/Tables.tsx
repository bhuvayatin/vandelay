import { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Grid,
  Stack,
  Avatar,
  LinearProgress,
  Chip,
  useMediaQuery,
} from "@mui/material";
import {
  MoreVert,
} from "@mui/icons-material";
import Header from "../component/MainHeader";
import Sidebar from "../component/Sidebar";
import CommonTable from "../component/CommonTable";
import member1 from "../assets/users/Image.png";
import member2 from "../assets/users/Image (1).png";
import member3 from "../assets/users/Image (2).png";
import member4 from "../assets/users/Image (3).png";
import member5 from "../assets/users/Image (4).png";
import member6 from "../assets/users/Image (5).png";

import comapnie1 from "../assets/companies/Icon (1).png";
import comapnie2 from "../assets/companies/Icon (2).png";
import comapnie3 from "../assets/companies/Icon (3).png";
import comapnie4 from "../assets/companies/Icon (4).png";
import comapnie6 from "../assets/companies/Icon.png";
import Footer from "../component/Footer";

const drawerWidth = 266.5;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open" && prop !== "isMobile",
})<{ open?: boolean; isMobile?: boolean }>(({ theme, open, isMobile }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: 0, 
  width: "100%",  
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
  ...(!open && isMobile && {
    padding: theme.spacing(0),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Tables = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = useState(!isMobile);
  useEffect(() => {
    if (isMobile) {
      setOpen(false); 
    } else {
      setOpen(true); 
    }
  }, [isMobile]);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const columns = [
    { id: "author", label: "AUTHOR" },
    { id: "function", label: "FUNCTION" },
    { id: "status", label: "STATUS" },
    { id: "employed", label: "EMPLOYED" },
    { id: "action", label: "" },
  ];

  const rows = [
    {
      author: {
        name: "Elaine Benes",
        email: "elaine@vandelay.com",
        logo: member1,
      },
      function: "Manager",
      function_field: "Organization",
      status: "Online",
      employed: "14/06/21",
    },
    {
      author: {
        name: "Sida Holland",
        email: "sida@vandelay.com",
        logo: member2,
      },
      function: "Programmer",
      function_field: "Developer",
      status: "Online",
      employed: "14/06/21",
    },
    {
      author: {
        name: "Cosmo Kramer",
        email: "kramer@vandelay.com",
        logo: member3,
      },
      function: "Executive",
      function_field: "Projects",
      status: "Online",
      employed: "14/06/21",
    },
    {
      author: {
        name: "Newman",
        email: "newman@usps.com",
        logo: member4,
      },
      function: "Manager",
      function_field: "Organization",
      status: "Online",
      employed: "14/06/21",
    },
    {
      author: {
        name: "Frank Costanza",
        email: "frank@vandelay.com",
        logo: member5,
      },
      function: "Programmer",
      function_field: "Developer",
      status: "Online",
      employed: "14/06/21",
    },
    {
      author: {
        name: "Art VanDelay",
        email: "art.el@vandelay.com",
        logo: member6,
      },
      function: "Designer",
      function_field: "UMAX Design",
      status: "Online",
      employed: "14/06/21",
    },
  ];

  const columns1 = [
    { id: "company", label: "COMPANIES" },
    { id: "budget", label: "BUDGET" },
    { id: "status", label: "STATUS" },
    { id: "completion", label: "COMPLETION" },
    { id: "action", label: "" },
  ];

  const rows1 = [
    {
      company: {
        name: "Chakra Soft UI Version",
        logo: comapnie6,
      },
      status: "Working",
      budget: "$14,000",
      completion: 60,
    },
    {
      company: {
        name: "Add Progress Track",
        logo: comapnie1,
      },
      status: "Canceled",
      budget: "$3,000",
      completion: 10,
    },
    {
      company: {
        name: "Fix Platform Errors",
        logo: comapnie2,
      },
      status: "Done",
      budget: "Not set",
      completion: 100,
    },
    {
      company: {
        name: "Launch our Mobile App",
        logo: comapnie3,
      },
      status: "Done",
      budget: "$32,000",
      completion: 100,
    },
    {
      company: {
        name: "Add the New Pricing Page",
        logo: comapnie4,
      },
      status: "Working",
      budget: "$400",
      completion: 25,
    }
  ];

  return (
    <>
      <Box sx={{ display: "flex" }}>
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />

      <Drawer
        sx={{
          width: open && !isMobile ? drawerWidth : 0,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#F8F9FA",
            borderRight: "none",
            px: "18px",
            pt: 3,
            overflow: "hidden",
          },
        }}
        variant={isMobile ? "temporary" : "persistent"} 
        anchor="left"
        open={open}
        onClose={handleDrawerClose} 
        ModalProps={{
          keepMounted: true, 
        }}
      >
        <Sidebar open={open} />
      </Drawer>
        <Main
          open={open}
          isMobile={isMobile}
        >
          <DrawerHeader />

          <Grid container spacing={2}>
            <Grid size={12}>
              <CommonTable
                title="Authors Table"
                columns={columns}
                pedding={"11px"}
                rows={rows}
                renderCell={(id, value, row: any) => {
                  if (id === "author" && typeof value === "object") {
                    return (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar
                          src={value.logo}
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: 0,
                            objectFit: "cover",
                          }}
                        />
                        <Box>
                          <Typography
                            sx={{
                              color: "#2D3748",
                              fontSize: "14px",
                              fontWeight: 600,
                            }}
                          >
                            {value.name}
                          </Typography>
                          <Typography
                            sx={{
                              color: "#A0AEC0",
                              fontSize: "14px",
                            }}
                          >
                            {value.email}
                          </Typography>
                        </Box>
                      </Stack>
                    );
                  }

                  if (id === "function" && typeof value === "string" && row.function_field) {
                    return (
                      <Box>
                        <Typography
                          sx={{
                            color: "#2D3748",
                            fontSize: "14px",
                            fontWeight: 600,
                          }}
                        >
                          {value}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#A0AEC0",
                            fontSize: "14px",
                          }}
                        >
                          {row.function_field}
                        </Typography>
                      </Box>
                    );
                  }

                  if (id === "status") {
                    return (
                      <Chip
                        label={value}
                        size="small"

                        sx={{
                          bgcolor: value === "Online" ? "#48BB78" : "#E2E8F0",
                          color: value === "Online" ? "white" : "#2D3748",
                          borderRadius: "8px",
                          fontSize: "14px",
                          fontWeight: 700
                        }}
                      />
                    );
                  }

                  if (id === "employed") {
                    return (
                      <Chip
                        label={value}
                        size="small"

                        sx={{
                          bgcolor: "#fff",
                          borderRadius: "8px",
                          fontSize: "14px",
                          fontWeight: 700
                        }}
                      />
                    );
                  }

                  if (id === "action") {
                    return (
                      <Typography
                        sx={{
                          color: "#718096",
                          fontSize: "12px",
                          fontWeight: 400,
                          cursor: "pointer",
                          "&:hover": {
                            textDecoration: "underline",
                          },
                        }}
                      >
                        Edit
                      </Typography>
                    );
                  }

                  return (
                    <Typography
                      sx={{
                        color: "#2D3748",
                        fontSize: "14px",
                        fontWeight: 700
                      }}
                    >
                      {value}
                    </Typography>
                  );
                }}
              />
            </Grid>
            <Grid size={12}>
              <CommonTable
                title="Projects"
                subtitle="30 done this month"
                pedding="19px"
                columns={columns1}
                rows={rows1}
                renderCell={(id, value) => {
                  if (id === "company" && typeof value === "object") {
                    return (
                      <Stack direction="row" alignItems="center" spacing={1}>
                        <Avatar
                          src={value.logo}
                          sx={{
                            width: "20px",
                            height: "19.99px",
                            borderRadius: 0, 
                            objectFit: "cover", 
                          }}
                        />
                        <Typography
                          sx={{
                            color: "#2D3748",
                            fontSize: "14px",
                            fontWeight: 600,
                            marginLeft: "17px !important",
                          }}
                        >
                          {value.name}
                        </Typography>
                      </Stack>
                    );
                  }

                  if (id === "status") {
                    return (
                      <Chip
                        label={value}
                        size="small"

                        sx={{
                          bgcolor: "#fff",
                          borderRadius: "8px",
                          fontSize: "14px",
                          fontWeight: 700
                        }}
                      />
                    );
                  }
                  if (id === "action") {
                    return (
                      <IconButton
                        aria-label="menu"
                        size="small"
                        sx={{ p: 0 }}
                      >
                        <MoreVert sx={{ fontSize: "14px" }} />
                      </IconButton>
                    );
                  }
                  if (id === "completion" && typeof value === "number") {
                    return (
                      <Stack spacing={0.5}>
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: 700,
                            color: "#4FD1C5",
                          }}
                        >
                          {value}%
                        </Typography>
                        <LinearProgress
                          variant="determinate"
                          value={value}
                          sx={{
                            height: 3,
                            width: '120px',
                            borderRadius: 5,
                            backgroundColor: "#E2E8F0",
                            "& .MuiLinearProgress-bar": {
                              backgroundColor: "#4FD1C5",
                              height: 2,
                            },
                          }}
                        />
                      </Stack>
                    );
                  }

                  return (
                    <Typography
                      sx={{
                        color: "#2D3748",
                        fontSize: "14px",
                        fontWeight: 700,
                      }}
                    >
                      {value}
                    </Typography>
                  );
                }}
              />
            </Grid>
          </Grid>
          <Footer
          sx={{
            marginTop: "0",
            backgroundColor: "#f8f8f8",
            padding: "20px",
            width: isMobile?"90%":"98%",
          }}
          style="0"
        />
        </Main>
      </Box>
    </>
  );
};

export default Tables;
