import { styled } from '@mui/material/styles';
import { Box, Button, CardMedia, Grid } from "@mui/material";
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { consts } from 'react-elastic-carousel';



const IconeNext = styled(ChevronRight)`
    width: 20px;
    color: black;
`;

const IconePrev = styled(ChevronLeft)`
    width: 20px;
    color: black;
`;

const Botao = styled(Button)`
    color: #cacaca4e;
    &:hover {
        background-color: #cacaca2a;
    }
    height: 50px;
    border-radius: 10px;
`;

const Container = styled(Box)`
    align-items: center;
    justify-content: center;
    align-content: center;
    display: flex;
    
`;



const Arrows = ({ type, onClick, isEdge }) => {
    
    return (
        
        <Container>
            <Botao onClick={onClick} variant="text" disabled={isEdge}>
                {
                    type === consts.PREV ?
                    <IconePrev />
                    :
                    <IconeNext />
                }
            </Botao>
        </Container>
        
    )
}

export default Arrows;