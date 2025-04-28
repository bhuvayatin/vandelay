import { TextField, OutlinedTextFieldProps, Typography, Box } from "@mui/material";
import React from "react";

interface CommonTextFieldProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  label?: string;
  labelStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const CommonTextField = React.forwardRef<HTMLDivElement, CommonTextFieldProps>(
  ({ label, labelStyle, containerStyle, ...props }, ref) => {
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
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "15px",
              backgroundColor: "white",
              paddingRight: "20px",
              paddingLeft: "20px",
              height: "50px",
              "& input": {
                height: "50px",
                padding: 0,
                boxSizing: "border-box",
              },
              "& fieldset": {
                borderWidth: "1px",
                borderColor: "#E2E8F0",
              },
              "&:hover fieldset": {
                borderColor: "#CBD5E0",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#62c2b3",
              },
            },
            ...props.sx,
          }}
          {...props}
        />
      </Box>
    );
  }
);

CommonTextField.displayName = "CommonTextField";

export default CommonTextField;