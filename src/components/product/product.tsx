import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { productType } from "./type";

export const Product: React.FC<productType> = ({ alt, href, src, unicId }) => {
  const navigate = useNavigate();
  return (
    <Box
    key={unicId}
      sx={{
        width: "10.5rem",
        height: "10rem",
        paddingTop:".1rem",
        marginTop: "1rem",
        textAlign: "center",
        borderRadius: ".5rem",
        cursor: "pointer",
        transition: "background-color .5s",
        "&:hover": { backgroundColor: "rgba(0, 0, 0, .2)" },
      }}
    >
      <Box
        
        onClick={() => {
          navigate(href);
        }}
        sx={{
          maxWidth: "10rem",
          height: "10rem",
          mixBlendMode: "color-burn",
          transition: "transform .5s",
          "&:hover": { transform: "scale(1.05)" },
        }}
        component={"img"}
        src={src}
        alt={alt}
      ></Box>
    </Box>
  );
};
