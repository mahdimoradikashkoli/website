import * as React from "react";
import Typography from "@mui/material/Typography";
import { imgMediaCardType } from "./type";
import { Box } from "@mui/material";
import RedeemIcon from "@mui/icons-material/Redeem";

export const ImgMediaCard: React.FC<imgMediaCardType> = ({
  altForImage,
  imageAddress,
  percent,
  title1,
  description,
  available,
  key,
  giftContent,
  offer,
  price,
  onClick,
  percent2,
  suggestion,
}) => {
  return (
    <Box key={key} sx={{ width: "8.25rem", height: "16rem"}}>
      <Box sx={{ position: "relative", width: "100%", height: "9.5625rem" ,boxShadow:'0px .005px .5px rgb(200,200,200)'}}>
        {percent ? (
          <Typography
            style={{
              position: "absolute",
              left: ".5rem",
              top: ".5rem",
              backgroundColor: "rgb(241, 100, 34)",
              fontSize: "0.66rem",
              padding: ".1rem .3rem",
              borderRadius: ".6rem",
              color: "white",
              fontWeight: "bold",
            }}
          >
            {percent}
          </Typography>
        ) : (
          percent2 && (
            <Typography
              style={{
                position: "absolute",
                left: ".5rem",
                top: ".5rem",
                backgroundColor: "rgb(29, 19, 9)",
                fontSize: "0.66rem",
                padding: ".1rem .3rem",
                borderRadius: ".6rem",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {percent2}
            </Typography>
          )
        )}
        <Box
          width={"100%"}
          component={"img"}
          src={imageAddress}
          alt={altForImage}
          onClick={onClick}
        ></Box>
        {suggestion && (
          <Box
            sx={{
              width: "100%",
              position: "absolute",
              bottom: ".4rem",
              left: "0",
              right: "0",
              padding: ".2rem .3rem",
              borderRadius: ".3rem",
              backgroundColor: "rgb(0, 191, 111)",
              color: "white",
              display: "flex",
              alignItems: "center",
              gap: ".2rem",
            }}
          >
            <RedeemIcon
              style={{ width: "1rem", height: "1rem", color: "white" }}
            />
            <Typography fontSize={".7rem"} fontWeight={"600"} color={"white"}>
              1خرید + 1 هدیه جین و ست
            </Typography>
          </Box>
        )}
        {giftContent && (
          <Box
            sx={{
              position: "absolute",
              bottom: ".5rem",
              left: "0",
              right: "0",
              display: "flex",
              alignItems: "center",
              padding: ".1rem .2rem",
              backgroundColor: "green",
              borderRadius: ".5rem",
            }}
          >
            <RedeemIcon
              style={{ width: "1rem", height: "1rem", color: "white" }}
            />

            <Typography
              fontSize={".7rem"}
              fontWeight={"600"}
              color={"white"}
              width="6rem"
              textAlign={"center"}
            >
              {giftContent}
            </Typography>
          </Box>
        )}
        {available && (
          <Typography
            style={{
              position: "absolute",
              width: "100%",
              fontSize: ".8rem",
              textAlign: "center",
              color: "rgb(241, 100, 34)",
              bottom:".4rem"
              ,border:'.001px solid rgb(230,230,230)',
              borderRadius:'.2rem'
            }}
          >
            {available}
          </Typography>
        )}
        <Box
          sx={{
            width: "100%",
            height:"6rem",
            display: "flex",
            flexDirection: "column",
            position:'relative'
            // gap: ".1rem",
          }}
        >
          <Box>
            <Typography
              component={"span"}
              fontSize={".7rem"}
              fontWeight={"600"}
            >
              {title1}
            </Typography>
            <Typography
              fontStyle={"italic"}
              style={{ fontSize: ".69rem", color: "rgb(70,70,70)" }}
            >
              {description}
            </Typography>
          </Box>

          <Box
            sx={{
              position:'absolute',
              bottom:'0',
              right:'0',
              left:'0',
              display: "flex",
              alignItems: "center",
              gap: ".4rem",
              // marginTop:'.7rem'
            }}
          >
            <Typography
              component={offer ? "del" : "span"}
              style={{ fontSize: ".7rem" }}
              color={offer ? "rgb(50,50,50)" : "black"}
              fontWeight={offer ?? "bold"}
            >
              {price}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: ".2rem" }}>
              {offer && (
                <Typography
                  component={"span"}
                  fontSize={".7rem"}
                  fontWeight={"600"}
                >
                  {offer}
                </Typography>
              )}
              <Box
                sx={{
                  marginRight: ".2rem",
                  display: "flex",
                  flexDirection: "column",
                  border: ".1rem solid",
                  padding: ".1rem",
                  borderRadius: ".3rem",
                  borderColor: "rgb(190,190,190)",
                }}
              >
                <Typography
                  component={"span"}
                  style={{
                    width: "100%",
                    fontSize: ".6rem",
                    fontWeight: "600",
                    lineHeight: ".6rem",
                  }}
                >
                  تو
                </Typography>
                <Typography
                  component={"span"}
                  fontSize=".6rem"
                  fontWeight={"600"}
                  lineHeight={".5rem"}
                >
                  مان
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
