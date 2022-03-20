import Head from 'next/head'
import React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';


const Titulo = styled(Typography)`
  color: #ff0000;
  font-weight: 900;
  text-align: center;
  display: flex;
  font-size: 50px;
`;

const Container = styled(Grid)`
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

export default function Home() {
  

  return (
    <div>
      <Head>
        <title>Compra Favorita</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body>
        <Container container>
          <Item justifyItems="center" alignItems="center" item>
            <Titulo>Compra Favorita</Titulo>
          </Item>
          
        </Container>
      </body>
        
        
        
    </div>
  )
}
