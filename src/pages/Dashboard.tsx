import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  AppBar,
  Card,
  CardContent,
  Stack,
  Avatar,
  Badge,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  BarChart as BarChartIcon,
  ShoppingCart as ShoppingCartIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import { PieChart, LineChart, BarChart } from "@mui/x-charts";
import TableChartIcon from "@mui/icons-material/TableChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RtlIcon from "@mui/icons-material/FormatTextdirectionRToL";
const drawerWidth = 266.5;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  backgroundColor: "#ffffff", // White background
  color: theme.palette.text.primary, // Text color will adapt to theme
  boxShadow: "none", // Optional: remove shadow if desired
  borderBottom: `1px solid ${theme.palette.divider}`, // Optional: add subtle border
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
        <p>Orders</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircleIcon />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBarStyled position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            VANDELAY INDUSTRIES
          </Typography>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <Badge color="error">
                <SettingsIcon
                  sx={{
                    color: "#718096",
                  }}
                />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge>
                <NotificationsIcon
                  sx={{
                    color: "#718096",
                  }}
                />
              </Badge>
            </IconButton>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircleIcon />
            </IconButton> */}
          </Box>
        </Toolbar>
      </AppBarStyled>
      {renderMobileMenu}
      {renderMenu}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#F8F9FA",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: 2, fontWeight: "bold", fontSize: "14px" }}
            >
              VANDELAY INDUSTRIES
            </Typography>
            {/* <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton> */}
          </Box>
        </DrawerHeader>
        {/* <Divider /> */}
        <Box
          sx={{
            pl: 4.38,
            transition: "all 0.3s ease", // Smooth transitions
          }}
        >
          <List>
            {[
              { text: "Dashboard", icon: <DashboardIcon />, active: true },
              { text: "JhI Tables", icon: <TableChartIcon /> },
              { text: "Billing", icon: <ReceiptIcon /> },
              { text: "RTL", icon: <RtlIcon /> },
            ].map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  sx={{
                    borderRadius: 2,
                    mx: 1,
                    mb: 0.5,
                    color: "#2D3748",
                    ...(item.active && {
                      backgroundColor: "#FFFFFF",
                      color: "#2D3748",
                      boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
                      borderRadius: "15px",
                      px: 2,
                      py: 1.5,
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.24)",
                      },
                    }),
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: "inherit",
                      alignItems: "center",
                      justifyContent: "center",
                      ...(item.active && {
                        backgroundColor: "#4FD1C5",
                        color: "#fff",
                        p: 0.8,
                        height: "30px",
                        minWidth: "30px",
                        borderRadius: "12px",
                      }),
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{
                      fontWeight: item.active ? "bold" : "normal",
                    }}
                  />
                  {item.active && (
                    <Box
                      sx={{
                        width: 4,
                        height: 40,
                        backgroundColor: "secondary.main",
                        borderRadius: "0 3px 3px 0",
                        position: "absolute",
                        left: 0,
                      }}
                    />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        {/* <List>
          {["Settings", "Logout"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <SettingsIcon /> : <LogoutIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography variant="h4" gutterBottom>
          Welcome back, Admin!
        </Typography>

        {/* Stats Cards */}
        {/* <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Card sx={{ minWidth: 275, flex: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Users
              </Typography>
              <Typography variant="h3" sx={{ mt: 1 }}>
                1,234
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                +12% from last month
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, flex: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Revenue
              </Typography>
              <Typography variant="h3" sx={{ mt: 1 }}>
                $24,567
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                +8% from last month
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ minWidth: 275, flex: 1 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                Active Projects
              </Typography>
              <Typography variant="h3" sx={{ mt: 1 }}>
                56
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                +5% from last month
              </Typography>
            </CardContent>
          </Card>
        </Stack> */}

        {/* Charts */}
        {/* <Stack direction="row" spacing={2} sx={{ mb: 4 }}>
          <Card sx={{ flex: 2 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Sales Overview
              </Typography>
              <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }]}
                series={[
                  {
                    data: [2, 3, 5.5, 8.4, 6.9, 9, 12, 14, 10, 15],
                  },
                ]}
                width={500}
                height={300}
              />
            </CardContent>
          </Card>
          <Card sx={{ flex: 1 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Revenue Sources
              </Typography>
              <PieChart
                series={[
                  {
                    data: [
                      { id: 0, value: 35, label: "Products" },
                      { id: 1, value: 25, label: "Services" },
                      { id: 2, value: 20, label: "Subscriptions" },
                      { id: 3, value: 15, label: "Consulting" },
                      { id: 4, value: 5, label: "Other" },
                    ],
                  },
                ]}
                width={400}
                height={200}
              />
            </CardContent>
          </Card>
        </Stack> */}

        {/* Recent Activities */}
        {/* <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Recent Activities
            </Typography>
            <BarChart
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                },
              ]}
              series={[
                { data: [35, 44, 24, 52, 38, 45] },
                { data: [52, 38, 45, 35, 44, 24] },
              ]}
              width={500}
              height={300}
            />
          </CardContent>
        </Card> */}
      </Main>
    </Box>
  );
}
