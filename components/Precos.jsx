import React from 'react';
import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';


const Grade = styled(Grid)`
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 50px;
    margin-bottom: 40px;
    width: 100%;
`;

const Titulo = styled(Typography)`
    font-size: 34px;
    font-family: Work Sans, sans-serif;
    font-weight: 700;
    letter-spacing: -0.68px;
    color: #ffffff;
    text-align: center;
    word-wrap: break-word;
    margin-bottom: 14px;
`;

const Main = styled(Box)`
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 80px;
    justify-content: center;
    align-items: center;
    align-content: center;
    background-color: rgba(37, 43, 66, 1);
    padding: 60px 15px;
`;

const Descricao = styled(Typography)`
    font-size: 24px;
    font-family: Work Sans, sans-serif;
    font-weight: 500;
    letter-spacing: -0.68px;
    color: #ffffff;
    width: 70%;
    text-align: center;
    word-wrap: break-word;
`;

const CardPreco = styled(Paper)`
    padding-top: 38px;
    padding-bottom: 10px;
    padding-left: 20px;
    padding-right: 20px;
    box-sizing: border-box;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(222, 222, 222, 1);
    box-shadow: 0px 13px 19px rgba(0, 0, 0, 0.07);
`;

const HeaderCardPreco = styled(Container)`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-bottom: 30px;
`;

const TitleCard = styled(Typography)`
    
    font-size: 24px;
    font-family: Work Sans, sans-serif;
    font-weight: 700;
    letter-spacing: -0.48px;
    color: rgba(37, 43, 66, 1);
    word-wrap: break-word;
`;

const DescrCard = styled(Typography)`
    font-size: 20px;
    font-family: Work Sans, sans-serif;
    font-weight: 500;
    letter-spacing: -0.4px;
    color: rgba(55, 71, 84, 1);
    text-align: center;
    word-wrap: break-word;
`;

const ContainerValor = styled(Container)`
    display: flex;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const Valor = styled(Typography)`
    font-size: 64px;
    font-family: Work Sans, sans-serif;
    font-weight: 900;
    color: rgba(37, 43, 66, 1);
    
`;

const DetalheValor = styled(Box)`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    align-content: flex-start;
    margin-left: 10px;
`;

const ItemPrecoTitle = styled(Typography)`
    font-size: 20px;
    font-family: Work Sans, sans-serif;
    font-weight: 800;
    color: rgba(37, 43, 66, 1);
    text-align: start;
`;

const ItemPrecoDesc = styled(Typography)`
    font-size: 16px;
    font-family: Work Sans, sans-serif;
    font-weight: 300;
    color: rgba(55, 71, 84, 1);
`;

const TextInfo = styled(Typography)`
    font-size: 20px;
    font-family: Work Sans, sans-serif;
    font-weight: 400;
    letter-spacing: -0.4px;
    color: rgba(37, 43, 66, 1);
    word-wrap: break-word;
    margin-bottom: 18px;
    padding-left: 18px;
`;

const TextInfoExtra = styled(Typography)`
    font-size: 16px;
    font-family: Work Sans, sans-serif;
    font-weight: 300;
    color: rgba(37, 43, 66, 1);
    font-style: italic;
    padding-left: 18px;
`;

const BotaoComprar = styled(Button)`
    border-radius: 30px;
    height: 60px;
    background-color: rgba(32, 145, 249, 1);
    border: 2px solid rgba(32, 145, 249, 1);
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-top: 40px;
    width: 100%;
    &:hover {
        background-color: rgba(32, 145, 249, 1);
        border: 2px solid rgba(32, 145, 249, 1);
    }
`;

const TxtBt = styled(Typography)`
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    text-align: center;
`;

const TextExtra = styled(Typography)`
    font-size: 20px;
    font-family: Work Sans, sans-serif;
    font-weight: 900;
    letter-spacing: -0.4px;
    color: rgba(37, 43, 66, 1);
    word-wrap: break-word;
    margin-bottom: 18px;
    padding-left: 18px;
`

const ItemPreco = ({title, descTitle, valor, info1, info2, infoExtra, textExtra}) => {
    return(
        <Grid xs={12} sm={8} md={4} lg={4} xl={3} item>
            <CardPreco>
                <HeaderCardPreco>
                    <TitleCard>
                        {title}
                    </TitleCard>
                    <DescrCard>
                        {descTitle}
                    </DescrCard>
                    <ContainerValor>
                        <Valor>
                            {valor}
                        </Valor>
                        <DetalheValor>
                            <ItemPrecoTitle>
                                R$
                            </ItemPrecoTitle>
                            <ItemPrecoDesc>
                                Reais
                            </ItemPrecoDesc>
                        </DetalheValor>
                    </ContainerValor>
                </HeaderCardPreco>
                <TextExtra>
                    {textExtra}
                </TextExtra>
                <TextInfo>
                    {info1}
                </TextInfo>
                <TextInfo>
                    {info2}
                </TextInfo>
                <TextInfoExtra>
                    {infoExtra}
                </TextInfoExtra>
                <HeaderCardPreco>
                    <BotaoComprar>
                        <TxtBt>
                            Comprar agora
                        </TxtBt>
                    </BotaoComprar>
                </HeaderCardPreco>
                
            </CardPreco>
        </Grid>
        
    )
};

const Precos = ({title, descricao, basico, completo, simples}) => {
    return (
        <div>
            <Main>
                <Titulo>
                    {title}
                </Titulo>
                <Descricao>
                    {descricao}
                </Descricao>
                <Grade spacing={5} container>
                    <ItemPreco 
                        title={basico.title} 
                        descTitle={basico.descTitle}
                        valor={basico.valor} 
                        info1={basico.info1}
                        info2={basico.info2}
                        infoExtra={basico.infoExtra}
                    />
                    <ItemPreco 
                        title={completo.title} 
                        descTitle={completo.descTitle}
                        valor={completo.valor} 
                        info1={completo.info1}
                        info2={completo.info2}
                        infoExtra={completo.infoExtra}
                        textExtra={completo.textExtra}
                    />
                    <ItemPreco 
                        title={simples.title} 
                        descTitle={simples.descTitle}
                        valor={simples.valor} 
                        info1={simples.info1}
                        info2={simples.info2}
                        infoExtra={simples.infoExtra}
                    />
                </Grade>
            </Main>
        </div>
    )
}



export default Precos