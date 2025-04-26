import { Button, ButtonProps, styled } from "@mui/material";
import { Link, LinkProps } from "react-router-dom";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  variant?: "contained" | "outlined" | "text";
  isWhite?: boolean;
  isRounded?: boolean;
  to?: LinkProps["to"]; // Add to prop for routing
  component?: React.ElementType; // Allow component override
}

const CustomButton = styled(Button)<CustomButtonProps>(
  ({ theme, isWhite, isRounded }) => ({
    fontSize: "10px",
    lineHeight: "150%",
    boxShadow: "none",
    textTransform: "none",
    borderRadius: isRounded ? "34.5px" : theme.shape.borderRadius,
    padding: isRounded ? "5.5px 30.25px" : "6px 16px",
    color: isWhite ? theme.palette.common.white : "inherit",
    "&:hover": {
      boxShadow: "none",
      backgroundColor: isWhite
        ? theme.palette.grey[100]
        : theme.palette.action.hover,
    },
  })
);

const CommonButton: React.FC<CustomButtonProps> = ({
  children,
  variant = "contained",
  isWhite = false,
  isRounded = false,
  ...props
}) => {
  return (
    <CustomButton
      variant={variant}
      isWhite={isWhite}
      isRounded={isRounded}
      {...props}
    >
      {children}
    </CustomButton>
  );
};

export default CommonButton;