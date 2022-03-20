import React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Box, Container, Grid, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

const ImagemContainer = styled(Container)`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
`;

const Main = styled(Grid)`
    margin-top: 80px;
`;

const Titulo = styled(Typography)`
    font-size: 34px;
    font-family: Work Sans, sans-serif;
    font-weight: 700;
    letter-spacing: -0.68px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
    word-wrap: break-word;
    margin-bottom: 14px;
`;

const Icone = styled(Avatar) `
    margin-top: 26px;
    margin-left: 10px;
    margin-right: 16px;
`;

const FlexRow = styled(Box)`
    display: flex;
    flex-direction: row;
`;

const FlexColl = styled(Box)`
    display: flex;
    flex-direction: column;
`;

const TitleInfo = styled(Typography)`
    font-size: 20px;
    font-family: Roboto, sans-serif;
    font-weight: 700;
    letter-spacing: -0.4px;
    margin-top: 26px;
    color: rgba(0, 0, 0, 1);
`;

const TextInfo = styled(Typography)`
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-weight: 500;
    letter-spacing: -0.28px;
    color: rgba(0, 0, 0, 1);
`;

const ItemList = ({title, text}) => {

    return(
        <FlexRow component="div">
            <Icone>
                <StarIcon />
            </Icone>
            <FlexColl component="div">
                <TitleInfo>
                    {title}
                </TitleInfo>
                <TextInfo>
                    {text}
                </TextInfo>
            </FlexColl>
        </FlexRow>
    );
}

const Beneficios = ({img, title, list1, list2}) => {
    return (
        <Main justifyContent="center" alignContent="center" justifyItems="center" container>
            <Grid sx={{marginTop: {xs: 4, lg: 0}}} spacing={5} lg={6} item>
                <ImagemContainer>
                    <img src={img} style={{width: '100%'}} />
                </ImagemContainer>
            </Grid>
            <Grid sx={{marginTop: {xs: 6, lg: 0}}} spacing={5} lg={6} md={10} item>
                <Container>
                    <Titulo>
                        {title}
                    </Titulo>
                    <Grid container>
                        <Grid style={{width: '100%'}} xs={12} sm={6} item>
                            {list1.map((item, i) => <ItemList key={i} title={item.title} text={item.text} />)}
                        </Grid>
                        <Grid style={{width: '100%'}} xs={12} sm={6} item>
                            {list2.map((item, i) => <ItemList key={i} title={item.title} text={item.text} />)}
                        </Grid>
                    </Grid>
                </Container>
                
            </Grid>
        </Main>
    )
}

export default Beneficios