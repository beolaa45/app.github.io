import React, { Fragment } from 'react';
import Toobar from '../../components/Navigation/Toobar';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { connect } from "react-redux";
import PropTypes from 'prop-types';

const theme = {
    green: "#092143",
    white: "#ffffff",
    white_2: "#00D2D5",
    oranges: "#E0A31C",
    oranges_2: "#E07819",
    
    black: '#393939',
    grey: '#3A3A3A',
    balck_1: '#3f3f3f',
  
    maxWidth: '1000px',
    boxshadow: "1.3rem 0 3rem rgba(0, 0, 0 , .1)",
    bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
  };

  const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap');
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
  button {  font-family: 'radnika_next'; }
`;
const Layout = (props) => {
    return (
        <ThemeProvider theme={theme}>
        <Fragment>
            <GlobalStyle />
            <Toobar isAuth={props.token} />
            <main>{props.children}</main>
            <footer>footer</footer>
        </Fragment>
        </ThemeProvider>
    );
};
const mapStateToProps = state => {
 return { 
   token: state.auth.token  != null
 }
}
export default connect(mapStateToProps)(Layout);

