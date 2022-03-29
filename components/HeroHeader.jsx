import React from 'react';
import { Button, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';

const Main = styled(Container)`
    margin-top: 40px;
`;

const Conteudo = styled(Container)`
    margin-bottom: 15px;
    width: fit-content;
`;

const Titulo = styled(Typography)`
    font-size: 42px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    color: rgba(9, 17, 51, 1);
    margin-bottom: 39px;
`;

const Descricao = styled(Typography)`
    font-size: 20px;
    font-family: Work Sans, sans-serif;
    font-weight: 600;
    color: #282f4d;
`;

const Botao1 = styled(Button)`
    border-radius: 30px;
    height: 60px;
    background-color: rgba(37, 43, 66, 1);
    border: 2px solid rgba(32, 145, 249, 1);
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-bottom: 20px;
    margin-top: 30px;
    &:hover {
        background-color: rgba(32, 145, 249, 1);
        border: 2px solid rgba(32, 145, 249, 1);
    }
`;

const TxtBt1 = styled(Typography)`
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
`;

const Botao2 = styled(Button)`
    border-radius: 23px;
    height: 46px;
    border: 2px solid rgba(9, 17, 51, 1);
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const TxtBt2 = styled(Typography)`
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    color: rgba(9, 17, 51, 1);
    text-align: center;
    margin-left: 20px;
    margin-right: 20px;
`;

const ImagemHeroContainer = styled(Container)`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100%;
`;

const TitleInfo = styled(Typography)`
    font-size: 22px;
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

const ContainerInfo = styled(Container)`
    
`;

const ContainerListaInfo = styled(Container)`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const ItemList = ({tit, txt}) => {
    return(
        <ContainerInfo>
            <TitleInfo>
                {tit}
            </TitleInfo>
            <TextInfo>
                {txt}
            </TextInfo>
        </ContainerInfo>
    );
};

const HeroHeader = ({title, text, img, list}) => {
    return (
        <Grid container>
            <Grid lg={6} xs={12} item>
                <Main>
                    <Conteudo>
                        <Titulo>
                            {title}
                        </Titulo>
                        <Descricao>
                            {text}
                        </Descricao>
                    </Conteudo>
                    <Container
                        sx={{
                            display: 'flex',
                            alignContent: {xs: 'center', sm: 'start'}, 
                            justifyContent: {xs: 'center', sm: 'start'},
                            justifyItems: {xs: 'center', sm: 'start'},
                        }}
                    >
                        <Botao1 
                            sx={{
                                width: {xs: '80%', sm: '240px'},
                            }}
                        >
                            <TxtBt1>
                                COMPRAR AGORA
                            </TxtBt1>
                        </Botao1>
                        
                    </Container>

                    <Container
                        sx={{
                            display: 'flex',
                            alignContent: {xs: 'center', sm: 'start'}, 
                            justifyContent: {xs: 'center', sm: 'start'},
                            justifyItems: {xs: 'center', sm: 'start'},
                        }}
                    >
                        <Botao2
                            sx={{
                                width: {xs: '80%', sm: '240px'},
                            }}
                        >
                            <TxtBt2>
                                Continuar Lendo
                            </TxtBt2>
                        </Botao2>
                    </Container>
                    
                </Main>
                
            </Grid>
            <Grid lg={3} xs={12} sm={6} item>
                <ImagemHeroContainer sx={{marginTop: {xs: 6, lg: 0}}}>
                    <img src={img} style={{width: '100%'}}  />
                    
                </ImagemHeroContainer>
                
            </Grid>
            <Grid lg={3} xs={12} sm={6} item>
                <ContainerListaInfo sx={{marginTop: {xs: 6, lg: 0}}}>
                    {list.map((item, i) => <ItemList key={i} tit={item.title} txt={item.text} />)}
                </ContainerListaInfo>
            </Grid>
        </Grid>
    )
}

export default HeroHeader