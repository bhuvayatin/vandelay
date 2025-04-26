import { Box, Typography, Link, Stack, useMediaQuery, useTheme } from "@mui/material";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width:isMobile ? "100%" : "939.5px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop:isMobile ? "0px" : "122px",
        paddingBottom:isMobile ? "20px" : "40px",
        color: "#A0AEC0",
        fontSize: "14px",
        flexWrap: "wrap",
        flexDirection:isMobile ? "column" : "row"
      }}
    >
      <Typography variant="caption" sx={{
        marginBottom:"20px"
      }}>
        © 2025, Made with Lorem for a better web
      </Typography>
      <Stack direction={"row"} spacing={isMobile ? 2 : 4}>
        <Link href="#" underline="none" color="#A0AEC0">
          About Us
        </Link>
        <Link href="#" underline="none" color="#A0AEC0">
          Privacy
        </Link>
        <Link href="#" underline="none" color="#A0AEC0">
          Blog
        </Link>
        <Link href="#" underline="none" color="#A0AEC0">
          License
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;
