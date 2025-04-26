import { Switch, SwitchProps, styled } from "@mui/material";

// Define the interface first
export interface CustomSwitchProps extends SwitchProps {
  activeColor?: string;
  inactiveColor?: string;
  thumbSize?: number;
  switchHeight?: number;
  switchWidth?: number;
}

// Create the styled component
const CustomSwitch = styled(Switch, {
  shouldForwardProp: (prop) =>
    !["activeColor", "inactiveColor", "thumbSize", "switchHeight", "switchWidth"].includes(
      prop as string
    ),
})<CustomSwitchProps>(
  ({
    theme,
    activeColor = "#62c2b3",
    inactiveColor = "#E2E8F0",
    thumbSize = 13.5,
    switchHeight = 18.5,
    switchWidth = 36,
  }) => {
    const trackPadding = 2;
    const transformDistance = switchWidth - thumbSize - trackPadding * 2;

    return {
      width: switchWidth,
      height: switchHeight,
      padding: 0,
      "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: `${trackPadding}px`,
        transitionDuration: "300ms",
        "&.Mui-checked": {
          transform: `translateX(${transformDistance}px)`,
          color: "#fff",
          "& + .MuiSwitch-track": {
            backgroundColor: activeColor,
            opacity: 1,
            border: 0,
          },
          "& .MuiSwitch-thumb": {
            boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
          },
        },
        "&.Mui-disabled": {
          "& + .MuiSwitch-track": {
            opacity: 0.5,
          },
        },
      },
      "& .MuiSwitch-thumb": {
        boxSizing: "border-box",
        width: thumbSize,
        height: thumbSize,
        borderRadius: "50%",
      },
      "& .MuiSwitch-track": {
        borderRadius: switchHeight / 2,
        backgroundColor: inactiveColor,
        opacity: 1,
        transition: theme.transitions.create(["background-color"], {
          duration: 300,
        }),
      },
    };
  }
);

// Export both the component and the props type
export default CustomSwitch;