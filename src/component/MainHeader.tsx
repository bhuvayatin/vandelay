import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Badge,
  Menu,
  MenuItem,
  Link,
  styled,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Settings as SettingsIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import CommonTextField from "../component/CommonTextField";
import { useLocation } from "react-router-dom";

const drawerWidth = 266.5;


const AppBarStyled = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<{ open?: boolean }>(({ theme, open }) => ({
  backgroundColor: "#F8F9FA",
  borderBottom: "none",
  mt: 2.8,
  px: 3,
  color: theme.palette.text.primary,
  boxShadow: "none",
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

interface HeaderProps {
  open: boolean;
  handleDrawerOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ open, handleDrawerOpen }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const location = useLocation();
  const path = location.pathname;
  const formattedTitle = path === "/"
    ? "Dashboard"
    : path.replace("/", "").replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarStyled position="fixed" open={open}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          padding: 0,
          pt:"22.5px",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{ mr: 2, ...(open && { display: "none" }) }}
        >
          <MenuIcon />
        </IconButton>
        <Box>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              gap: 1,
              marginBottom: 0.7,
            }}
          >
            <Typography
              variant="subtitle2"
              component="span"
              sx={{
                color: "#a0aec1",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "150%",
              }}
            >
              Page
            </Typography>
            <Typography
              variant="subtitle2"
              component="span"
              sx={{
                color: "#000000",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "150%",
              }}
            >
              /
            </Typography>
            <Typography
              variant="subtitle2"
              component="span"
              sx={{
                color: "#000000",
                fontWeight: 400,
                fontSize: "12px",
                lineHeight: "150%",
              }}
            >
              {formattedTitle}
            </Typography>
          </Box>
          <Typography
            variant="subtitle2"
            component="span"
            sx={{
              color: "#2D3748",
              fontWeight: 700,
              fontSize: "14px",
              lineHeight: "140%",
            }}
          >
            {formattedTitle}
          </Typography>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            gap: 2,
          }}
        >
          <CommonTextField
            withSearchIcon
            placeholder="Type here..."
            size="small"
          />
          <Link
            href="/login"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              color: "#718096",
              lineHeight: "150%",
              fontSize: "12px",
              "&:hover": {
                color: "",
              },
            }}
          >
            <PersonIcon fontSize="small" />
            <Typography variant="body2" component="span">
              Sign In
            </Typography>
          </Link>
          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
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
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
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
    </AppBarStyled>
  );
};

export default Header;