import { Grid } from "@mui/material";
import Produto from "./Produto";

const gridSpacing = 0;

const GridProdutos = ({lista}) => {
    return (
        <Grid container sx={{marginTop: 2}} justifyContent="center" spacing={gridSpacing}>
            {lista.map(doc => {
                let dados = doc;
                const {pathProduto, nomeProduto, idProduto} = dados;
                console.log(dados);
                return <Produto nome={nomeProduto} img={pathProduto} id={idProduto} />
            })}
        </Grid>
    )
}

export default GridProdutos;