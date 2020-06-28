import styled  from 'styled-components';

const  HeaderMai = styled.div`
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