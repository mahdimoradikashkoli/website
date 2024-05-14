import { Box, Typography } from "@mui/material";
import Countdown from "react-countdown";

export const CountDownTimer = () => {

    const targetDate = Date.now() * 1000;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img
            style={{ width: "8rem" }}
            src="https://www.banimode.com/img/cms/020911/1701506851.png"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: ".2rem",
            color: "rgb(241, 100, 34)",
          }}
        >
          <Box
            sx={{
              width: "28px",
              height: "28px",
              display: "inline-block",
              textAlign: "center",
              position: "relative",
              border: "1px solid rgb(241, 100, 34)",
              borderRadius: "2px",
            }}
          >
            <Typography component={"span"} style={{ fontSize: "1rem" }}>
              <Countdown
                date={targetDate}
                renderer={({ seconds }) => <span>{seconds}</span>}
              />
            </Typography>
          </Box>
          <Box>:</Box>
          <Box
            sx={{
              width: "28px",
              height: "28px",
              display: "inline-block",
              textAlign: "center",
              position: "relative",
              border: "1px solid rgb(241, 100, 34)",
              borderRadius: "2px",
            }}
          >
            <Typography component={"span"} style={{ fontSize: "1rem" }}>
              <Countdown
                date={targetDate}
                renderer={({ minutes }) => <span>{minutes}</span>}
              />
            </Typography>
          </Box>
          <Box>:</Box>
          <Box
            sx={{
              width: "28px",
              height: "28px",
              display: "inline-block",
              textAlign: "center",
              position: "relative",
              border: "1px solid rgb(241, 100, 34)",
              borderRadius: "2px",
            }}
          >
            <Typography component={"span"} style={{ fontSize: "1rem" }}>
              <Countdown
                date={targetDate}
                renderer={({ hours }) => <span>{hours}</span>}
              />
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
