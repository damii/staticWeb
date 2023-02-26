import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const RawButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'rgb(234 86 13)',
  borderRadius: 0,
  boxShadow: 'none',

  ':hover': {
    backgroundColor: 'rgb(234 86 13)'
  }
}));


export const CustomButton = (props) => {
  const { value, onClick, href, width = "fit-content", height = "fit-content", backgroundColor = "rgb(242, 142, 0)", border, fontWeight = "400", fontSize = "16"} = props;

  return (
    <RawButton target="_blank" style={{ width, height, backgroundColor, border, fontWeight, fontSize }} onClick={onClick} href={href} variant="contained" size="medium">
      {value}
    </RawButton>
  );
}