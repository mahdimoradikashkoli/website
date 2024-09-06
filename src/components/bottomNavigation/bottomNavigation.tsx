import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import CategoryIcon from '@mui/icons-material/Category';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
interface NavigationProps {
  initialValue?: React.ReactNode;
  className?:string
}
export const LabelBottomNavigation: React.FC<NavigationProps> = ({initialValue,className}) => {
 
  const navigate=useNavigate()

  return (
    <BottomNavigation
    className={className}
      sx={{
        width: "100%",
        backgroundColor: "white",
        boxShadow:"-3px 0px 10px rgba(200,200,200,1)",
        borderRadius: '.1rem',
        position:'fixed',
        bottom:'0',
        left:'0',
        right:'0',
        zIndex:'10',
      }}
      value={initialValue}
    >
      <BottomNavigationAction
      onClick={()=>navigate("/")}
        label="خانه"
        value="خانه"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        label="دسته بندی ها"
        value="دسته بندی ها"
        icon={<CategoryIcon />}
      />
      <BottomNavigationAction
        label="سبد خرید"
        value="سبد خرید"
        icon={<ShoppingBasketIcon />}
      />
      <BottomNavigationAction
      onClick={()=> navigate("/profile")}
        label="پروفایل"
        value="پروفایل"
        icon={<PersonOutlineIcon />}
      />
    </BottomNavigation>
  );
}
