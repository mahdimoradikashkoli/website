/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { instance } from "app/App";
import toast from "react-hot-toast";
import  cookies  from 'js-cookie';
import {loginAndRegisterType} from "./type"

export const Login: React.FC<loginAndRegisterType> = ({
  handleOnClick,
  handleShowRegisterForm,
  showWishList
}) => {
  
  const userSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required().min(6),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema)
  });
  const handleLoginform = handleSubmit(async (data) => {
    console.log(data);
    try {
      if(!data.email || !data.password) toast.error("لطفا ایمیل و پسورد را وارد کنید")
      const res = await instance.post("/wishlist/login", data);
      cookies.set("baniToken",res.data.token)
      toast.success("ورود با موفقیت انجام شد")
      showWishList()
    } catch (error:any) {
      toast.error(error.response.data.msg)
    }
  });
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          alignContent: "center",
          width: "100%",
          height: "3rem",
          backgroundColor: "rgb(250,250,250)",
          borderBottom: ".001rem solid rgb(200,200,200)",
        }}
      >
        <Container>
          <Typography sx={{ display: "inline-block", float: "center" }}>
            ورود کاربر
          </Typography>
          <ArrowBackIcon
            onClick={handleOnClick}
            style={{ display: "inline-block", float: "left" }}
          />
        </Container>
      </Box>

      <Container
        sx={{
          width: "100%",
          height: "100%",
          textAlign: "center",
          alignContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
          component={"form"}
          onSubmit={handleLoginform}
        >
          <Typography variant="h5" component={"span"} fontWeight={"bold"}>
            ورود کاربر
          </Typography>
          <TextField
            id="email"
            label="email"
            required
            type="email"
            variant="filled"
            InputProps={register("email")}
            helperText={errors?.email ? "email is required" : ""}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            required
            variant="filled"
            InputProps={register("password")}
            helperText={
              errors?.password
                ? "The password must be at least 6 characters long"
                : ""
            }
          />
          <Button
            type="submit"
            variant="contained"
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
          >
            لاگین
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: "1rem",
            fontSize: "1.5rem",
            textAlign: "right",
          }}
        >
          <Typography
            style={{ display: "inline-block", fontSize: "1.2rem" }}
            component={"span"}
          >
            حساب کاربری ندارید ؟ برای ایجاد حساب کاربری{" "}
            <Box
              component={"button"}
              onClick={handleShowRegisterForm}
              sx={{
                outline: "none",
                border: "none",
                color: "blue",
                fontSize: "1.4rem",
                textDecoration: "underline",
                cursor: "pointer",
                ":hover": {
                  transform: "scale(1.3)",
                },
              }}
            >
              اینجا
            </Box>{" "}
            کلیک کنید
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
