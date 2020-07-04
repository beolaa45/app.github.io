import styled from "styled-components";

const HeaderMai = styled.div`
  background: ${(props) => props.theme.green};
  > div {
    max-width: 122.2rem;
    width: 100%;
    margin: 0 auto;
    padding-right: 15px;
    padding-left: 15px;

    height: 10.5rem;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }
  font-size: 3rem;
  font-family: "Karla", Arial, Helvetica, sans-serif;
  font-weight: 700;

  /************* LOGO ****************/
  .link-logo {
    font-size: 5rem;
    color: ${(props) => props.theme.white};

    display: flex;
    align-items: stretch;

    &:hover,
    &:active,
    &:visited,
    &:link {
      color: ${(props) => props.theme.white};
      text-decoration: none;
    }
  }

  .active-logo {
    color: ${(props) => props.theme.white};
    height: 100%;
  }
  /************* LOGO ****************/

  /************** * SEARCH *************/
  .search {
    max-width: 59rem;
    width: 100%;
  }
  /************** * SEARCH *************/

  /* *********USER **************** */
  .infor {
    display: flex;
    align-items: center;

    & > .nav-link:link,
    & > .nav-link:visited {
      color: ${(props) => props.theme.white};
      text-decoration: none;
      font-size: 1.4rem;
      text-transform: uppercase;
      font-family: "Lato", Arial, Helvetica, sans-serif;
      font-weight: 700;

        padding: 0 1rem;
      
      &:last-child {
        padding-right: 0;
      }

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
    > .nav-link:hover,
    > .nav-link:active {
      color: ${(props) => props.theme.oranges};
    }
    .nav-link.activeRoute {
      color: ${(props) => props.theme.oranges};
    }
  }

  .user-icon {
    position: relative;
    width: 2.5rem;
    height: 2.5rem;
    color: ${(props) => props.theme.white};
    display: flex;
    margin-right: 1rem;

    &:hover {
        color: ${(props) => props.theme.oranges};
    }

    > svg {
      width: 100%;
      height: 100%;
    }
  }
  .user-box {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    background-color: ${(props) => props.theme.white};
    box-shadow: ${(props) => props.theme.boxshadow};
    border-radius: .5rem;

    .nav-link:link,
    .nav-link:visited {
        font-family: "Lato", Arial, Helvetica, sans-serif;
        font-size: 1.3rem;
        font-weight: 400;
        padding: 1rem
    }

    .nav-link:hover,
    .nav-link:active {
        color: ${props => props.theme.oranges}
    }
  }
  .user-box.active {
    display: block;
  }

  /* *********USER **************** */
`;
export default HeaderMai;
