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
    cursor: pointer;
    ${props => props.theme.breakpoints.up("sm")} {
        height: 420px;
        margin-left: 10px;
        margin-right: 10px;
    }
    ${props => props.theme.breakpoints.down("sm")} {
        height: 500px;
        
    }
    border-radius: 18px;
    background-color: #583f3f75;
`;


const SuperCategoria = ({img}) => {
    return (
        <View>
            <Imagem image={img} />
        </View>
    )
}

export default SuperCategoria