import Head from 'next/head'
import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import Topo from '../components/Topo';
import { Box } from '@mui/system';


const Titulo = styled(Typography)`
  color: #ff0000;
  font-weight: 900;
  text-align: center;
  display: flex;
  font-size: 50px;
`;

const SubContainer = styled(Grid)`
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  display: flex;
  flex: 1;
  height: 90vh;
  margin: 0;
  padding: 0;
`;

const Item = styled(Grid)`
  display: flex;
  flex: 1;
  align-items: center;
  align-content: center;
  justify-content: center;
  justify-items: center;

`;

const Container = styled(Box)`
`;

export default function Home() {
  

  return (
    <Container>
      
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Compra Favorita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <main>
          <Topo />
          <SubContainer container>
            <Item justifyItems="center" alignItems="center" item>
              <Titulo>Compra Favorita</Titulo>
            </Item>
            
          </SubContainer>
        </main>
        
        
        
        
    </Container>
  )
}
