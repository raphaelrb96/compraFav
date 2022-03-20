import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Container, Typography } from '@mui/material';
import GppGoodIcon from '@mui/icons-material/GppGood';

const NavigationBar = styled(Container)`
  padding: 25px 70px;
  display: flex;
  justify-content: space-between;
`;
const CompraFavorita = styled(Typography)`
  font-family: Work Sans, sans-serif;
  font-weight: 400;
  line-height: normal;
  text-align: center;

  color: rgba(0, 0, 0, 1);
  align-self: stretch;
  display: flex;
`;
const PagamentoSeguro = styled(Typography)`
  font-family: Work Sans, sans-serif;
  font-size: 22px;
  font-weight: 400;
  text-align: center;
  align-items: center;
  
  color: rgba(0, 0, 0, 1);
`;

const FlexRow = styled(Box)`
    display: flex;
    flex-direction: row;
`;

const IconeSeguro = styled(GppGoodIcon)`
    width: 30px;
    margin-right: 2px;
    margin-left: 6px;
    height: 100%;
`;

const HeaderCheckout = () => {
    return (
        <NavigationBar sx={{justifyContent: {xs: 'center', md: 'space-between'}}}>
            <CompraFavorita sx={{fontSize: {md: '22px', xs: 0}}}>Compra Favorita</CompraFavorita>
            <FlexRow component="span">
                <PagamentoSeguro>Pagamento Seguro</PagamentoSeguro>
                <IconeSeguro />
            </FlexRow>
            
        </NavigationBar>
    )
};


export default HeaderCheckout