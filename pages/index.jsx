import Head from 'next/head'
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Tab, Tabs, Typography } from '@mui/material';
import Topo from '../components/Topo';
import { Box } from '@mui/system';
import Navbar from '../components/Navbar';
import GridProdutos from '../components/GridProdutos';
import Pb from '../components/Pb';
import { useRouter } from 'next/router';
import { getFeedMain } from '../fetchData/getFeedMain';
import { useContext } from 'react';
import { UserContext } from '../context/userContext';
import Carrossel from '../components/Carrossel';
import Banners from '../components/Banners';
import ContainerAtalhos from '../components/ContainerAtalhos';
import CategoriasEmAlta from '../components/CategoriasEmAlta';


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

function Content({feed}) {
  if(feed === null || feed === undefined) {
    return <Pb />
  }

  return (
    <Grid item>
        <Banners />
        <ContainerAtalhos />
        <CategoriasEmAlta />
        <Carrossel titulo="Produtos Em Alta Hoje" lista={feed.topProdutos} />
        <Carrossel titulo="Mais Vendidos no Mês" lista={feed.topMaisVendidos} />
        <Item xs={12} item>
          <Titulo>Novidades, Atualizações e Lançamentos</Titulo>
        </Item>
        <Item justifyItems="center" alignItems="center" md={12} lg={12} xs={12} item>
          <GridProdutos lista={feed.atualizacoesProds} />
        </Item>
    </Grid>
  );
}

export default function Home() {
  
  const route = useRouter();
  const [feed, setFeed] = useState(null);
  const {user} = useContext(UserContext);


  useEffect(() => {
    if(!user) return;
    getFeedMain().then((data) => {
        const {atualizacoesProds} = data;
        console.log(JSON.stringify(data))
        setFeed(data);
    });
    
  }, [user]);


  

  return (
    <Container>
      
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Compra Favorita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Main>
          <Navbar />
          <SubContainer container>

            <Content feed={feed} />

          </SubContainer>
        </Main>
        
        
        
        
    </Container>
  )
}
