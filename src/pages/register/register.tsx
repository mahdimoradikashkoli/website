/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  keyframes,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TermsAndRules } from "pages/TermsAndRules";
import { useState } from "react";
import { loginAndRegisterType } from "./type";
import toast from "react-hot-toast";
import { instance } from "app/App";
// const slideIn = keyframes`
// from{
// top:100%
// }
// to{
// top:0
// }
// `;

export const Register: React.FC<loginAndRegisterType> = ({
  handleOnClick,
  showLoginForm,
  handleShowTermsAndRules,
}) => {
  // const [termsAndrules, setTermsAndrules] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const userSchema = yup.object({
    email: yup.string().required(),
    phoneNumber: yup.string().required(),
    name: yup.string(),
    password: yup.string().required().min(6),
    repeatPassword: yup.string().min(6),
    agree: yup.boolean(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const handleLoginform = handleSubmit(async (data) => {
    try {
      console.log(data);
      // چک کردن یکی بودن تکرار رمز با رمز عبور
      if (data.password !== data.repeatPassword)
        return toast.error("رمز ها با هم همخوانی ندارند");
      const checkBox = document.querySelector<HTMLInputElement>(".checkBox");
      if (!checkBox?.checked) {
        toast.error("لطفا تیک قوانین را می پذیرم را انتخاب بکنید");
        setIsLoading(false);
        return;
      }
      setIsLoading(true);
      const res = await instance.post("/wishlist/register", data);
      console.log(res);
      setIsLoading(false);
      toast.success("ثبت نام شما با موفقیت انجام شد");

      showLoginForm();
    } catch (error: any) {
      console.log(error.response.data.msg);
      toast.error(error.response.data.msg);
      setIsLoading(false);
    }
  });
  return (
    <>
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
              ثبت نام کاربر
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
              marginTop: "2rem",
            }}
            component={"form"}
            onSubmit={handleLoginform}
          >
            <Typography variant="h5" component={"span"} fontWeight={"bold"}>
              سلام، لطفا برای ثبت نام اطلاعات زیر را تکمیل کنید
            </Typography>
            <TextField
              id="email"
              label="ایمیل خود را وارد کنید"
              required
              type="email"
              variant="filled"
              InputProps={register("email")}
              helperText={errors?.email ? "email is required" : ""}
            />
            <TextField
              id="phoneNumber"
              label="شماره تلفن خود را وارد کنید"
              required
              type="string"
              variant="filled"
              InputProps={register("phoneNumber")}
              helperText={errors?.phoneNumber ? "phoneNumber is required" : ""}
            />
            <TextField
              id="name"
              label="نام خود را وارد کنید"
              type="string"
              variant="filled"
              InputProps={register("name")}
              helperText={errors?.name ? "name is required" : ""}
            />
            <TextField
              id="outlined-password-input"
              label="رمز خود را وارد کنید"
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
            <TextField
              id="repeat password"
              label="تکرار رمز عبور"
              type="password"
              autoComplete="current-password"
              required
              variant="filled"
              InputProps={register("repeatPassword")}
              helperText={
                errors?.password
                  ? "The password must be at least 6 characters long"
                  : ""
              }
            />
            <Box sx={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
              <Typography>با شرایط و قوانین استفاده از سایت موافقم</Typography>
              <Box
                component={"input"}
                type="checkbox"
                className="checkBox"
                {...register("agree", { required: true })}
              ></Box>
            </Box>
            <Button
              type="submit"
              variant="contained"
              style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            >
              {isLoading ? "در حال پاسخ گرفتن از سرور" : "ثبت نام"}
            </Button>
            <Box
              sx={{
                fontSize: "1.5rem",
                textAlign: "right",
                display: "inline-block",
              }}
            >
              <Typography component={"span"}>
                برای مشاهده شرایط و قوانین{" "}
                <Box
                  component={"button"}
                  sx={{
                    fontSize: "1.4rem",
                    border: "none",
                    outline: "none",
                    color: "blue",
                    textDecoration: "underline",
                    cursor: "pointer",
                    ":hover": {
                      transform: "scale(1.3)",
                    },
                  }}
                  onClick={handleShowTermsAndRules}
                >
                  اینجا
                </Box>{" "}
                کلیک کنید
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
