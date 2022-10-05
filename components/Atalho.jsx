import { styled } from '@mui/material/styles';
import { Box, Card, CardMedia, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import { ChevronRight } from '@mui/icons-material';

const View = styled(Box)`
  align-content: center;
  justify-content: center;
  justify-items: center;
  padding: 4px;
`;

const Imagem = styled(CardMedia)`
    margin-left: 16px;
    margin-bottom: 6px;
    ${props => props.theme.breakpoints.up("sm")} {
        height: 55px;
        width: 55px;
    }
    ${props => props.theme.breakpoints.down("sm")} {
        height: 50px;
        width: 50px;

    }
`;

const Conteudo = styled(Box)`
    flex: 1;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
`;

const Cartao = styled(Card)`
    cursor: pointer;
    border-radius: 18px;
    flex-direction: row;
    display: flex;
    align-items: center;
    height: 120px;
`;

const Titulo = styled(Typography)`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: start;
`;

const Texto = styled(Typography)`
    text-align: start;
`;

const IconeNext = styled(ChevronRight)`
    width: 20px;
    color: black;
    margin-right: 5px;
`;

const Atalho = ({title, text, imagem}) => {
    return (
        <View>
            <Cartao elevation={4}>
                <Imagem component="img" image={imagem} />
                <Conteudo>
                    <Titulo variant='h5'>{title}</Titulo>
                    <Texto variant='body2'>{text}</Texto>
                </Conteudo>
                <IconeNext />
            </Cartao>
        </View>
    );
}

export default Atalho