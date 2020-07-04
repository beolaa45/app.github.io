import styled from 'styled-components';

const Item = styled.li`
    height: 100%;
    
    .nav-link:link,
    .nav-link:visited {
        font-family: "Lato", Arial, Helvetica, sans-serif;
        font-weight: 700;
        font-size: 1.3rem;
        padding: 0;
        transition: color .3s;
        height: 100%;
        padding-right: 2rem;

        display: flex;
        align-items:center;
        justify-content: center;
        

    }
    .nav-link:hover,
    .nav-link:active,
    .activeRoute {
        color: ${props => props.theme.oranges}
    }

`;

export default Item;