import { Box, Container, Typography } from '@mui/material';
import { Footer, LabelBottomNavigation, Navigation } from 'components';
import { useNavigate } from 'react-router-dom';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { HeaderResponsive } from 'pages/home/partials';
import style from './shoppingCard.module.css';

export const ShoppingCart = () => {
  const navigate = useNavigate();
  return (
    <Box>
      {/* header for after 800px */}
      <HeaderResponsive className={style.headerResponsive} />
      <Container className={style.container}>
        {/* navigation befor 800px */}
        <Box className={style.navigation}>
          <Navigation
            backAddress={() => navigate('/')}
            titleOfPage="سبد خرید"
          />
        </Box>

        <Box
        className={style.shoppingCard}
          sx={{
            maxWidth: '100%',
            paddingBottom: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding:"2rem",
              border:".1rem solid rgb(200,200,200)",
              borderRadius:".7rem"
            }}
          >
            <ShoppingBagIcon style={{ color: 'rgb(100,100,100)' }} />
            <Typography component={'p'}>سبد خرید شما خالی است.</Typography>
          </Box>
        </Box>
      </Container>
      <LabelBottomNavigation
        className={style.bottomNavigation}
        initialValue="سبد خرید"
      />
      <Footer/>
    </Box>
  );
};
export default ShoppingCart;
