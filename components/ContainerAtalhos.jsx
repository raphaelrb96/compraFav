import { styled } from '@mui/material/styles';
import { Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import Atalho from './Atalho';

const SubContainer = styled(Grid)`
  align-content: center;
  justify-content: center;
  justify-items: center;
  margin-top: 20px;
  padding-inline-start: 16px;
  padding-inline-end: 16px;
`;

const Item = styled(Grid)`
`;

const ContainerAtalhos = () => {
    return (
        <SubContainer spacing={2} container>
            <Item lg={4} xs={12} sm={6} md={4} item>
                <Atalho imagem="./img/icons/seguranca.png" title="Segurança" text="Informações de garantia, segurança de dados e privacidade." />
            </Item>
            <Item lg={4} xs={12} sm={6} md={4} item>
                <Atalho title="Dúvidas Gerais" imagem="./img/icons/atencao.png" text="Perguntas e resposta sobre nos. Tire suas dúvidas aqui." />
            </Item>
            <Item lg={4} xs={12} sm={6} md={4} item>
                <Atalho title="Redes Sociais" imagem="./img/icons/start.png" text="Siga-nos nas redes sociais e confira nossos conteudos" />
            </Item>
        </SubContainer>
    );
}

export default ContainerAtalhos