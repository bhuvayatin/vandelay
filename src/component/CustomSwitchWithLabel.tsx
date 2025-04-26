import { FormControlLabel, FormControlLabelProps } from "@mui/material";
import CustomSwitch, { CustomSwitchProps } from "./CustomSwitch";

interface CustomSwitchWithLabelProps extends Omit<FormControlLabelProps, "control"> {
  switchProps?: CustomSwitchProps;
  labelFontSize?: string | number;
  labelColor?: string;
}

const CustomSwitchWithLabel = ({
  label,
  switchProps = {},
  labelFontSize = "12px",
  labelColor = "#2D3748",
  ...props
}: CustomSwitchWithLabelProps) => {
  return (
    <FormControlLabel
      control={<CustomSwitch {...switchProps} />}
      label={label}
      sx={{
        margin: 0,
        alignItems: "center",
        "& .MuiFormControlLabel-label": {
          fontSize: labelFontSize,
          fontWeight: 400,
          color: labelColor,
          marginTop: "1px",
          marginLeft:1.25
        },
      }}
      {...props}
    />
  );
};

// Export both components
export { CustomSwitchWithLabel };