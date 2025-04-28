import { Button, ButtonProps, styled } from "@mui/material";
import { LinkProps } from "react-router-dom";
import React from "react";

interface CustomButtonProps extends ButtonProps {
  variant?: "contained" | "outlined" | "text";
  isWhite?: boolean;
  isRounded?: boolean;
  to?: LinkProps["to"];
  component?: React.ElementType;
}

const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isWhite" && prop !== "isRounded",
})<CustomButtonProps>(({ theme, isWhite, isRounded }) => ({
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
}));

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
