import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import CategoryIcon from '@mui/icons-material/Category';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import HomeIcon from '@mui/icons-material/Home';
interface NavigationProps {
  initialValue: string;
}
export const LabelBottomNavigation: React.FC<NavigationProps> = ({initialValue}) => {
  // مقدار اولیه را از Local Storage بخوانید یا "خانه" را به عنوان مقدار پیش‌فرض تنظیم کنید
  const [value, setValue] = React.useState(() => {
    return localStorage.getItem("navigationValue") || "خانه";
  });

  const handleChange = (event: React.SyntheticEvent, initialValue: string) => {
    setValue(initialValue);
    // مقدار جدید را در Local Storage ذخیره کنید
    localStorage.setItem("navigationValue", initialValue);
  };

  // پاک کردن Local Storage وقتی که کاربر سایت را می‌بندد
  // React.useEffect(() => {
  //   const handleUnload = () => {
  //     localStorage.removeItem("navigationValue");
  //   };

  //   window.addEventListener("beforeunload", handleUnload);

  //   // Cleanup listener on component unmount
  //   return () => {
  //     window.removeEventListener("beforeunload", handleUnload);
  //   };
  // }, []);

  return (
    <BottomNavigation
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
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction
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
        label="پروفایل"
        value="پروفایل"
        icon={<PersonOutlineIcon />}
      />
    </BottomNavigation>
  );
}
