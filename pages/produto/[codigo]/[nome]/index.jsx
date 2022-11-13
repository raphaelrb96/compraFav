import { styled } from '@mui/material/styles';
import { Grid, Tab, Tabs, Typography, Box, CardMedia, Card, CardContent, CardActions, Button, CardHeader, Rating, Select, MenuItem, FormControl, InputLabel, outlinedInputClasses, selectClasses, Stack } from '@mui/material';
import { getProduto } from '../../../../fetchData/getProduto';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import Navbar from '../../../../components/Navbar';
import Carousel from 'react-elastic-carousel'
import Arrows from '../../../../components/Arrows';
import Paginacao from '../../../../components/Paginacao';
import Icon from '@mui/material/Icon';
import { ArrowBack, ArrowBackIosNewOutlined, ArrowBackOutlined, ArrowLeft, ArrowRight } from '@mui/icons-material';


const SubContainer = styled(Grid)`
  align-items: flex-start;
  align-content: center;
  justify-content: center;
  justify-items: center;
  text-align: center;
  margin: 0;
  padding: 0;
  padding-top: 16px;
`;

const ContainerDados = styled(Grid)`
  padding-left: 16px;
  padding-right: 16px;
`;

const Main = styled(Box)`
  
`;

const Container = styled(Box)`
`;

const TabContainer = styled(Box)`
  
`;

const TabContent = styled(Box)`
  width: 100%;
  min-height: 200px;
  padding-bottom: 20px;
  padding-top: 15px;
`;

const Imagem = styled(CardMedia)`
    cursor: pointer;
    width: 100%;
    border-radius: 5px;
    margin-bottom: 12px;
`;

const MiniFoto = styled(CardMedia)`
  width: 70px;
  height: 70px;
  cursor: pointer;
`;

const Nome = styled(Typography)`
  text-align: left;
  font-family: fantasy;
`;

const ContainerValor = styled(Box)`
  flex-direction: row;
  display: flex;
  align-items: center;
`;

const Valor = styled(Typography)`
  text-align: left;
  font-weight: bold;
`;

const ValorAntigo = styled(Typography)`
  text-align: left;
  text-decoration: line-through;
  margin-left: 10px;
  color: #252b42;
`;

const Descricao = styled(Typography)`
  text-align: left;
  width: 100%;
`;

const Desconto = styled(Typography)`
  text-align: left;
  color: #2091f9;
`;

const ContainerConversao = styled(Card)`
  border-radius: 10px;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: column;
  
`;

const SubContainerConversao = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex: 1;
`;

const TextoSecundario = styled(Typography)`
  font-size: 14px;
  margin-top: 16px;
  margin-bottom: 5px;
`;

const Avaliacao = styled(Rating)`
  display: flex;
  align-items: flex-start;
  margin-left: -4px;
`;

const Selecao = styled(Select)`
  display: flex;
  align-items: flex-start;
  width: 70%;
  border-color: black;
  & .${selectClasses.icon} {
    color: #858585;
  }

  & .${outlinedInputClasses.notchedOutline} {
    border-color: #858585;
  }
  &:hover .${outlinedInputClasses.notchedOutline} {
    border-color: #858585;
  }

  &.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline} 
  {
    // VERY IMPORTANT TO NOT LEAVE AN EMPTY SPACE BETWEEN '&' AND '.'
    border-color: #858585 !important;
  }
  
