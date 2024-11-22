import { Box, Button, Container, Divider, Typography } from '@mui/material';
import style from './categorization.module.css';
import { Footer, LabelBottomNavigation, SearchComponent } from 'components';
import { useEffect, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SearchIcon from '@mui/icons-material/Search';
import {
  BeautyAndHealth,
  ChildrenAndEntertainment,
  CultureAndArt,
  DigitalGoods,
  Division,
  FashionAndClothing,
  FashionHouse,
  HomeAppliances,
  SportsAndTravel,
  TheLatest,
  WatchAndGold,
} from './partials';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AlarmOnIcon from '@mui/icons-material/AlarmOn';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import ChairIcon from '@mui/icons-material/Chair';
import TabletMacIcon from '@mui/icons-material/TabletMac';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ApartmentIcon from '@mui/icons-material/Apartment';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { HeaderResponsive } from 'pages/home/partials';
import { useNavigate } from 'react-router-dom';

const Categorization = () => {
  const [searchValue, setSearchValue] = useState('');
  const [topValue, setTopValue] = useState('2.5rem');
  const [title, setTitle] = useState(() => {
    const savedTitle = JSON.parse(localStorage.getItem('savedTitle')!);
    return savedTitle ? savedTitle : 'Fashion and Clothing';
  });

  const handleShowTabes = (index: string) => {
    setTitle(index);
  };
  useEffect(() => {
    localStorage.setItem('savedTitle', JSON.stringify(title));
  }, [title]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const handleBeforeUnload = () => {
  //     localStorage.setItem('savedTitle', JSON.stringify('Fashion and Clothing'));
  //   };

  //   window.addEventListener('unload', handleBeforeUnload);

  //   // پاک‌سازی رویداد هنگامUnmount شدن کامپوننت
  //   return () => {
  //     window.removeEventListener('unload', handleBeforeUnload);
  //   };
  // }, []);

  console.log(searchValue);
  const handleRemoveSearchNavbar = () => {
    const searchnavbar = document.querySelector<HTMLElement>(
      `.${style.searchInput}`
    );
    searchnavbar!.style.display = 'none';
  };
  const removeGifBanner = () => {
    document.getElementById('banner')!.style.display = 'none';
    document.getElementById('banner')!.style.display === 'none'
      ? setTopValue('0')
      : setTopValue('2.5rem');
    const searchnavbar = document.querySelector<HTMLElement>(
      `.${style.searchInput}`
    );
    searchnavbar!.style.top = '0';
  };
  const handleSearchInput = () => {
    const searchInput = document.querySelector<HTMLElement>(
      `.${style.searchInput}`
    );
    searchInput!.style.display = 'block';
  };
  return (
    <Box>
      {/* تبلیغ چسپیده به بالای صفحه */}
      <Box
        id="banner"
        className={style.banner}
        sx={{
          position: 'sticky',
          zIndex: '20',
          top: '0',
          left: '0',
          right: '0',
          width: '100%',
          height: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          className={style.gif}
          style={{
            width: '100%',
            height: '40px',
          }}
          src="public/imageForHome/gif/1716020397.gif"
          alt="promition banner"
        />

        <ClearIcon
          className={style.clearIcon}
          onClick={removeGifBanner}
          style={{
            position: 'absolute',
            zIndex: '21',
            left: '1rem',
            color: 'white',
            cursor: 'pointer',
          }}
        />
      </Box>
      {/* نوار سرچ */}
      <SearchComponent
        onChange={(e) => setSearchValue(e.target.value)}
        className={style.searchInput}
        onClick={handleRemoveSearchNavbar}
      />
      <Box
        className={style.header}
        sx={{
          position: 'fixed',
          left: '0',
          right: '0',
          top: topValue,
          zIndex: '20',
          backgroundColor: 'white',
        }}
      >
        <Container sx={{ marginTop: '1rem' }}>
          {/* نوار جستجو پیمایش بالا صفحه */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              onClick={handleSearchInput}
              className={style.searchNavbar}
              sx={{
                overflow: 'hidden',
                width: '100%',
                backgroundColor: '#f1f1f1',
                borderRadius: '1.5rem ',
                display: 'flex',
                alignItems: 'center',
                paddingRight: '.4rem',
              }}
            >
              <SearchIcon />
              <Box
                component={'input'}
                placeholder="جستجو در میان بیش از هفتصد برند و صد ها هزار کالا"
                sx={{
                  border: 'none',
                  outline: 'none',
                  width: '100%',
                  height: '100%',
                  fontSize: '1rem',
                  padding: '.8rem .2rem .8rem .8rem',
                  backgroundColor: 'inherit',
                }}
              ></Box>
            </Box>
            <ArrowBackIcon style={{ marginRight: '1rem' }}   onClick={()=>navigate("/")} />
          </Box>
        </Container>
        <Divider sx={{ marginTop: '1rem' }} />
      </Box>
      {/* هدر برای صفحات بیشتر از 800 پیکسل */}
      <HeaderResponsive className={style.header2} />

      {/* دسته بندی */}
      <Box
        className={style.grouping}
        sx={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          top: '4.8rem',
        }}
      >
        {/* عنوان محصولات */}
        <Box
          className={style.productTitle}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '15%',
            // paddingBottom: '3.5rem',
            overflowY: 'auto',
            height: '21rem',
          }}
        >
          <Division
            onClick={() => handleShowTabes('Fashion and Clothing')}
            classNameFordivision={
              title === 'Fashion and Clothing'
                ? { background: 'white' }
                : { background: 'rgb(245, 245, 247)' }
            }
            classNameForImage={
              title === 'Fashion and Clothing'
                ? { background: 'rgb(2, 161, 92)' }
                : { background: '' }
            }
            classNameFortext={
              title === 'Fashion and Clothing'
                ? { color: 'rgb(2, 161, 92)' }
                : { color: 'rgb(83, 86, 90)' }
            }
            categoryImageAddress="/img/cloth.png"
            categoryName="مد و پوشاک"
          />
          <Division
            onClick={() => handleShowTabes('BeautyAndHealth')}
            classNameFordivision={
              title === 'BeautyAndHealth'
                ? { background: 'white' }
                : { background: 'rgb(245, 245, 247)' }
            }
            classNameFortext={
              title === 'BeautyAndHealth'
                ? { color: 'rgb(2, 161, 92)' }
                : { color: 'rgb(83, 86, 90)' }
            }
            categoryImage={
              <FavoriteBorderIcon
                style={
                  title === 'BeautyAndHealth'
                    ? { color: 'rgb(2, 161, 92)' }
                    : { color: '' }
                }
              />
            }
            categoryName="زیبایی و سلامت"
          />
          <Division
            onClick={() => handleShowTabes('watchAndGold')}
            classNameFordivision={
              title === 'watchAndGold'
                ? { background: 'white' }
                : { background: 'rgb(245, 245, 247)' }
            }
            classNameFortext={
              title === 'watchAndGold'
                ? { color: 'rgb(2, 161, 92)' }
                : { color: 'rgb(83, 86, 90)' }
            }
            categoryImage={
              <AlarmOnIcon
                style={
                  title === 'watchAndGold'
                    ? { color: 'rgb(2, 161, 92)' }
                    : { color: '' }
                }
              />
            }
            categoryName="ساعت و طلا"
          />
          <Division
            onClick={() => handleShowTabes('sportAndTravel')}
            classNameFordivision={
              title === 'sportAndTravel'
                ? { background: 'white' }
                : { background: 'rgb(245, 245, 247)' }
            }
            classNameFortext={
              title === 'sportAndTravel'
                ? { color: 'rgb(2, 161, 92)' }
                : { color: 'rgb(83, 86, 90)' }
            }
            categoryImage={
              <SkateboardingIcon
                style={
                  title === 'sportAndTravel'
                    ? { color: 'rgb(2, 161, 92)' }
                    : { color: '' }
                }
              />
            }
            categoryName="ورزش و سفر"
          />
          <Division
            onClick={() => handleShowTabes('homeAppliances')}
            classNameFordivision={
              title === 'homeAppliances'
                ? { background: 'white' }
                : { background: 'rgb(245, 245, 247)' }
            }
            classNameFortext={
              title === 'homeAppliances'
                ? { color: 'rgb(2, 161, 92)' }
                : { color: 'rgb(83, 86, 90)' }
            }
            categoryImage={
              <ChairIcon
                style={
                  title === 'homeAppliances'
                    ? { color: 'rgb(2, 161, 92)' }
                    : { color: '' }
                }
              />
            }
            categoryName="لوازم خانه"
          />
          <Division
            onClick={() => handleShowTabes('digitalGoods')}
            classNameFordivision={
              title === 'digitalGoods'
                ? { background: 'white' }
                : { background: 'rgb(245, 245, 247)' }
            }
            classNameFortext={
              title === 'digitalGoods'
                ? { color: 'rgb(2, 161, 92)' }
                : { color: 'rgb(83, 86, 90)' }
            }
            categoryImage={
              <TabletMacIcon
                style={
                  title === 'digitalGoods'
                    ? { color: 'rgb(2, 161, 92)' }
                    : { color: '' }
                }
              />
            }
            categoryName="کالای دیجیتال"
          />
          <Division
            onClick={() => handleShowTabes('childrenAndEntertainment')}
            classNameFordivision={
              title === 'childrenAndEntertainment'
                ? { background: 'white' }
                : { background: 'rgb(245, 245, 247)' }
            }
            classNameFortext={
              title === 'childrenAndEntertainment'
                ? { color: 'rgb(2, 161, 92)' }
                : { color: 'rgb(83, 86, 90)' }
            }
            categoryImage={
              <ChildCareIcon
                style={
                  title === 'childrenAndEntertainment'
                    ? { color: 'rgb(2, 161, 92)' }
                    : { color: '' }
                }
              />
            }
            categoryName="کودک و سرگرمی"
          />
          <Division
            onClick={() => handleShowTabes('cultureAndArt')}
            classNameFordivision={
              title === 'cultureAndArt'
                ? { background: 'white' }
                : { background: 'rgb(245, 245, 247)' }
            }
            classNameFortext={
              title === 'cultureAndArt'
                ? { color: 'rgb(2, 161, 92)' }
                : { color: 'rgb(83, 86, 90)' }
            }
            categoryImage={
              <EventNoteIcon
                style={
                  title === 'cultureAndArt'
                    ? { color: 'rgb(2, 161, 92)' }
                    : { color: '' }
                }
              />
            }
            categoryName="فرهنگ و هنر"
          />
          <Division
            onClick={() => handleShowTabes('fashionHouse')}
            classNameFordivision={
              title === 'fashionHouse'
                ? { background: 'white' }
                : { background: 'rgb(245, 245, 247)' }
            }
            classNameFortext={
              title === 'fashionHouse'
                ? { color: 'rgb(2, 161, 92)' }
                : { color: 'rgb(83, 86, 90)' }
            }
            categoryImage={
              <ApartmentIcon
                style={
                  title === 'fashionHouse'
                    ? { color: 'rgb(2, 161, 92)' }
                    : { color: '' }
                }
              />
            }
            categoryName="خانه مد"
          />
          <Division
            onClick={() => handleShowTabes('theLatest')}
            classNameFordivision={
              title === 'theLatest'
                ? { background: 'white' }
                : { background: 'rgb(245, 245, 247)' }
            }
            classNameFortext={
              title === 'theLatest'
                ? { color: 'rgb(2, 161, 92)' }
                : { color: 'rgb(83, 86, 90)' }
            }
            categoryImage={
              <StarBorderIcon
                style={
                  title === 'theLatest'
                    ? { color: 'rgb(2, 161, 92)' }
                    : { color: '' }
                }
              />
            }
            categoryName="جدیدترین ها"
          />
        </Box>
        {/* نمایش محصولات */}
        <Box
          className={style.product}
          sx={{
            width: '85%',
            padding: '1rem 1rem 3.5rem 1rem',
            overflowY: 'auto',
            height: '21rem',
          }}
        >
          {title === 'Fashion and Clothing' && <FashionAndClothing />}
          {title === 'BeautyAndHealth' && <BeautyAndHealth />}
          {title === 'watchAndGold' && <WatchAndGold />}
          {title === 'sportAndTravel' && <SportsAndTravel />}
          {title === 'homeAppliances' && <HomeAppliances />}
          {title === 'digitalGoods' && <DigitalGoods />}
          {title === 'childrenAndEntertainment' && <ChildrenAndEntertainment />}
          {title === 'cultureAndArt' && <CultureAndArt />}
          {title === 'fashionHouse' && <FashionHouse />}
          {title === 'fashionHouse' && <FashionHouse />}
          {title === 'theLatest' && <TheLatest />}
        </Box>
      </Box>
      {/* بدنه برای بیشتر از 800 پیکسل */}
      <Box
        className={style.notFound}
        sx={{ placeItems: 'center', display: 'none' }}
      >
        <Box
          component={'img'}
          src="/notfound/notfound.png"
          alt="not found omage"
        ></Box>
        <Typography style={{ fontSize: '1.2rem', marginTop: '1.5rem' }}>
          صفحه مورد نظر شما یافت نشد
        </Typography>
        <Button
          onClick={() => navigate('/')}
          variant="contained"
          style={{ background: '#00bf6f', marginTop: '1.5rem', width: '10rem' }}
        >
          صفحه اصلی
        </Button>
      </Box>
      {/* نوار پیمایش پایین صفحه */}
      <LabelBottomNavigation
        className={style.bottomNavigation}
        initialValue="دسته بندی ها"
      />
      <Footer />
    </Box>
  );
};
export default Categorization;
