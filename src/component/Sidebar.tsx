import React from "react";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  TableChart as TableChartIcon,
  Receipt as ReceiptIcon,
  FormatTextdirectionRToL as RtlIcon,
} from "@mui/icons-material";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
import sideBottomImage from "../assets/sidebar_bottom_bg.png";
import CommonButton from "./CommonButton";
import HelpIcon from '@mui/icons-material/Help';


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface SidebarProps {
  open: boolean;
  handleDrawerClose?: () => void;
}

interface MenuItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}

const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
    { text: "Tables", icon: <TableChartIcon />, path: "/tables" },
    { text: "Billing", icon: <ReceiptIcon />, path: "/" },
    { text: "RTL", icon: <RtlIcon />, path: "/" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return (
    <Box
      sx={{
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          backgroundColor: "#F8F9FA",
          borderRight: "none",
          px: "18px",
          pt: 3,
        },
      }}
    >
      <DrawerHeader>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          <Box
            component="img"
            src={logo}
            alt="Logo"
            sx={{ width: 22, height: 22, marginRight: 1.5 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "150%",
            }}
          >
            VANDELAY INDUSTRIES
          </Typography>
        </Box>
      </DrawerHeader>
      <Divider
        sx={{
          width: "233.25px",
          height: "1px",
          background:
            "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 15.63%, #E0E1E2 100%)",
          border: "none",
          my: 1,
          mx: "auto",
        }}
      />
      <Box
        sx={{
          pl: 1.7,
          transition: "all 0.3s ease",
        }}
      >
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                onClick={() => navigate(item.path)}
                sx={{
                  mx: 1,
                  mb: 0.5,
                  color: "#2D3748",
                  px: 2,
                  py: 1.5,
                  ...(isActive(item.path) && {
                    backgroundColor: "#FFFFFF",
                    color: "#2D3748",
                    boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
                    borderRadius: "15px",
                    px: 2,
                    py: 1.5,
                  }),
                  "&:hover": {
                    backgroundColor: "#FFFFFF",
                    color: "#2D3748",
                    boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
                    borderRadius: "15px",
                    px: 2,
                    py: 1.5,
                  },
                }}
              >
                <ListItemIcon
                  sx={{
                    color: "#4FD1C5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 1.5,
                    backgroundColor: "#fff",
                    p: 0.8,
                    height: "30px",
                    minWidth: "30px",
                    borderRadius: "12px",
                    ...(isActive(item.path) && {
                      backgroundColor: "#4FD1C5",
                      color: "#fff",
                      p: 0.8,
                      height: "30px",
                      minWidth: "30px",
                      borderRadius: "12px",
                    }),
                    ".MuiListItemButton-root:hover &": {
                      backgroundColor: "#4FD1C5",
                      color: "#fff",
                    },
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: "150%",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box
          component={Paper}
          borderRadius={"15px"}
          sx={{
            boxShadow: "0px 3.5px 5.5px 0px #00000005",
            minHeight: "256px",
            maxHeight: "100%",
          }}
        >
          <Paper
            sx={{
              px: "21px",
              py: "20px",
              minHeight: "169.5px",
              maxHeight: "100%",
              borderRadius: "15px",
              background: `
                      url(${sideBottomImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflow: "hidden",
              color: "white",
            }}
          >
            <Box position="relative" zIndex={2} sx={{
              minHeight: "169.5px",
            }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  minHeight: "169.5px",

                }}
              >
                <Box>
                <ListItemIcon
                  sx={{
                    color: "#4FD1C5",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: 1.5,
                    backgroundColor: "#fff",
                    p: 0.8,
                    height: "30px",
                    minWidth: "30px",
                    borderRadius: "12px",
                  }}
                >
                  <HelpIcon/>
                </ListItemIcon>

                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontWeight: 700,
                      color: "common.white",
                      fontSize: "18px",
                      lineHeight: "140%",
                    }}
                  >
                    Need help?
                  </Typography>

                  <Typography
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "140%",
                    }}
                  >
                    Please check our docs
                  </Typography>
                  <CommonButton
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 1.5,
                      height: "45px",
                      color: "#2D3748",
                      background: "white",
                      borderRadius: "12px",
                      "&:hover": { backgroundColor: "#fff" },
                    }}
                  >
                    DOCUMENTATION
                  </CommonButton>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
