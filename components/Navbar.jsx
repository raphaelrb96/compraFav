import { Grid, IconButton, InputBase, Typography, Box, Paper, Container, TextField, Divider, AppBar, Toolbar, Tabs, Tab, Avatar, useScrollTrigger, Slide } from '@mui/material';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { colorPrimaryDark } from '../utilidades/Cores';
import Topo from './Topo';
import PropTypes from 'prop-types';
import { tabsClasses } from '@mui/material/Tabs';
import { CATEGORIAS } from '../utilidades/Categoria';

const theme = {
    colors: {
      primary: '#fff',
    },
  }

const ContainerMain = styled(Grid)`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding: 0;
    margin: 0;
    justify-content: flex-end;
    justify-content: center;
    align-items: center;
    min-height: 70px;
`;

const ContainerLogo = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const ContainerSearch = styled(Grid)`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: row;
    flex: 1;
    padding-right: 8px;
    padding-left: 8px;
`;

const ContainerIcones = styled(Grid)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const TextLogo = styled(Typography)`
    margin-left: 10px;
    color: black;
    font-size: 22px;
    font-weight: 900;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Search = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 10px;
`;

const MeuAppbar = styled(AppBar)`
    background-color: #fff;
    
`;

const EditText = styled(TextField)({
    '& label.Mui-focused': {
        color: colorPrimaryDark,
      },
      '& .MuiInput-underline:after': {
        borderBottomColor: colorPrimaryDark,
      },
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: colorPrimaryDark,
        },
        '&:hover fieldset': {
          borderColor: colorPrimaryDark,
        },
        '&.Mui-focused fieldset': {
          borderColor: colorPrimaryDark,
        },
      },
});

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });
  
    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
}
  
  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
  };

const Navbar = () => {
  
    return (
            <MeuAppbar elevation={1} position='relative'>
                <Topo />

                <Toolbar>
                    <ContainerMain container>
                        <Avatar>
                            <img style={{height: '100%'}} src="./fav.png" alt="favorita" />
                        </Avatar>
                        <ContainerLogo sx={{display: {xs: 'none', sm: 'flex'}}} item>
                            <TextLogo>Compra Favorita</TextLogo>
                        </ContainerLogo>
                        <ContainerSearch item>
                            <Search component="form">
                                <EditText id="outlined-basic" size='small' label="Pesquisar..." variant="outlined" />
                                <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Search>
                        </ContainerSearch>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <ContainerIcones item>
                            <IconButton sx={{ p: '10px' }} aria-label="search">
                                <ShoppingCartIcon />
                            </IconButton>
                            <IconButton sx={{ p: '10px' }} aria-label="search">
                                <AccountCircleIcon />
                            </IconButton>
                        </ContainerIcones>
                    </ContainerMain>

                </Toolbar>
                <Tabs TabScrollButtonProps={{sx: {color: '#000'}}} elevation={1} variant="scrollable" sx={{
                    [`& .${tabsClasses.scrollButtons}`]: {
                      '&.Mui-disabled': { opacity: 0.3 },
                    },
                  }}>
                    {CATEGORIAS.map(({id, i}) => <Tab key={i} label={id} value={i} />)}
                    
                    
                </Tabs>
            </MeuAppbar>
    )
}

export default Navbar;