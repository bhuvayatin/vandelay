import { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Drawer,
  Typography,
  IconButton,
  Badge,
  Menu,
  MenuItem,
  Stack,
  Avatar,
  LinearProgress,
  Card,
  CardContent,
  Paper,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  ShoppingCart as ShoppingCartIcon,
  Notifications as NotificationsIcon,
  AccountCircle as AccountCircleIcon,
  ArrowForward,
} from "@mui/icons-material";
import bgImage from "../assets/dashboard_bg_logo.png";
import discussionImage from "../assets/dashboard_bg_discussion.png";
import LanguageIcon from "@mui/icons-material/Language";
import wallet from "../assets/wallet.png";
import file from "../assets/file.png";
import cart from "../assets/cart.png";
import Header from "../component/MainHeader";
import Sidebar from "../component/Sidebar";
import CommonTable from "../component/CommonTable";
import OrdersOverview from "../component/OrdersOverview";
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
import SalesChart from "../component/SalesChart";
import ActiveUsersCard from "../component/ActiveUsersCard";
import SalesViewChart from "../component/SalesViewChart";
import Footer from "../component/Footer";

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
      members: [member1, member2, member3, member4, member5],
      budget: "$14,000",
      completion: 60,
    },
    {
      company: {
        name: "Add Progress Track",
        logo: comapnie1,
      },
      members: [member1, member2],
      budget: "$3,000",
      completion: 10,
    },
    {
      company: {
        name: "Fix Platform Errors",
        logo: comapnie2,
      },
      members: [member1, member2],
      budget: "Not set",
      completion: 100,
    },
    {
      company: {
        name: "Launch our Mobile App",
        logo: comapnie3,
      },
      members: [member1, member2, member3, member4],
      budget: "$32,000",
      completion: 100,
    },
    {
      company: {
        name: "Add the New Pricing Page",
        logo: comapnie4,
      },
      members: [member1, member2, member3, member4, member5],
      budget: "$400",
      completion: 25,
    },
    {
      company: {
        name: "Redesign New Online Shop",
        logo: comapnie5,
      },
      members: [member1, member2],
      budget: "$7,600",
      completion: 40,
    },
  ];

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
      <Header open={open} handleDrawerOpen={handleDrawerOpen} />
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
            borderRight: "none",
            px: "18px",
            pt: 3,
            overflow: "hidden",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Sidebar open={open} />
      </Drawer>
      <Main
        open={open}
        sx={{
          padding: 3.94,
        }}
      >
        <DrawerHeader />

        <Grid
          container
          spacing={2}
          sx={{
            mb: 3,
          }}
        >
          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              sx={{
                flex: 1,
                boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
                borderRadius: "15px",
                padding: 2.2,
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    padding: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                      sx={{
                        fontSize: "12px",
                        fontWeight: 700,
                        lineHeight: "150%",
                        color: "#A0AEC0",
                        mb: "1px",
                      }}
                    >
                      Today's Money
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: "#2D3748",
                        fontSize: "18px",
                        lineHeight: "140%",
                      }}
                    >
                      $53,000{" "}
                      <Box
                        component="span"
                        sx={{
                          color: "#48BB78",
                          fontSize: "14px",
                          lineHeight: "140%",
                          fontWeight: 700,
                          ml: "5px",
                        }}
                      >
                        +55%
                      </Box>
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "success.main",
                    }}
                  >
                    <Box
                      component="img"
                      src={wallet}
                      alt="Logo"
                      sx={{
                        width: 22.5,
                        height: 22.5,
                        backgroundColor: "#4FD1C5",
                        px: "11.25px",
                        py: "11.25px",
                        borderRadius: "12px",
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              sx={{
                flex: 1,
                boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
                borderRadius: "15px",
                padding: 2.2,
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    padding: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                      sx={{
                        fontSize: "12px",
                        fontWeight: 700,
                        lineHeight: "150%",
                        color: "#A0AEC0",
                        mb: "1px",
                      }}
                    >
                      Today’s Users
                    </Typography>

                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: "#2D3748",
                        fontSize: "18px",
                        lineHeight: "140%",
                      }}
                    >
                      2,300
                      <Box
                        component="span"
                        sx={{
                          color: "#48BB78",
                          fontSize: "14px",
                          lineHeight: "140%",
                          fontWeight: 700,
                          ml: "5px",
                        }}
                      >
                        +5%
                      </Box>
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#4FD1C5",
                        px: "11.25px",
                        py: "9.5px",
                        borderRadius: "12px",
                      }}
                    >
                      <LanguageIcon
                        sx={{
                          fontSize: "22.5px",
                          color: "#fff",
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              sx={{
                flex: 1,
                boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
                borderRadius: "15px",
                padding: 2.2,
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    padding: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                      sx={{
                        fontSize: "12px",
                        fontWeight: 700,
                        lineHeight: "150%",
                        color: "#A0AEC0",
                        mb: "1px",
                      }}
                    >
                      New Clients
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: "#2D3748",
                        fontSize: "18px",
                        lineHeight: "140%",
                      }}
                    >
                      +3,052
                      <Box
                        component="span"
                        sx={{
                          color: "#E53E3E",
                          fontSize: "14px",
                          lineHeight: "140%",
                          fontWeight: 700,
                          ml: "5px",
                        }}
                      >
                        -14%
                      </Box>
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "success.main",
                    }}
                  >
                    <Box
                      component="img"
                      src={file}
                      alt="Logo"
                      sx={{
                        width: 22.5,
                        height: 22.5,
                        backgroundColor: "#4FD1C5",
                        px: "11.25px",
                        py: "11.25px",
                        borderRadius: "12px",
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 6, md: 3 }}>
            <Card
              sx={{
                flex: 1,
                boxShadow: "0px 3.5px 5.5px 0px rgba(0, 0, 0, 0.02)",
                borderRadius: "15px",
                padding: 2.2,
              }}
            >
              <CardContent
                sx={{
                  "&:last-child": {
                    padding: 0,
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography
                      variant="subtitle2"
                      color="text.secondary"
                      gutterBottom
                      sx={{
                        fontSize: "12px",
                        fontWeight: 700,
                        lineHeight: "150%",
                        color: "#A0AEC0",
                        mb: "1px",
                      }}
                    >
                      Total Sales
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        color: "#2D3748",
                        fontSize: "18px",
                        lineHeight: "140%",
                      }}
                    >
                      $173,000
                      <Box
                        component="span"
                        sx={{
                          color: "#48BB78",
                          fontSize: "14px",
                          lineHeight: "140%",
                          fontWeight: 700,
                          ml: "5px",
                        }}
                      >
                        +8%
                      </Box>
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      color: "success.main",
                    }}
                  >
                    <Box
                      component="img"
                      src={cart}
                      alt="Logo"
                      sx={{
                        width: 22.5,
                        height: 22.5,
                        backgroundColor: "#4FD1C5",
                        px: "11.25px",
                        py: "11.25px",
                        borderRadius: "12px",
                      }}
                    />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            marginBottom: 3,
          }}
        >
          <Grid
            size={{ xs: 12, md: 7 }}
            sx={{
              height: "100%",
            }}
          >
            <Box
              component={Paper}
              p={2.2}
              borderRadius={"15px"}
              sx={{
                boxShadow: "0px 3.5px 5.5px 0px #00000005",
                height: "100%",
              }}
            >
              <Grid container spacing={2}>
                <Grid size={7}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <Box>
                      <Typography
                        component="div"
                        sx={{
                          color: "#A0AEC0",
                          fontSize: "12px",
                          lineHeight: "150%",
                          fontWeight: 700,
                          mb: "3px",
                        }}
                      >
                        BUILT BY DEVELOPERS
                      </Typography>

                      <Typography
                        variant="h3"
                        component="h1"
                        sx={{
                          fontWeight: 700,
                          mb: "6px",
                          fontSize: "18px",
                          lineHeight: "140%",
                        }}
                      >
                        Purity UI Dashboard
                      </Typography>

                      <Typography
                        variant="subtitle1"
                        component="p"
                        sx={{
                          fontSize: "14px",
                          lineHeight: "140%",
                          fontWeight: 400,
                          mb: 3,
                          color: "#A0AEC0",
                        }}
                      >
                        From colors, cards, typography to complex elements, you
                        will find the full documentation.
                      </Typography>
                    </Box>

                    <Box>
                      <Button
                        endIcon={<ArrowForward />}
                        sx={{
                          color: "#2D3748",
                          fontWeight: 700,
                          fontSize: "10px",
                          lineHeight: "150%",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        Read more
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid size={5}>
                  <Box
                    sx={{
                      flex: 1,
                      width: "100%",
                      minHeight: "256px",
                      maxHeight: "100%",
                      backgroundImage: `url(${bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={Paper}
              p={2.2}
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
                  minHeight: "216px",
                  borderRadius: "12px",
                  background: `
              url(${discussionImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  overflow: "hidden",
                  color: "white",
                }}
              >
                <Box position="relative" zIndex={2} sx={{
                  height: "216px",
                }}>
                  <Box sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    height: "100%",
                  }}>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "common.white",
                          fontSize: "18px",
                          lineHeight: "140%",
                        }}
                      >
                        Work with the Rockets
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "140%",
                        }}
                      >
                        Wealth creation is an evolutionarily recent positive-sum
                        game.
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "140%",
                        }}
                      >
                        It is all about who takes the opportunity first.
                      </Typography>
                    </Box>

                    <Box>
                      <Button
                        endIcon={<ArrowForward />}
                        sx={{
                          color: "#FFFFFF",
                          fontWeight: 700,
                          fontSize: "10px",
                          lineHeight: "150%",
                          "&:hover": {
                            backgroundColor: "transparent",
                          },
                        }}
                      >
                        Read more
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            marginBottom: 3,
          }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              component={Paper}
              p={2.2}
              borderRadius={"15px"}
              sx={{ boxShadow: "0px 3.5px 5.5px 0px #00000005" }}
            >
              <SalesChart />
              <ActiveUsersCard />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component={Paper}
              p={2.2}
              borderRadius={"15px"}
              sx={{ boxShadow: "0px 3.5px 5.5px 0px #00000005" }}
            >
              <SalesViewChart />
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 8 }}>
            <CommonTable
              title="Projects"
              subtitle="30 done this month"
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

                if (id === "members" && Array.isArray(value)) {
                  const maxVisibleAvatars = 5;
                  const extraMembersCount = Math.max(
                    value.length - maxVisibleAvatars,
                    0
                  );

                  return (
                    <Stack
                      width="100%"
                      direction="row"
                      justifyContent="flex-start"
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        {value
                          .slice(0, maxVisibleAvatars)
                          .map((member: string, idx: number) => (
                            <Avatar
                              key={idx}
                              src={member}
                              alt={`User ${idx + 1}`}
                              sx={{
                                width: 24,
                                height: 24,
                                fontSize: "0.75rem",
                                backgroundColor: "#1976d2",
                                color: "white",
                                border: "2px solid white",
                                marginLeft: idx === 0 ? 0 : "-12px",
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
                              fontSize: "0.75rem",
                              backgroundColor: "#e0e0e0",
                              color: "#666",
                              border: "2px solid white",
                              marginLeft: "-12px",
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
          <Grid size={{ xs: 12, md: 4 }}>
            <OrdersOverview />
          </Grid>
        </Grid>
        <Footer sx={{ marginTop: "0", backgroundColor: "#f8f8f8", padding: "20px", width: "98%" }} style="0" />

      </Main>
    </Box>
  );
}
