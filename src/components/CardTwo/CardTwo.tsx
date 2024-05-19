import { Box, Typography } from "@mui/material";
import React from "react";
import { cardTwoType } from "./type";
export const CardTwo: React.FC<cardTwoType> = ({
  altForImage,
  description,
  imageAddress,
  id,
}) => {
  return (
    <Box
      key={id}
      sx={{
        width: "12.5rem",
        borderRadius: ".3rem",
        height: "11.25rem",
        backgroundColor: "white",
      }}
    >
      <Box sx={{overflow:"hidden",width:"100%",borderRadius: ".3rem"}}>
        <Box
          sx={{ maxWidth: "100%" }}
          component={"img"}
          src={imageAddress}
          alt={altForImage}
        ></Box>
      </Box>

      <Typography
        width={"100%"}
        height={"100%"}
        fontStyle={"italic"}
        padding={"0rem .3rem"}
        fontSize={".7rem"}
      >
        {description}
      </Typography>
    </Box>
  );
};
