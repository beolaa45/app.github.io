import App, { Container } from 'next/app';
import Pape from '../components/Page';
import '../style/app.scss'
class MyApp extends App {

    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
                <Pape>
                    <Component {...pageProps}/>
                </Pape>
               
            </Container>
        )
    }
}

export default MyApp;