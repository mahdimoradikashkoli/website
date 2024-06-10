import { Box, Typography } from "@mui/material";
import { ReactElement } from "react";
type groupingType = {
  icon: ReactElement;
  children: string;
  className?:string
};
export const Grouping: React.FC<groupingType> = ({ icon, children,className }) => {
  return (
    <Box
    className={className}
      sx={{
        padding: "1rem .3rem",
        display: "flex",
        width: "100%",
        alignItems: "center",
        gap: ".5rem",
        ":hover": { backgroundColor: "rgb(240,240,240)", color: "#00bf6f",cursor:'pointer' },
      }}
    >
      {icon}
      <Typography fontSize="1rem" fontStyle={"italic"}>
        {children}
      </Typography>
    </Box>
  );
};
