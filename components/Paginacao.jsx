import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';



const Paginas = styled(Box)`
    flex-direction: row;
    display: flex;
    margin-top: 18px;
`;

const Square = styled(Box)`
    width: 18px;
    height: 6px;
    border-radius: 3px;
    background-color: ${props => props.active ? '#000' : '#939393'} ;
    margin-left: 2px;
    margin-right: 2px;
`;

const Paginacao = ({ pages, activePage, onClick }) => {
    return (
        <Paginas>
            {pages.map(page => {
                const isActivePage = activePage === page;
                return (
                  <Square
                    key={page}
                    onClick={() => onClick(page)}
                    active={isActivePage}
                  />
                );
            })}
        </Paginas>
    );
};

export default Paginacao;