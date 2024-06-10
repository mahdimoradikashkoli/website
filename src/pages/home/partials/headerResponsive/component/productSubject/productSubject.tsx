import { Box, Divider, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
type productSubjectType = {
  href: string;
  productSubject: string;
};

export const ProductSubject: React.FC<productSubjectType> = ({
  href,
  productSubject,
}) => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          width:'fit-content',
          display: "flex",
          alignItems: "center",
          color: "rgb(50,50,50)",
          marginBottom: ".5rem",
          "&:hover":{color:"rgb(20,255,20)"}
        }}
      >
        <Divider
          orientation="vertical"
          sx={{
            bgcolor: "rgb(20,255,20)",
            width: ".17rem",
            height: "1rem",
            marginLeft: ".4rem",
          }}
        />
        <Typography
          sx={{ cursor: "pointer" ,width:"fit-content"}}
          onClick={() => navigate(href)}
          component={"h3"}
          fontWeight={"bold"}
        >
          {productSubject}
        </Typography>
        <ArrowBackIosIcon style={{ width: ".8rem", height: ".8rem" }} />
      </Box>
    </>
  );
};
