import { getProdutosByCategoria } from "../../../../fetchData/getProdutosByCategoria";
import { CATEGORIAS } from "../../../../utilidades/Categoria";

import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { CardMedia, Grid, Tab, Tabs, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Navbar from "../../../../components/Navbar";
import GridProdutos from "../../../../components/GridProdutos";
import { useRouter } from "next/router";
import Pb from "../../../../components/Pb";


const Titulo = styled(Typography)`
  color: #1b1717;
  font-weight: 600;
  text-align: center;
  display: flex;
  font-size: 28px;
  margin-top: 50px;
  margin-left: 10px;
  margin-right: 10px;
  margin-bottom: 16px;
`;

const SubContainer = styled(Grid)`
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0;
  padding: 0;
`;

const Item = styled(Grid)`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;

`;

const Container = styled(Box)`
`;

const Main = styled(Box)`
  
`;

const Imagem = styled(CardMedia)`
    cursor: pointer;
    width: 100%;
    border-radius: 18px;
    max-height: 290px;
`;


function Content({produtos, nome}) {
  

  return (
    <Grid item>
        <Item xs={12} item>
          <Titulo>{nome === undefined ? 'CARREGANDO...' : String(nome).toLocaleUpperCase()}</Titulo>
        </Item>
        {
          produtos === undefined ?
          <Pb />
          :
          <Item justifyItems="center" alignItems="center" md={12} lg={12} xs={12} item>
            <GridProdutos categ lista={produtos} />
          </Item>
        }
        
    </Grid>
  );
}

const index = ({ data }) => {

    const route = useRouter();
    const [produtos, setProdutos] = useState(undefined);
    //const {id} = route.query;
    const {id, nome} = route.query;

    useEffect(async () => {
      if(!id) return;
      setProdutos(undefined);
      const prods = await getProdutosByCategoria(id)
      if (prods) {
        setProdutos(prods);
      }
    }, [id]);


    return (
      <Container>
        
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <title>{nome}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
          <Main>
            <Navbar logo="../../../../fav.png" />
            <SubContainer container>
  
              <Content produtos={produtos} nome={nome} />
  
            </SubContainer>
          </Main>
          
          
          
          
      </Container>
    )
};

export default index;

/*
export const getServerSideProps = async ({ params }) => {
    const { id, nome } = params
    const produtos = await getProdutosByCategoria(id)
    if (!produtos) {
      return { notFound: true }
    }
    return { props: { data: { produtos, nome } } }
};
*/