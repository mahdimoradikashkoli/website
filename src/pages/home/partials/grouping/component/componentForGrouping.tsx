import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { componentForGroupingType } from "./type";

// ایجاد یک تم سفارشی


export const ComponentForGrouping: React.FC<componentForGroupingType> = ({
  categoryName,
  imageAddresss,
}) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".7rem",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: "12px 11.5px",
          backgroundColor: "white",
          borderRadius: "1.3rem",
        }}
        onClick={() => {}}
      >
        <Box
          width={"4.75rem"}
          height={"4.75rem"}
          component={"img"}
          src={imageAddresss}
          alt="پوشاک بچه گانه"
        ></Box>
      </Box>
      <Typography fontStyle={"italic"} fontWeight={matches ? "500" : "600"} fontSize={matches ? "1rem" : "0.7rem"}>
        {categoryName}
      </Typography>
    </Box>
  );
};
