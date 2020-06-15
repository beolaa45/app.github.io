import Link from 'next/link';
import Nav from './Nav';
import style from './style/header.module.scss';
import Router from 'next/router';
import NProgress from 'nprogress';


Router.onRouteChangeStart = () => {
    NProgress.start()
}

Router.onRouteChangeComplete = () => {
    NProgress.done()
}

Router.onRouteChangeError = () => {
    NProgress.done()
}



const Header = () => (
    <div className={style.Header}>
         <div className={style.Header__bar}>
             <h1 className={style.Header__logo}>


             <Link href='/'>
                <a className={style.Header__link}>Sick Fist</a>
            </Link>
             </h1>
            <div className={style.Header__nav}>
            <Nav />
            </div>
            
        </div>
        <div className='sub-bar'>
            <p>Search</p>
            <p>Cart</p>
        </div>
    </div>
   
)

export default Header;