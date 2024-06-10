import { Box, Divider, TextField, Typography } from "@mui/material";
import { SuggestionComponen } from "./component";
import ClearIcon from "@mui/icons-material/Clear";

export const SearchComponent = () => {
  const handleDeleteSearchNavbar = () => {
    const searchNavbar = document.getElementById("search");
    searchNavbar!.style.display = "none";
  };
  return (
    <>
      <Box

        id="search"
        sx={{
          display:'none',
          position:'absolute',
          backgroundColor: "rgb(255,255,255)",
          boxShadow:'10px 0 10px rgba(150,150,150,.5)',
          width: "100%",
          padding: ".1rem .6rem .6rem .6rem",
        }}
      >
        <TextField
          placeholder="جستجو در میان هزاران کالا"
          style={{ width: "100%" }}
        />
        <Divider style={{ marginTop: ".8rem", width: "100%" }} />

        <Typography
          component={"span"}
          style={{ marginTop: ".8rem", display: "block" }}
        >
          جستجوهای پرطرفدار:
        </Typography>
        <Box
          sx={{
            marginTop: ".4rem",
            display: "flex",
            alignItems: "center",
            gap: ".5rem",
            overflowX: "auto",
            transition: "2s",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          <SuggestionComponen value="جوتی جینز" />
          <SuggestionComponen value="ناربن" />
          <SuggestionComponen value="زیلان" />
          <SuggestionComponen value="ناریان" />
          <SuggestionComponen value="بیسراک" />
          <SuggestionComponen value="شلوار" />
          <SuggestionComponen value="مانتو" />
          <SuggestionComponen value="بهبود" />
        </Box>
        <Divider style={{ marginTop: ".8rem", width: "100%" }} />

        <Box
          sx={{
            marginTop: ".5rem",
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Box
          component={"button"}
          onClick={handleDeleteSearchNavbar}
            sx={{
              backgroundColor:'inherit',
              border:'none',
              outline:'none',
              color: "red",
              display: "flex",
              alignItems: "center",
            }}
          >
            بستن
            <ClearIcon style={{ color: "red" }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
