import { Box, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Container = styled(Grid)`
    background-color: rgba(37, 43, 66, 1);
    display: flex;
    flex: 1;
    flex-direction: row;
    height: 40px;
    padding: 0;
    margin: 0;
`;

const ContainerItem = styled(Grid)`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Texto = styled(Typography)`
    font-size: 12px;
    color: #fff;
`;

const Email = styled(EmailIcon)`
    width: 20px;
    height: 20px;
    color: #fff;
    margin-right: 6px;
`;

const Contato = styled(LocalPhoneIcon)`
    width: 20px;
    height: 20px;
    color: #fff;
    margin-right: 6px;
`;

const Espaco = styled(Box)`
    width: 20px;
`;

const Topo = () => {
    return (
        <Container container>
            <ContainerItem>
                <Texto>
                    Compre com desconto de forma segura e rápida
                </Texto>
            </ContainerItem>
            <ContainerItem>
                <Email />
                <Texto>
                    comprafavoritaofc@gmail.com
                </Texto>
                <Espaco />
                <Contato />
                <Texto>
                    (92) 99193-3525
                </Texto>
            </ContainerItem>    
        </Container>
    )
}

export default Topo