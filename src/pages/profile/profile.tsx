import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  TextField,
  Typography,
} from '@mui/material';
import { Footer, LabelBottomNavigation } from 'components';
import style from './profile.module.css';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Component } from './component';
import {
  TelegramShareButton,
  TelegramIcon,
  InstapaperIcon,
  InstapaperShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';
import cookies from 'js-cookie';
import { HeaderResponsive } from 'pages/home/partials';
import toast from 'react-hot-toast';

const Profile = () => {
  const removeGifBanner = () => {
    document.getElementById('banner')!.style.display = 'none';
  };
  const handleRegisterUser = () => {
    // چک کردن خالی نبودن ایمیل
    const userNumber = document.querySelector<HTMLInputElement>('#userNumber');
    userNumber?.value.trim() === ''
      ? (userNumber!.style.border = '1.5px solid red')
      : (userNumber!.style.border = '');
    // چک کردن صحیح بودن شماره تلفن
    const iranPhoneRegex = /^09\d{9}$|^\+98?9\d{9}$/;
    iranPhoneRegex.test(userNumber!.value)
      ? null
      : toast.error('شماره تلفن صحیح نیست');
  };

  const url = 'https://example.com';
  const text = 'متن دلخواه شما';

  const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    text
  )}&url=${encodeURIComponent(url)}`;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url
  )}`;
  const token = cookies.get('token');
  console.log(token);

  return (
    <>
      {/* قیل از هشتصد پیکسل */}
      <Box
        className={style.befor800}
        sx={{
          width: '100%',
          height: 'h-screen',
          background: 'rgb(243,243,243)',
          paddingBottom: '4rem',
        }}
      >
        {/* تبلیغ چسبیده به بالای صفحه */}
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
        <Box
          sx={{
            maxWidth: '100%',
            height: '12rem',
            backgroundColor: '#1ac977',
            textAlign: 'center',
            paddingTop: '2rem',
          }}
        >
          <Box
            component={'img'}
            sx={{ width: '20rem', mixBlendMode: 'color-burn' }}
            src="/icons/logo.png"
          ></Box>
        </Box>
        {/* نمایش گزینه ثبت نام */}
        <Container style={{ marginTop: '-4rem' }}>
          <Box
            sx={{
              boxShadow: '1px 1px 10px rgb(240,240,240)',
              maxWidth: '100%',
              position: 'relative',
              padding: '1rem',
              height: '12rem',
              backgroundColor: 'white',
              borderRadius: '.5rem',
            }}
          >
            <Typography
              style={{
                maxWidth: '20rem',
                textAlign: 'center',
                alignContent: 'center',
                fontSize: '1.3rem',
                margin: '0 auto',
              }}
            >
              هم اکنون به حمع بانی مدی ها بپیوندید و از تخفیف ها زود تر از
              سایرین با خبر بشوید
            </Typography>
            <Button
              variant="contained"
              style={{
                position: 'absolute',
                right: '1px',
                left: '10px',
                bottom: '1rem',
                backgroundColor: '#1ac977',
                color: 'white',
                maxWidth: '100%',
                fontSize: '1.4rem',
              }}
            >
              ورود / ثبت نام
            </Button>
          </Box>

          <Box
            sx={{
              width: '100%',
              padding: '1rem',
              backgroundColor: 'rgb(255,255,255)',
              marginTop: '2rem',
            }}
          >
            <Component href="" title="راهنمای خرید" />
            <Divider />
            <Component href="" title="پرسش های متداول" />
            <Divider />
            <Component href="" title="شزایط بازگشت" />
            <Divider />
            <Component href="" title="قوانین و مقررات" />
            <Divider />
            <Component href="" title="درباره بانی مد" />
            <Divider />
            <Component href="" title="تماس با ما" />
            <Divider />
          </Box>
          {/* شبکه های اجتماعی */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-around',
              background: 'rgb(255,255,255)',
              marginTop: '1rem',
              maxWidth: '100%',
              padding: '.3rem',
            }}
          >
            <TelegramShareButton url="www.https://telegram.com/">
              <TelegramIcon
                style={{
                  width: '2.4rem',
                  height: '2.4rem',
                }}
                round
              />
            </TelegramShareButton>
            <InstapaperShareButton url="https://www.instapaper.com/">
              <InstapaperIcon
                style={{
                  width: '2.4rem',
                  height: '2.4rem',
                }}
                round
              />
            </InstapaperShareButton>
            <FacebookShareButton url={facebookShareUrl}>
              <FacebookIcon
                style={{
                  width: '2.4rem',
                  height: '2.4rem',
                }}
                round
              />
            </FacebookShareButton>
            <TwitterShareButton url={twitterShareUrl}>
              <TwitterIcon
                style={{
                  width: '2.4rem',
                  height: '2.4rem',
                }}
                round
              />
            </TwitterShareButton>
          </Box>
        </Container>
      </Box>
      {/* بعد از 800 پیکسل */}
      <HeaderResponsive className={style.header2} />
      <Box sx={{ display: 'none' }} className={style.after800}>
        {token ? (
          <Box
            sx={{
              width: '100%',
              height: '%',
              backgroundColor: 'rgb(243,243,243)',
            }}
          ></Box>
        ) : (
          <Box
            sx={{
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgb(243,243,243)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                textAlign: 'center',
                alignContent: 'center',
                width: '30rem',
                height: '25rem',
                backgroundColor: 'rgb(255,255,255)',
                borderRadius: '2rem',
                padding: '2rem',
              }}
            >
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <Typography variant="h4" component={'h4'}>
                  ورود یا ثبت نام
                </Typography>
                <Typography component={'span'}>
                  لطفا برای ادامه شماره همراه خود را واد کنید
                </Typography>
                <TextField type="text" id="userNumber" helperText={''} />
                <Button
                  variant="contained"
                  onClick={handleRegisterUser}
                  style={{ backgroundColor: '#00bf6f' }}
                >
                  ادامه
                </Button>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
      {/* فوتر بعد از 800 پیکسل */}
      <Footer />

      {/*نوار پیمایش پایین صفحه قبل از 800 پیکسل*/}
      <LabelBottomNavigation
        className={style.bottomNavigation}
        initialValue="پروفایل"
      />
    </>
  );
};
export default Profile;