`;

const breakPoint = [
  { width: 1, itemsToShow: 3, itemsToScroll: 3 },
  
];



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
          <TabContainer>
            {children}
          </TabContainer>
      )}
    </div>
  );
}

function TabView({descr}) {

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Stack>
      
      <Tabs value={value} textColor="inherit" indicatorColor="inherit" onChange={handleChange} centered aria-label="basic tabs example">
          <Tab label="Descrição" value={0} />
      </Tabs>
      
      <TabContent>
        <TabPanel value={value} index={0}>
          <Descricao variant="body1" color="text.secondary" >
            {descr}
          </Descricao>
        </TabPanel>
        <TabPanel value={value} index={1}>
          
          <Typography textAlign={'center'} variant="body1" color="text.secondary">
            Nenhuma Avaliação
          </Typography>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Typography textAlign={'center'} variant="body1" color="text.secondary">
            Sem Perguntas e Respostas 
          </Typography>
        </TabPanel>
      </TabContent>
      
    </Stack>
  );
}

function Content({prod, item, setQuantidade}) {

  if (!prod) { return null}

  const {comissao, idProduto, imgCapa, prodName, prodValor, valorAntigo, descr, imagens} = prod;


  const [fotoMaior, setFotoMaior] = useState(imgCapa);

  //const {quantidade, valorTotal, valorTotalComComissao, comissaoTotal, valorUni, valorUniComComissao, comissaoUnidade} = item;
  
  

  return(
      <>
          <SubContainer spacing={3} container>
                  <ContainerDados item lg={4} md={4} sm={6} xs={12}>
                    <Imagem component="img" src={fotoMaior} />
                    <Carousel
                      axis='horizontal'
                      breakPoints={breakPoint}
                      renderArrow={({ type, onClick, isEdge }) => <Arrows type={type} onClick={onClick} isEdge={isEdge} />}
                      renderPagination={({ pages, activePage, onClick }) => <Paginacao pages={pages} activePage={activePage} onClick={onClick} />}
                    >
                            
                            {imagens.map(item => {
                                return <MiniFoto  onClick={() => setFotoMaior(item)} component="img" src={item} />
                            })}

                    </Carousel>
                  </ContainerDados>
                  <ContainerDados item lg={4} md={4} sm={6} xs={12}>
                      <div>
                          <Nome variant="h4">
                              {prodName}
                          </Nome>
                          <br/>
                          <Avaliacao name="avaliacao" defaultValue={4.5} precision={0.5} readOnly />
                          <br/>
                          <ContainerValor>
                            <Valor variant="h6">
                              R${prodValor},00
                            </Valor>
                            <ValorAntigo>
                              R${valorAntigo},00
                            </ValorAntigo>
                            
                          </ContainerValor>
                          {
                              valorAntigo > prodValor ? 
                              <Desconto variant="subtitle2">
                                R${valorAntigo - prodValor},00 de desconto !
                              </Desconto>
                              :
                              null
                          }
                          <TextoSecundario textAlign="left" color="text.secondary">
                              Cores
                          </TextoSecundario>
                          <Selecao
                            value={''}
                            onChange={() => {}}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                          >
                            <MenuItem value="">
                              <em>Escolha uma cor</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                          </Selecao>
                      </div>
                  </ContainerDados>
                  <ContainerDados item lg={3} md={4} sm={6} xs={12}>
                      <ContainerConversao elevation={2}>
                        
                          <CardHeader
                            title="INFORMAÇÕES DE COMPRA"
                            titleTypographyProps={{ align: 'center', fontWeight: 'bold', fontSize: 16 }}
                            subheaderTypographyProps={{
                              align: 'center',
                            }}
                            sx={{
                              backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                  ? theme.palette.grey[200]
                                  : theme.palette.grey[700],
                              width: '100%'
                            }}
                          />

                          <SubContainerConversao>
                            
                            <TextoSecundario color="text.secondary">
                              Quantidade
                            </TextoSecundario>
                            
                            <Typography textAlign={'center'} component="h4" variant="h5" color="text.primary">
                              1
                            </Typography>

                            <CardActions>
                                <Button variant="outlined" color="inherit" style={{color: '#000'}}>
                                  <ArrowLeft />
                                </Button>
                                <Button variant="outlined" color="inherit" style={{color: '#000'}}>
                                  <ArrowRight />
                                </Button>
                                
                            </CardActions>


                            <TextoSecundario color="text.secondary">
                              Sub Total
                            </TextoSecundario>
                            
                            <Valor  component="h4" variant="h5" color="text.primary">
                              R$ 1000,00
                            </Valor>

                            <br/>

                            <Button variant="outlined" color="inherit" style={{color: '#000'}} fullWidth>
                                adicionar ao carrinho
                            </Button>
                            <br />

                          </SubContainerConversao>
                        
                      </ContainerConversao>
                  </ContainerDados>
          </SubContainer>

          <SubContainer spacing={3} container>
            <ContainerDados item lg={8} md={8} sm={10} xs={12}>
              <TabView descr={descr} />
            </ContainerDados>
            
          </SubContainer>
          

          <Container component="main" sx={{pb: 3, marginLeft: 6, marginRight: 6}}>

              
          </Container>
          
      </>
      
  );
}

const index = () => {

  const route = useRouter();
  const [produto, setProduto] = useState(undefined);
  //const {id} = route.query;
  const {codigo, nome} = route.query;

  useEffect(async () => {
    if(!codigo) return;

    setProduto(undefined);
    const prod = await getProduto(codigo)
    if (prod) {
      setProduto(prod);
    }
  }, [codigo]);


  

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

            <Content prod={produto} nome={nome} />

          </SubContainer>
        </Main>
        
        
        
        
    </Container>
  )
};

export default index;

/*
export const getServerSideProps = async ({ params }) => {
    const { codigo } = params
    const produto = await getProduto(codigo)
    if (!produto) {
      return { notFound: true }
    }
    return { props: { data: { codigo, produto } } }
  }
  */