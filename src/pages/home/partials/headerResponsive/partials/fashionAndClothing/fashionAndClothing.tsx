import { Box, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import style from "./fashionAndClothing.module.css";
import { Product, ProductSubject } from "../../component";
import {FC} from "react"
import {fashionAndClothingType} from "./type"

export const FashionAndClothing:FC<fashionAndClothingType> = ({className}) => {
  const categories = [
    {
      subject: "لباس زنانه",
      products: [
        "تیشرت زنانه",
        "تاپ زنانه",
        "شلوار زنانه",
        "شلوارک زنانه",
        "لباس زیر زنانه",
        "لباس راحتی زنانه",
        "بلوز زنانه",
        "شومیز زنانه",
        "پیراهن زنانه",
        "تونیک زنانه",
        "لباس مجلسی زنانه",
        "سر همی زنانه",
      ],
    },
    {
      subject: null,
      products: [
        "سارافون زنانه",
        "کت زنانه",
        "جلیقه زنانه",
        "کاپشن زنانه",
        "پالتو زنانه",
        "بارانی زنانه",
        "جوراب زنانه",
        "جوراب شلواری زنانه",
        "پوشش اسلامی بانوان",
        "شال و روسری",
      ],
    },
    {
      subject: "لباس مردانه",
      products: [
        "تیشرت مردانه",
        "پولوشرت مردانه",
        "شلوار مردانه",
        "پلوشرت مردانه",
        "شلوارک مردانه",
        "لباس راحتی مردانه",
        "لباس زیر مردانه",
        "کت شلوار مردانه",
        "کت تک مردانه",
        "کاپشن مردانه",
        "پالتو مردانه",
        "پافر مردانه",
        "ژاکت و پلیور مردانه",
        "بارانی مردانه",
      ],
    },
    // {
    //   subject: "کفش زنانه",
    //   products: [
    //     "دمپایی و صندل زنانه",
    //     "کفش روزمره زنانه",
    //     "کالج زنانه",
    //     "کفش اداری زنانه",
    //     "کفش پاشنه بلند",
    //     "بوت و نیم بوت زنانه",
    //     "کفش ورزشی زنانه",
    //   ],
    // },
    // {
    //   subject: "کفش مردانه",
    //   products: [
    //     "دمپایی و صندل مردانه",
    //     "کفش روزمره مردانه",
    //     "کفش رسمی مردانه",
    //     "کالج مردانه",
    //     "بوت و نیم بوت مردانه",
    //   ],
    // },
    // {
    //   subject: "کیف زنانه",
    //   products: [
    //     "کیف دوشی زنانه",
    //     "کیف اداری زنانه",
    //     "کیف دستی زنانه",
    //     "کوله پشتی زنانه",
    //   ],
    // },
    // {
    //   subject: "کیف مردانه",
    //   products: [
    //     "کیف اداری مردانه",
    //     "کیف دوشی مردانه",
    //     "کیف پاسپورتی و دستی مردانه",
    //     "جاکارتی و کیف پول مردانه",
    //     "کوله پشتی مردانه",
    //     "چمدان و ساک مسافرتی مردانه",
    //   ],
    // },
    // {
    //   subject: "اکسسوری زنانه",
    //   products: [
    //     "عینک آفتابی زنانه",
    //     "بند عینک زنانه",
    //     "کیف عینک زنانه",
    //     "کش مو و تل مو",
    //     "گیره سر و کلیپس مو",
    //     "دستکش زنانه",
    //     "کلاه زنانه",
    //     "ست شال گردن زنانه",
    //     "کمربند زنانه",
    //     "جا کلیدی زنانه",
    //     "چتر زنانه",
    //     "ست هدیه زنانه",
    //     "دستمال تضمینی زنانه",
    //   ],
    // },
    // {
    //   subject: "اکسسوری مردانه",
    //   products: [
    //     "عینک آفتابی مردانه",
    //     "بند عینک مردانه",
    //     "کیف عینک مردانه",
    //     "کمربند مردانه",
    //     "کراوات مردانه",
    //     "ست کراوات مردانه",
    //     "پاپیون مردانه",
    //     "جا کلیدی مردانه",
    //     "چتر مردانه",
    //     "ست هدیه مردانه",
    //     "دستمال تضمینی مردانه",
    //   ],
    // },
  ];

  return (
    <>
      <Box
      className={className}
        sx={{
          position: "relative",
          width: "85%",
          height: "24rem",
          padding: ".7rem 1rem .4rem .4rem",
        }}
      >
        <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
          <Typography component={"h3"} fontWeight={"bold"} sx={{ cursor: "pointer", "&:hover": { color: "green" } }}>
            همه محصولات مد و پوشاک
          </Typography>
          <ArrowBackIosIcon style={{ width: ".8rem", height: ".8rem" }} />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box className={style.boxProduct}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // backgroundColor: "red",
                width: "9rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              {categories[0].subject && (
                <ProductSubject
                  productSubject={categories[0].subject}
                  href=""
                />
              )}
              {categories[0].products &&
                categories[0].products.map((product, idx) => (
                  <Product value={product} key={idx} />
                ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "9rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              {categories["1"].products.map((product, idx) => (
                <Product value={product} key={idx} href="" />
              ))}
              {categories["2"].subject && (
                <ProductSubject
                  productSubject={categories["2"].subject}
                  href=""
                />
              )}
              {categories["2"].products.splice(0, 2).map((product, idx) => (
                <Product value={product} href="" key={idx} />
              ))}
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "9rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              <Product value="شلوار مردانه " />
              <Product value="پلوشرت مردانه" />
              <Product value="شلوارک مردانه" />
              <Product value="تیشرت مردانه" />
              <Product value="لباس راحتی مردانه" />
              <Product value="لباس زیر مردانه" />
              <Product value="کت شلوار مردانه" />
              <Product value="کت تک مردانه" />
              <Product value="کاپشن مردانه" />
              <Product value="پالتو مردانه" />
              <Product value="پافر مردانه" />
              <Product value="ژاکت و پلیور مردانه" />
              <Product value="بارانی مردانه" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "9rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              <Product value="ژاکت و پلیور مردانه" />
              <Product value="هودی مردانه" />
              <Product value="سویشرت مردانه" />
              <Product value="تاپ مردانه" />
              <Product value="جوراب مردانه" />
              <Product value="پیراهن مردانه" />
              {/* کفش زنانه */}
              <ProductSubject productSubject="کفش زنانه" href="" />
              <Product value="دمپایی و صندل زنانه" />
              <Product value="کفش روزمره زنانه" />
              <Product value="کالج زنانه" />
              <Product value="کفش اداری زنانه" />
              <Product value="کفش پاشنه بلند" />
              <Product value="بوت و نیم بوت زنانه" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "9rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              <Product value="کفش ورزشی زنانه" />
              <ProductSubject productSubject="کفش مردانه" href="" />
              <Product value="دمپایی و صندل مردانه" />
              <Product value="کفش روزمره مردانه" />
              <Product value="کفش رسمی مردانه" />
              <Product value="کالج مردانه" />
              <Product value="بوت و نیم بوت مردانه" />
              {/* کیف زنانه */}
              <ProductSubject productSubject="کیف زنانه" href="" />
              <Product value="کیف دوشی زنانه" />
              <Product value="کیف اداری زنانه" />
              <Product value="کیف دستی زنانه" />
              <Product value="کوله پشتی زنانه" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "9rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              <Product value="کفش پاشنه بلند" />
              <Product value="بوت و نیم بوت زنانه" />
              <Product value="کفش ورزشی زنانه" />
              {/* کیف مردانه */}
              <ProductSubject productSubject="کیف مردانه" href="" />
              <Product value="کیف اداری مردانه" />
              <Product value="کیف دوشی مردانه" />
              <Product value="کیف پاسپورتی  و دستس مردانه" />
              <Product value="جاکارتی و کیف پول مردانه" />
              <Product value="کوله پشتی مردانه" />
              <Product value="چمدان و ساک مسافرتی مردانه" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "9rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              {/* اکسسوری زنانه */}
              <ProductSubject productSubject="اکسسوری زنانه" href="" />
              <Product value="عینک آفتابی زنانه" />
              <Product value="بند عینک زنانه" />
              <Product value="کیف عینک زنانه" />
              <Product value="کش مو و تل مو" />
              <Product value="گیره سر و کلیپس مو" />
              <Product value="دستکش زنانه" />
              <Product value="کلاه زنانه " />
              <Product value="ست شال گردن زنانه" href="" />
              <Product value="کمربند زنانه" href="" />
              <Product value="جا کلیدی زنانه" href="" />
              <Product value="چتر زنانه" href="" />
              <Product value="ست هدیه زنانه" href="" />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "9rem",
                height: "21rem",
                flexShrink: "0",
              }}
            >
              <Product value="دستمال تضمینی زنانه" href="" />
              <ProductSubject productSubject="اکسسوری  مردانه" href="" />
              <Product value="عینک آفتابی مردانه" href="" />
              <Product value="کیف عینک زنانه" />
              <Product value="بند عینک مردانه" />
              <Product value="کیف عینک مردانه" />
              <Product value="کمربند مردانه" />
              <Product value="کراوات مردانه" />
              <Product value="ست کراوات مردانه" href="" />
              <Product value="پاپیون مردانه" href="" />
              <Product value="جا کلیدی زنانه" href="" />
              <Product value="چتر زنانه" href="" />
              <Product value="ست هدیه زنانه" href="" />
            </Box>
            <Product value="دستمال تضمینی زنانه" href="" />
          </Box>
          <Box
          className={style.productImage}
            sx={{
              width: "20%",
              height: "20rem",
              display: "flex",
              flexDirection: "column",
              overflowY: "auto",
              gap: ".5rem",

            }}
          >
            <Box
              component={"img"}
              alt="product image"
              src="/img/mahdi.png"
              style={{
                cursor:"pointer",
                width: "100%",
                height: "13rem",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: ".3rem",
              }}
            ></Box>
            <Box
              component={"img"}
              alt="product image"
              src="/img/mahdi2.png"
              style={{
                cursor:"pointer",
                width: "100%",
                height: "13rem",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: ".3rem",
              }}
            ></Box>
            <Typography component={"h3"} fontSize={"1.5rem"}>بر گزیده ها </Typography>
            <Typography component={"a"} href="">
            <Box style={{border:"1px solid rgba(150,150,150,.5)"}} component={"img"} alt="icon marck" src="https://www.banimode.com/img/m/965-brand-136x69.jpg"></Box>

            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
