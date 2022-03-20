import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const CardContainer = styled(Paper)`
    width: 100%;
    max-width: 380px;
    border-radius: 14px;
    background-color: #F9F9F9;
    padding: 30px;
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const Checkout = styled(Grid)`
    align-items: center;
    justify-content: center;
    align-content: center;
`;

const ConteudoCheckout = styled(Grid)`
    margin-top: 30px;
    margin-bottom: 60px;
    align-items: center;
    justify-content: center;
    align-content: center;
    display: flex;
`;

const ResumoTitle = styled(Typography)`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 30px;
`;

const ImagemContainer = styled(Container)`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    max-height: 190px;
    padding: 10px;
`;

const ContainerDados = styled(Grid)`
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-bottom: 20px;
`;

const ContainerTitulo = styled(Box)`
    flex-direction: column;
    flex: 3;
    display: flex;
    margin-right: 6px;
`;

const NomeItem = styled(Typography)`
    font-size: 22px;
    font-weight: 500;
    display: flex;
    flex: 1;
`;

const ValorItem = styled(Typography)`
    font-size: 24px;
    font-weight: 700;
    display: flex;
    flex: 1;
`;

const ContainerQuantidade = styled(Box)`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

const BotaoQuantidade = styled(Box)`
    width: 30px;
    height: 30px;
    padding: 0px;
    margin: 0px;
    font-size: 30px;
    border-radius: 8px;
    background-color: #dde3ecce;
    justify-content: center;
    align-items: center;
    align-content: center;
    display: flex;
`;

const ItemQuantidade = styled(Typography)`
    font-size: 24px;
    font-weight: 700;
    margin-left: 8px;
    margin-right: 8px;
    flex: 1;
    text-align: center;
`;

const Mais = styled(AddIcon)`
    width: 15px;
    height: 15px;
`;

const Menos = styled(RemoveIcon)`
    width: 15px;
    height: 15px;
`;

const ContainerRow = styled(Box)`
    display: flex;
    margin-top: 15px;
    margin-bottom: 15px;
    flex-direction: row;
`;

const NomeRow = styled(Typography)`
    display: flex;
    flex: 1;
    font-size: 20px;
    font-weight: ${props => props.bold ? 'bold' : '500'};
`;

const ValueRow = styled(Typography)`
    font-size: 20px;
    font-weight: ${props => props.bold ? 'bold' : '500'};
`;

const BotaoGoogle = styled(Box)`
    box-sizing: border-box;
    background-color: rgba(7, 15, 24, 1);
    width: 100%;
    height: 78px;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    border-radius: 12px;
`;

const TextBotao = styled(Typography)`
    font-size: 24px;
    font-family: Inter, sans-serif;
    font-weight: 700;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    width: 100%;
`;

const CardCheckout = () => {
    return (
        <Checkout container>
            <ConteudoCheckout xs={12} md={6} item>
                <CardContainer>
                    <ResumoTitle>
                        Resumo da Compra
                    </ResumoTitle>
                    <ImagemContainer>
                        <img src="./img/tvbox/03.png" style={{height: '100%', maxWidth: '100%'}} />
                    </ImagemContainer>
                    <ContainerDados>
                        <ContainerTitulo>
                            <NomeItem>
                                Tvbox: Plano Simples
                            </NomeItem>
                            <ValorItem>
                                R$ 180
                            </ValorItem>
                        </ContainerTitulo>
                        <ContainerQuantidade>
                            <BotaoQuantidade>
                                <Menos />
                            </BotaoQuantidade>
                            <ItemQuantidade>
                                1
                            </ItemQuantidade>
                            <BotaoQuantidade>
                                <Mais />
                            </BotaoQuantidade>
                        </ContainerQuantidade>
                    </ContainerDados>
                    <ContainerRow>
                        <NomeRow>SubTotal</NomeRow>
                        <ValueRow>R$ 180</ValueRow>
                    </ContainerRow>
                    <ContainerRow>
                        <NomeRow>Frete</NomeRow>
                        <ValueRow>R$ 30</ValueRow>
                    </ContainerRow>
                    <ContainerRow>
                        <NomeRow bold>Total</NomeRow>
                        <ValueRow bold>R$ 210</ValueRow>
                    </ContainerRow>
                    <BotaoGoogle>
                        <TextBotao>
                            Concluir com GooglePay
                        </TextBotao>
                    </BotaoGoogle>
                </CardContainer>
            </ConteudoCheckout>
        </Checkout>
        
    )
}

export default CardCheckout