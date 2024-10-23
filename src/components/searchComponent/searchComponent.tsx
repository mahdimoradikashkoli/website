/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, TextField, Typography } from '@mui/material';
import { SuggestionComponen } from './component';
import ClearIcon from '@mui/icons-material/Clear';
import style from './searchComponent.module.css';
type searchComponentType = {
  className?: string;
  onChange?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  // validation:any
};

export const SearchComponent: React.FC<searchComponentType> = ({
  className,
  onClick,
  onChange,
}) => {
  return (
    <>
      <Box
        className={`${className} ${style.searchnavbarBox}`}
        id="search"
        sx={{
          display: 'none',
          position: 'absolute',
          backgroundColor: 'rgb(255,255,255)',
          boxShadow:
            '10px 0px 10px rgb(150,150,150) , -10px -0px 10px rgb(150,150,150)',
          width: '100%',
          padding: '.1rem .6rem .6rem .6rem',
          zIndex: '30',
        }}
      >
        {/* کادر جستجو برای صفحات بزرگتر از 800 پیکسل */}
        <Box
          className={style.searchNavbarAfter800px}
          sx={{ display: 'none', alignItems: 'center', gap: '1rem' }}
        >
          <TextField
            placeholder="جستجو در میان هزاران کالا"
            style={{ width: '100%' }}
            onChange={onChange}
          />
          <Box
            onClick={onClick}
            component={'button'}
            sx={{ outline: 'none', border: 'none' }}
          >
            <ClearIcon />
          </Box>
        </Box>
        {/* نوار جستجو برای عرض کمتر از 800پیکسل */}
        <TextField
          className={style.searchInput}
          onChange={onChange}
          placeholder="جستجو در میان هزاران کالا"
          style={{ width: '100%' }}
        />
        <Divider style={{ marginTop: '.8rem', width: '100%' }} />

        <Typography
          component={'span'}
          style={{ marginTop: '.8rem', display: 'block' }}
        >
          جستجوهای پرطرفدار:
        </Typography>
        <Box
          sx={{
            marginTop: '.4rem',
            display: 'flex',
            alignItems: 'center',
            gap: '.5rem',
            overflowX: 'auto',
            transition: '2s',
            '::-webkit-scrollbar': { display: 'none' },
          }}
        >
          <SuggestionComponen value="جوتی جینز" />
          <SuggestionComponen value="ناربن" />
          <SuggestionComponen value="زیلان" />
          <SuggestionComponen value="ناریان" />
          <SuggestionComponen value="بیسراک" />
          <SuggestionComponen value="شلوار" />
          <SuggestionComponen value="مانتو" />
          <SuggestionComponen value="بهبود" />
        </Box>
        <Divider
          className={style.divider}
          style={{ marginTop: '.8rem', width: '100%' }}
        />

        <Box
          className={style.buttonClear}
          sx={{
            marginTop: '.5rem',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
          }}
        >
          <Box
            component={'button'}
            onClick={onClick}
            sx={{
              backgroundColor: 'inherit',
              border: 'none',
              outline: 'none',
              color: 'red',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            بستن
            <ClearIcon style={{ color: 'red' }} />
          </Box>
        </Box>
      </Box>
    </>
  );
};
