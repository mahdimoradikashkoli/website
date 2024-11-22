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
import { signInType } from "./type";
import { useForm } from "react-hook-form";
import { instance } from "app/App";
import toast from "react-hot-toast";
import cookies from "js-cookie";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const SignIn: React.FC<signInType> = ({
  removeRegisterModal,
  removeLoginAndShowLogin,
}) => {
  const [isLoadind,setIsloading]=useState(false)
  const [isChecked, setIsChecked] = useState(false);
  const userSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required().min(6),
    agree: yup.boolean(),
  });
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>,) => {
    setIsChecked(event.target.checked);
  };
const location=useLocation()
const {email,password}=location.state || {}
console.log(email,password)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const handleLoginForm = handleSubmit(async (data) => {
    console.log(data)
    try {
      if (!data.email || !data.password)
        toast.error("لطفا ایمیل و پسورد را وارد کنید");
      if (isChecked) {
        console.log("ok");
      } else {
        return toast.error("لطفا تیک قوانین را میپذیرم را  پر کنید");
      }
      setIsloading(true)
      const res = await instance.post("/login", data);
      cookies.set("baniToken", res.data.token);
      setIsloading(false)
      toast.success("ورود با موفقیت انجام شد");
      window.location.reload();
    } catch (error: any) {
      setIsloading(false)
      toast.error(error.response.data.msg);
    }
  });
  return (
    <>
      <Box
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
          ورود کاربر
        </Typography>
        <Box
          onSubmit={handleLoginForm}
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <TextField
          value={email}
            id="email"
            required
            type="email"
            variant="filled"
            inputProps={register("email")}
            label="ایمیل را وارد کنید"
            helperText={errors?.email ? "email is required" : ""}
          />
          <TextField
          value={password}
            id="outlined-password-input"
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
            label="رمز خود را وارد کنید"
          />
          <Button type={"submit"} variant="contained" sx={{ backgroundColor: "#00bf6f" }}>
            {isLoadind ? "loading...":"ورود"}
          </Button>
          <FormControlLabel
            control={<Checkbox  {...register("agree", { required: true })}
            checked={isChecked} // وضعیت چک‌باکس را به آن وصل می‌کنیم
            onChange={handleCheckboxChange}/>}
            label="با شرایط و قوانین موافقم"
          
          />
        </Box>
        <Box display={"flex"}>
          حساب کاربری ندارید برای ثبت نام
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
            onClick={removeLoginAndShowLogin}
          >
            اینجا
          </Box>
          کلیک کنید
        </Box>
      </Box>
    </>
  );
};
