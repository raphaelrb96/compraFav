import React from 'react';
import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';

const Nome = styled(Typography)`
    font-size: 20px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    margin-top: 6px;
    color: rgba(0, 0, 0, 1);
`;

const Texto = styled(Typography)`
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    color: rgba(0, 0, 0, 1);
    margin-top: 10px;
`;

const Card = styled(Box)`
    padding: 8.44px;
    box-sizing: border-box;
    background-color: rgba(255, 255, 255, 1);
`;

const ContainerStar = styled(Box) `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: fit-content;
    margin-top: 3px;
`;

const Star = styled(StarIcon)`
    width: 15px;
    margin-right: 2px;
    height: 100%;
    color: #e4e400;
`;

const Titulo = styled(Typography)`
    font-size: 34px;
    font-family: Work Sans, sans-serif;
    font-weight: 700;
    letter-spacing: -0.68px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    word-wrap: break-word;
    margin-bottom: 34px;
`;

const Main = styled(Box)`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const ItemReview = ({nome, text}) => {
    return(
        <Grid xs={12} sm={6} md={4} lg={2} item>
            <Card>
                <Nome>
                    {nome}
                </Nome>
                <ContainerStar>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </ContainerStar>
                <Texto>
                    {text}
                </Texto>
            </Card>
        </Grid>
        
    );
}

const Reviews = ({list, title}) => {
    return (
        <Main>
            <Titulo>
                {title}
            </Titulo>
            <Grid justifyContent="center" style={{width: '95%'}} container>
                {list.map((item, i) => <ItemReview key={i} nome={item.title} text={item.text} />)}
            </Grid>
        </Main>
        
    )
}

export default Reviews