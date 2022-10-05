import { styled } from '@mui/material/styles';
import { Box, Button, CardMedia, Grid } from "@mui/material";
import Carousel from 'react-elastic-carousel'
import Paginacao from './Paginacao';
import Arrows from './Arrows';
import { useRef } from 'react';

const Imagem = styled(CardMedia)`
    cursor: pointer;
    width: 100%;
    border-radius: 18px;
    max-height: 390px;
`;

const SubContainer = styled(Grid)`
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  display: flex;
  flex: 1;
  margin: 0;
  padding: 0;
`;

const Paginas = styled(Box)`
`;


const Item = styled(Grid)`
    margin-top: 35px;
    margin-bottom: 15px;
    width: 100%;
`;


const Banners = () => {
    const referenceCarrossel = useRef(null);
    return (
        <SubContainer container>
            <Carousel
                ref={ref => referenceCarrossel.current = ref}
                itemsToShow={1}
                onNextEnd={(item, i) => i === 2 ? setTimeout(() => referenceCarrossel.current.goTo(0), 7000) : null}
                itemsToScroll={1}
                focusOnSelect={true}
                transitionMs={2000}
                enableAutoPlay
                enableMouseSwipe
                itemPadding={[2, 12]}
                autoPlaySpeed={6000}
                renderArrow={({ type, onClick, isEdge }) => <Arrows type={type} onClick={onClick} isEdge={isEdge} />}
                renderPagination={({ pages, activePage, onClick }) => <Paginacao pages={pages} activePage={activePage} onClick={onClick} />}
                showArrows={false}>
                    <Item sm={12} item>
                        <Imagem component="img" image="./img/baners/inform.png" />
                    </Item>
                    <Item sm={12} item>
                        <Imagem component="img" image="./img/baners/toys.png" />
                    </Item>
                    <Item sm={12} item>
                        <Imagem component="img" image="./img/baners/game.png" />
                    </Item>
                    
                    

            </Carousel>
        </SubContainer>
    )
}

export default Banners;