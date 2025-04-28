import { TextField, OutlinedTextFieldProps, Typography, Box, InputAdornment } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface CommonTextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  label?: string;
  labelStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  withSearchIcon?: boolean;
}

const CommonTextField = React.forwardRef<HTMLDivElement, CommonTextFieldProps>(
  ({ label, labelStyle, containerStyle, withSearchIcon, InputProps, sx, ...props }, ref) => {
    return (
      <Box sx={{ ...containerStyle }}>
        {label && (
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 400,
              fontSize: "14px",
              color: "#2D3748",
              marginBottom: "5.5px",
              ...labelStyle,
            }}
          >
            {label}
          </Typography>
        )}
        <TextField
          ref={ref}
          fullWidth
          variant="outlined"
          InputProps={{
            startAdornment: withSearchIcon ? (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#2D3748" }} />
              </InputAdornment>
            ) : null,
            ...InputProps,
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              backgroundColor: "white",
              "& fieldset": {
                borderColor: "#E2E8F0",
              },
              "&:hover fieldset": {
                borderColor: "#CBD5E0",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#62c2b3",
              },
            },
            "& .MuiInputBase-input": {
              py: "10px",
              fontSize: "14px",
              paddingLeft: withSearchIcon ? "8px" : "20px",
            },
            maxWidth: withSearchIcon ? 400 : undefined,
            mr: withSearchIcon ? 2 : undefined,
            flexGrow: withSearchIcon ? 1 : undefined,
            ...sx,
          }}
          {...props}
        />
      </Box>
    );
  }
);

CommonTextField.displayName = "CommonTextField";

export default CommonTextField;