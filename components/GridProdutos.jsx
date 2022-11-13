import { Grid } from "@mui/material";
import Produto from "./Produto";

const gridSpacing = 0;

const GridProdutos = ({lista, categ}) => {
    return (
        <Grid container sx={{marginTop: 2}} justifyContent="center" spacing={gridSpacing}>
            {lista.map(doc => {
                let dados = doc;
                if(categ) {
                    const {comissao, idProduto, imgCapa, prodName, prodValor} = dados;
                    return <Produto nome={prodName} img={imgCapa} id={idProduto} btTitle={`R$ ${prodValor},00`} />
                }
                const {pathProduto, nomeProduto, idProduto} = dados;
                return <Produto nome={nomeProduto} img={pathProduto} id={idProduto} />
            })}
        </Grid>
    )
}

export default GridProdutos;