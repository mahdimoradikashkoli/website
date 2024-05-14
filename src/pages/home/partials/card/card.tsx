import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { imgMediaCardType } from "./type";
import { Box } from "@mui/material";

export const ImgMediaCard: React.FC<imgMediaCardType> = ({
  imageAddress,
  onClick,
  title1,
  description,
  offer,
  price,
  key,
  altForImage,
  percent,
  available,
}) => {
  return (
    <Card sx={{ maxWidth: 345, key: { key } }}>
      <Box sx={{ padding: ".5rem" ,width:"100%",height:"10rem"}}>
        {
          percent &&
          <Typography
            component={"span"}
            fontWeight={"700"}
            color={"red"}
            fontSize={".9rem"}
          >
            {percent}
          </Typography>
        }
        <CardMedia
          onClick={onClick}
          component="img"
          alt={altForImage}
          height="140"
          image={imageAddress}
        />
        {
          available &&
          <Typography component={"span"} color={"red"} fontSize={".8rem"}>
            {available}
          </Typography>
        }
      </Box>
      <CardContent>
        <Typography
          gutterBottom
          component="h1"
          style={{ fontSize: "11px", fontWeight: "600" }}
        >
          {title1}
        </Typography>
        <Typography
          fontSize={"11px"}
          fontWeight={"600"}
          variant="body2"
          color="text.secondary"
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions
        style={{ display: "flex", alignItems: "center", gap: ".4rem" }}
      >
        <Typography fontSize={"12px"} component={"del"} color="text.secondary">
          {price}
        </Typography>
        <Typography fontSize={".8rem"} fontWeight={"600"}> {offer}</Typography>
      </CardActions>
    </Card>
  );
};
