import { map } from '@firebase/util';
import { Box, Button, CardMedia, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Carousel from 'react-elastic-carousel'
import Arrows from './Arrows';
import Paginacao from './Paginacao';

const SubContainer = styled(Grid)`
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  display: flex;
  flex: 1;
  padding: 0;
  margin-bottom: 30px;
`;

const Titulo = styled(Typography)`
  color: #1b1717;
  font-weight: 600;
  text-align: center;
  display: flex;
  font-size: 28px;
  margin-top: 28px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 16px;
`;

const Item = styled(Grid)`
    margin-top: 20px;
    margin-bottom: 15px;
`;

const Imagem = styled(CardMedia)`
    
    border-radius: 6px;
    ${props => props.theme.breakpoints.up("sm")} {
        height: 350px;
    }
    ${props => props.theme.breakpoints.down("sm")} {
        height: 200px;
    }
`;

const Nome = styled(Typography)`
    font-size: 13px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 60px;
    max-lines: 2;
    line-height: 2;
    
`;

const CTA = styled(Button)`
    font-size: 15;
    font-weight: 700;
    color: #000000d2;
    border-color: #000000d2;
    width: 80%;
`;

const breakPoint = [
    { width: 1, itemsToShow: 2, itemsToScroll: 2 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 4 },
    { width: 1750, itemsToShow: 4 },
];

const ItemCarrossel = ({img, nome}) => {

    const formatNome = () => {
        if(window.innerWidth > 500) {

            if (String(nome).length > 44) {
                return String(nome).substring(0, 44).toLocaleUpperCase() + ' ...';
            } else {
                return String(nome).toLocaleUpperCase();
            }
            
        } else {

            if(String(nome).length > 24) {
                return String(nome).substring(0, 24).toLocaleUpperCase() + ' ...';
            } else {
                return String(nome).toLocaleUpperCase()
            }
            
        }
    };

    return (
        <Item item>
            <Imagem
                component="img"
                image={img}
            />
            <Nome lineHeight={2} component="h6">
                {

                    formatNome()
                    
                }
            </Nome>
            <CTA variant='outlined' component="p">
                detalhes
            </CTA>
        </Item>
    )
}

const Carrossel = ({lista, titulo}) => {

    return (
        <SubContainer container>
            <Item ms={8} item>
                <Titulo>{titulo}</Titulo>
            </Item>
            
            <Carousel
                breakPoints={breakPoint} 
                itemPadding={[2, 4]}
                renderArrow={({ type, onClick, isEdge }) => <Arrows type={type} onClick={onClick} isEdge={isEdge} />}
                renderPagination={({ pages, activePage, onClick }) => <Paginacao pages={pages} activePage={activePage} onClick={onClick} />}
                showArrows={window.innerWidth > 500 ? true : false}>
                    
                    {lista.map(item => {
                        const {pathProduto, nomeProduto, idProduto} = item;
                        return <ItemCarrossel img={pathProduto} nome={nomeProduto} />
                    })}

            </Carousel>
        </SubContainer>
    )
}

export default Carrossel;