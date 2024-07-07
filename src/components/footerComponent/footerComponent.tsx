import { Box, Typography } from "@mui/material";
import { footerComponentType } from "./type";

export const FooterComponent: React.FC<footerComponentType> = ({
  productSeggestion1,
  productSeggestion2,
  productSeggestion3,
  productSeggestion4,
  productSeggestion5,
  href1,
  href2,
  href3,
  href4,
  href5,
}) => {
  return (
    <Box
      // className={style.footerComponent}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: ".7rem",
        padding: ".4rem",
        color: "black",
      }}
    >
      <Typography
        component={"a"}
        sx={{
          color: "black",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": {
            color: "green",
            textDecoration: "underline",
            transform: "scale(1.05)",
          },
          fontWeight: "bold",
        }}
        href={href1}
      >
        {productSeggestion1}
      </Typography>
      <Typography
        component={"a"}
        sx={{
          color: "black",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": {
            color: "green",
            textDecoration: "underline",
            transform: "scale(1.05)",
          },
          fontWeight: "bold",
        }}
        href={href2}
      >
        {productSeggestion2}
      </Typography>
      <Typography
        component={"a"}
        sx={{
          color: "black",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": {
            color: "green",
            textDecoration: "underline",
            transform: "scale(1.05)",
          },
          fontWeight: "bold",
        }}
        href={href3}
      >
        {productSeggestion3}
      </Typography>
      <Typography
        component={"a"}
        sx={{
          color: "black",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": {
            color: "green",
            textDecoration: "underline",
            transform: "scale(1.05)",
          },
          fontWeight: "bold",
        }}
        href={href4}
      >
        {productSeggestion4}
      </Typography>
      <Typography
        component={"a"}
        sx={{
          color: "black",
          textDecoration: "none",
          cursor: "pointer",
          "&:hover": {
            color: "green",
            textDecoration: "underline",
            transform: "scale(1.05)",
          },
          fontWeight: "bold",
        }}
        href={href5}
      >
        {productSeggestion5}
      </Typography>
    </Box>
  );
};
