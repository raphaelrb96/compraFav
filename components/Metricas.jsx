import React from 'react';

import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const ContainerItem = styled(Box)`
    position: relative;
    padding: 47px 15px;
    box-sizing: border-box;
    border-radius: 8px;
    background: rgba(245, 245, 245, 1);
    height: 184px;
    margin: 16px;
`;

const Titulo = styled(Typography)`
    font-size: 48px;
    font-family: Inter, sans-serif;
    font-weight: 700;
    line-height: 125%;
    letter-spacing: -1.2px;
    color: rgba(37, 43, 66, 1);
    text-align: center;
`;

const Texto = styled(Typography)`
    bottom: 26.09%;
    font-size: 18px;
    font-family: Inter, sans-serif;
    font-weight: 400;
    line-height: 156%;
    color: rgba(37, 43, 66, 1);
    text-align: center;
    height: 28px;
`;

const Grade = styled(Grid)`
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: rgba(37, 43, 66, 1);
    margin-top: 100px;
    margin-bottom: 40px;
    padding: 60px 15px;
    width: 100%;
`;


const ItemMetrica = ({title, text}) => {
    return(
        <Grid xs={12} sm={6} lg={3} item>
            <ContainerItem>
                <Titulo>
                    {title}
                </Titulo>
                <Texto>
                    {text}
                </Texto>
            </ContainerItem>
        </Grid>
        
    );
};

const Metricas = ({list}) => {
    return (
        <div>
            <Grade justifyContent="center" container>
                {list.map((item, i) => <ItemMetrica key={i} title={item.title} text={item.text} />)}
            </Grade>
        </div>
        
    );
}

export default Metricas;