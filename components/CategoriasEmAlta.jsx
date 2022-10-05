import { styled } from '@mui/material/styles';
import { Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import SuperCategoria from './SuperCategoria';

const SubContainer = styled(Grid)`
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  display: flex;
  flex: 1;
  padding: 0;
  margin-top: 20px;
  margin-bottom: 30px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`;

const Item = styled(Grid)`
`;

const Titulo = styled(Typography)`
  color: #1b1717;
  font-weight: 600;
  text-align: center;
  font-size: 28px;
  margin-top: 28px;
  margin-bottom: 16px;
  margin-left: 10px;
  margin-right: 10px;
`;

const CategoriasEmAlta = () => {
    return (
        <SubContainer spacing={2} container>
            <Item xs={12} item>
                <Titulo>Categorias em Destaque</Titulo>
            </Item>
            <Item lg={3} xs={12} sm={6} md={4} item>
                <SuperCategoria img="./img/baners/acs_auto.png" />
            </Item>
            <Item lg={3} xs={12} sm={6} md={4} item>
                <SuperCategoria img="./img/baners/radios.png" />
            </Item>
            <Item lg={3} xs={12} sm={6} md={4} item>
                <SuperCategoria img="./img/baners/petfriend.png" />
            </Item>
            <Item lg={3} xs={12} sm={6} md={4} item>
                <SuperCategoria img="./img/baners/piscinas.png" />
            </Item>
        </SubContainer>
    )
}

export default CategoriasEmAlta;