import { Box } from "@mui/material";
import { ComponentServices } from "./component/componentServices";

export const Services = () => {
  return (
    <Box
      sx={{
        marginTop: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent:'space-evenly'
      }}
    >
      <ComponentServices
        altForIcon="ضمانت بازگشت کالا"
        description="ضمانت بازگشت کالا"
        iconAddress="https://www.banimode.com/img/cms/guarantee/Group.svg"
      />
      <ComponentServices
        altForIcon="ضمانت اصالت"
        description="ضمانت اصالت"
        iconAddress="https://www.banimode.com/img/cms/guarantee/trusted.svg"
      />
      <ComponentServices
        altForIcon="خدمات پس از فروش"
        description="خدمات پس از فروش"
        iconAddress="https://www.banimode.com/img/cms/guarantee/customer-support.svg"
      /><ComponentServices
      altForIcon="تحویل سریع و آسان"
      description="تحویل سریع و آسان"
      iconAddress="https://www.banimode.com/img/cms/guarantee/Space.svg"
    />
    </Box>
  );
};
