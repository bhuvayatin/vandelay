import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
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
  Stack,
  Avatar,
  Badge,
  Menu,
  MenuItem,
  LinearProgress,
  Grid,
  Paper,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  ShoppingCart as ShoppingCartIcon,
  Notifications as NotificationsIcon,
  Settings as SettingsIcon,
  AccountCircle as AccountCircleIcon,
} from "@mui/icons-material";
import member1 from "../assets/members/member1.png";
import member2 from "../assets/members/Avatar 2.png";
import member3 from "../assets/members/Avatar 3.png";
import member4 from "../assets/members/Avatar 4.png";
import member5 from "../assets/members/Avatar 5.png";
import comapnie1 from "../assets/companies/Icon (1).png";
import comapnie2 from "../assets/companies/Icon (2).png";
import comapnie3 from "../assets/companies/Icon (3).png";
import comapnie4 from "../assets/companies/Icon (4).png";
import comapnie5 from "../assets/companies/Icon (5).png";
import comapnie6 from "../assets/companies/Icon.png";
import TableChartIcon from "@mui/icons-material/TableChart";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RtlIcon from "@mui/icons-material/FormatTextdirectionRToL";
import CommonTable from "../component/CommonTable";
import OrdersOverview from "../component/OrdersOverview";
import SalesChart from "../component/SalesChart";
import ActiveUsersCard from "../component/ActiveUsersCard";
import SalesViewChart from "../component/SalesViewChart";
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
  backgroundColor: "#ffffff",
  color: theme.palette.text.primary,
  boxShadow: "none",
  borderBottom: `1px solid ${theme.palette.divider}`,
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
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleDrawerOpen = () => {
    setOpen(true);
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
  const columns = [
    { id: "company", label: "COMPANIES" },
    { id: "members", label: "MEMBERS" },
    { id: "budget", label: "BUDGET" },
    { id: "completion", label: "COMPLETION" },
  ];

  const rows = [
    {
      company: {
        name: "Chakra Soft UI Version",
        logo: comapnie6,
      },
      members: [
        member1,
        member2,
        member3,
        member4,
        member5,

      ],
      budget: "$14,000",
      completion: 60,
    },
    {
      company: {
        name: "Add Progress Track",
        logo: comapnie1,
      },
      members: [
        member1,
        member2,
      ],
      budget: "$3,000",
      completion: 10,
    },
    {
      company: {
        name: "Fix Platform Errors",
        logo: comapnie2,
      },
      members: [
        member1,
        member2,
      ],
      budget: "Not set",
      completion: 100,
    },
    {
      company: {
        name: "Launch our Mobile App",
        logo: comapnie3,
      },
      members: [
        member1,
        member2,
        member3,
        member4,
      ],
      budget: "$32,000",
      completion: 100,
    },
    {
      company: {
        name: "Add the New Pricing Page",
        logo: comapnie4,
      },
      members: [
        member1,
        member2,
        member3,
        member4,
        member5,
      ],
      budget: "$400",
      completion: 25,
    },
    {
      company: {
        name: "Redesign New Online Shop",
        logo: comapnie5,
      },
      members: [
        member1,
        member2,
      ],
      budget: "$7,600",
      completion: 40,
    },
  ];

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
          </Box>
        </DrawerHeader>
        <Box
          sx={{
            pl: 4.38,
            transition: "all 0.3s ease", 
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
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography variant="h4" gutterBottom>
          Welcome back, Admin!
        </Typography>

        <Grid container spacing={2} sx={{
          marginBottom: 2
        }}>
          <Grid size={5}>
            <Box
              component={Paper}
              p={2}
              borderRadius={"15px"}
              sx={{ boxShadow: "0px 3.5px 5.5px 0px #00000005" }}
            >

              <SalesChart />
              <ActiveUsersCard />
            </Box>
          </Grid>
          <Grid size={7}>
            <Box
              component={Paper}
              p={2}
              borderRadius={"15px"}
              sx={{ boxShadow: "0px 3.5px 5.5px 0px #00000005" }}
            >

              <SalesViewChart />
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid size={8}>
            <CommonTable
              title="Projects"
              subtitle="30 done this month"
              showMenuIcon={true}
              columns={columns}
              rows={rows}
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
                          objectFit: 'cover',
                        }}
                      />
                      <Typography
                        sx={{
                          color: "#2D3748",
                          fontSize: "14px",
                          fontWeight: 600,
                          marginLeft: "17px !important"
                        }}
                      >
                        {value.name}
                      </Typography>
                    </Stack>
                  );
                }

                if (id === "members" && Array.isArray(value)) {
                  const maxVisibleAvatars = 5;
                  const extraMembersCount = Math.max(value.length - maxVisibleAvatars, 0);

                  return (
                    <Stack width="100%" direction="row" justifyContent="flex-start">
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {value.slice(0, maxVisibleAvatars).map((member: string, idx: number) => (
                          <Avatar
                            key={idx}
                            src={member}
                            alt={`User ${idx + 1}`}
                            sx={{
                              width: 24,
                              height: 24,
                              fontSize: '0.75rem',
                              backgroundColor: '#1976d2',
                              color: 'white',
                              border: '2px solid white',
                              marginLeft: idx === 0 ? 0 : '-12px', 
                              zIndex: 6, 
                            }}
                          >
                            {!member && idx + 1}
                          </Avatar>
                        ))}

                      
                        {extraMembersCount > 0 && (
                          <Avatar
                            sx={{
                              width: 24,
                              height: 24,
                              fontSize: '0.75rem',
                              backgroundColor: '#e0e0e0',
                              color: '#666',
                              border: '2px solid white',
                              marginLeft: '-12px',
                              zIndex: 6, 
                            }}
                          >
                            +{extraMembersCount}
                          </Avatar>
                        )}
                      </Box>
                    </Stack>
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
                          height: 4,
                          borderRadius: 5,
                          backgroundColor: "#E2E8F0",
                          "& .MuiLinearProgress-bar": {
                            backgroundColor: "#4FD1C5",
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
          <Grid size={4}>
            <OrdersOverview />
          </Grid>
        </Grid>
      </Main>
    </Box>
  );
}
