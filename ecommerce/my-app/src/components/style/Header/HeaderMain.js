import styled  from 'styled-components';

const  HeaderMai = styled.div`
   
   background: ${props => props.theme.green};
   > div {
    max-width: 122.2rem;
    width: 100%;
    margin: 0 auto;
    height: 10.5rem;
    display: flex;
    justify-content: space-between;
    align-items: stretch;

   }
   font-size: 3rem;
   font-family: "Karla", Arial, Helvetica, sans-serif;
   font-weight: 700;

   .link {
       font-size: 5rem;
       color: ${props => props.theme.white};
       
       display: flex;
       align-items: stretch;

       &:hover,
       &:active,
       &:visited,
       &:link {
        color: ${props => props.theme.white};
        text-decoration: none;

       }
   }

   .active-logo {
    color: ${props => props.theme.white};
    height: 100%;
   }

   .search {
       max-width: 59rem;
       width: 100%
   }

   .infor {
    display: flex;
    align-items: center;
    
   > a:link,
    a:visited {
        
    }
    .nav-link:link,
    .nav-link:visited {
        color: ${props => props.theme.white};
        text-decoration: none;
        font-size: 1.4rem;
        text-transform: uppercase;
        font-family: "Lato", Arial, Helvetica, sans-serif;
        font-weight: 700;
       
        margin-right: 1rem;
        &:last-child {
            margin-right: 0;
        }
    
        
       > svg {
            width: 2rem;
            height: 2rem;
        }
    }
    .nav-link:hover,
    .nav-link:active {
        color: ${props => props.theme.white_2};
        }
    .nav-link.activeRoute {
        color: ${props => props.theme.white_2};
    }
   }
   
    .user-icon {
        position: relative
    }
    .user-box {
        position: absolute;
        top: 100%;
        left: 0;
        display: none
    }
    .user-box.active {
        display: block
    }
`
export default HeaderMai