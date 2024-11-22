/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { signUpType } from "./type";
import style from "./signUp.module.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import toast from "react-hot-toast";
import { instance } from "app/App";
import { useNavigate } from "react-router-dom";

export const SignUp: React.FC<signUpType> = ({
  removeRegisterModal,
  removeRegisterAndShowLogin,
  showLoginAfterRegister,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const userSchema = yup.object({
    email: yup.string().required(),
    phoneNumber: yup.string().required(),
    name: yup.string(),
    agree: yup.boolean(),
    password: yup.string().required().min(6),
    repeatPassword: yup.string().required().min(6),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const navigate = useNavigate();

  const handleRegisterForm = handleSubmit(async (data) => {
    try {
      if (data.password !== data.repeatPassword)
        return toast.error("رمز ها با هم همخوانی ندارند");
      console.log(data);
      if (isChecked) {
        console.log("ok");
      } else {
        return toast.error("لطفا تیک قوانین را میپذیرم را  پر کنید");
      }
      setIsLoading(true);
      const res = await instance.post("/register", data);
      console.log(res);
      setIsLoading(false);
      toast.success("ثبت نام شما با موفقیت انجام شد");
      showLoginAfterRegister();
      navigate("", {
        state: {
          email: data.email,
          password: data.password,
        },
      });
    } catch (error: any) {
      setIsLoading(false);

      // بررسی اینکه آیا error.response وجود دارد یا نه
      if (error.response && error.response.data && error.response.data.msg) {
        console.log("خطای سرور:", error.response.data.msg);
        toast.error(error.response.data.msg);
      } else {
        console.log("خطای غیرمنتظره:", error);
        toast.error("خطای غیرمنتظره‌ای رخ داد");
      }
    }
  });

  return (
    <>
      <Box
        className={style.signUp}
        sx={{
          position: "fixed",
          zIndex: "1000",
          top: "10%",
          left: "20%",
          right: "20%",
          bottom: "10%",
          backgroundColor: "white",
          borderRadius: ".4rem",
          padding: "1rem",
          overflowY: "auto",
        }}
      >
        <ClearIcon
          sx={{ float: "left", cursor: "pointer" }}
          onClick={removeRegisterModal}
        />

        <Typography
          variant="h5"
          component={"h5"}
          sx={{ textAlign: "center", marginTop: "1rem", fontWeight: "bold" }}
        >
          ثبت نام کاربر
        </Typography>
        <Box
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
          onSubmit={handleRegisterForm}
        >
          <TextField
            variant="filled"
            required
            helperText={errors?.email ? "email is required" : ""}
            type="email"
            InputProps={register("email")}
            label="ایمیل را وارد کنید"
          />
          <TextField
            variant="filled"
            required
            type="text"
            InputProps={register("phoneNumber")}
            label="شماره تلفن خود را وارد کنید"
          />
          <TextField
            variant="filled"
            type="text"
            InputProps={register("name")}
            label="نام خود را وارد کنید"
          />
          <TextField
            variant="filled"
            required
            type={"password"}
            InputProps={register("password")}
            label="رمز خود را وارد کنید"
            helperText={
              errors?.password
                ? "The password must be at least 6 characters long"
                : ""
            }
          />
          <TextField
            required
            variant="filled"
            type={"repaetPassword"}
            InputProps={register("repeatPassword")}
            label="تکرار رمز عبور"
            helperText={
              errors?.password
                ? "The password must be at least 6 characters long"
                : ""
            }
          />
          <FormControlLabel
            control={
              <Checkbox
                {...register("agree", { required: true })}
                checked={isChecked} // وضعیت چک‌باکس را به آن وصل می‌کنیم
                onChange={handleCheckboxChange}
              />
            }
            label="با شرایط و قوانین موافقم"
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ backgroundColor: "#00bf6f" }}
          >
            {isLoading ? "loading..." : "ثبت نام"}
          </Button>
        </Box>
        <Box display={"flex"} marginTop={"1rem"}>
          حساب کاربری دارید برای ورود
          <Box
            component={"button"}
            sx={{
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "inherit",
              padding: ".2rem",
              color: "#00bf6f",
              cursor: "pointer",
            }}
            onClick={removeRegisterAndShowLogin}
          >
            اینجا
          </Box>
          کلیک کنید
        </Box>
      </Box>
    </>
  );
};
