import { Box, Typography } from "@mui/material";
import { componentServicesType } from "./type";
import React from "react";

export const ComponentServices: React.FC<componentServicesType> = ({
  description,
  iconAddress,
  altForIcon,
}) => {
  return (
    <Box sx={{ width: "4.4375rem", textAlign: "center" }}>
      <Box
        width={"2.25rem"}
        component={"img"}
        src={iconAddress}
        alt={altForIcon}
      ></Box>
      <Typography
        style={{
          fontSize: "clamp(9px, 2.4vw, 11px)",
          fontStyle: "italic",
          textAlign: "center",
          width: "100%",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};
