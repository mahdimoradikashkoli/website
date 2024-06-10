import { Typography } from "@mui/material";
import React from "react";
type producttype = {
  value: string;
  href?: string;
};
export const Product: React.FC<producttype> = ({ href, value }) => {
  return (
    <Typography
      sx={{
        width:'fit-content',
        color: "rgb(70,70,70)",
        textDecoration: "none",
        display: "block",
        flexShrink: "0",
        "&:hover": { color: "rgb(20,255,20)" },
        cursor: "pointer",
        fontSize: ".9rem",
      }}
      component={"a"}
      href={href}
    >
      {value}
    </Typography>
  );
};
