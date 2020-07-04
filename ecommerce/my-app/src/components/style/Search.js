import styled from "styled-components";

const Formbox = styled.div`
  height: 100%;
  display: flex;
  
  align-items: center;
  form {
    width: 100%;
    height: 100%;
    margin: 0;
    position: relative;
    height: 4.5rem;
    border-radius: 50px;
    overflow: hidden;

    .form-group {
      margin-bottom: 0;
      height: 4.5rem;
      

      input {
        width: 100%;
        background-image: none;
        font-size: 1.5rem;
        font-family: "Cabin";
        height: 100%;
        padding: 0 2rem;
        font-weight: 400;
        
        &:focus {
            outline:none;
            
        }
        &:active {
            outline:none;
            
        }

        &::placeholder {
          font-size: 1.4rem;
        }
      }
    }
    select {
      position: absolute;
      top: 0;
      right: 5.2rem;
      height: 4.5rem;
      border: none;
      font-size: 1.5rem;

      width: auto;
      text-transform: uppercase;
      padding-left: 2rem;
      padding-right: 2.5rem;
      border-left: 1px solid rgba(0, 0, 0, 0.1); 
      outline: none;
      display: flex;
      justify-content: center;
    }

    > svg {
        position: absolute;
        fill: black;
        top: 50%;
        right: 6rem;
        transform: translateY(-50%)
    }

    button {
        position: absolute;
        top: 50%;
        right: 0;
        height: 4.5rem;
        border: none;

        display: flex;
        justify-content: center;
        align-items: center;
        background: ${props => props.theme.white};
        transform: translateY(-50%);

        width: 5.2rem;
        background: ${props => props.theme.oranges};

        > svg {
            color: ${props => props.theme.white};
            outline: none;
            font-size: 1.4rem;
            height: 2.5rem;
            width: 2.5rem;
        }

        &:hover {
            background: ${props => props.theme.oranges_2};
        }
    }
  }
`;

export default Formbox;
