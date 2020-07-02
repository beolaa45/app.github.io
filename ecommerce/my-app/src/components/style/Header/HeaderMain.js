import styled  from 'styled-components';

const  HeaderMai = styled.div`
    .container-main {
        max-width: 122.2rem;
        width: 100%;
        margin: 0 auto;
        height: 10.5rem;
    }
   font-size: 3rem;
   font-family: "Karla";
   font-weight: 700;
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