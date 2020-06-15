import Link from 'next/link';
import classList from './style/nav.module.scss';
const Nav = () => (
    <div className={classList.Navigation}>
        <Link href='/items'>
            <a className={classList.Navigation__link}>Items</a>
        </Link>
        <Link href='/sell'>
            <a className={classList.Navigation__link}>Sell</a>
        </Link>
        <Link href='/signup'>
            <a className={classList.Navigation__link}>signup</a>
        </Link>
        <Link href='/orders'>
            <a className={classList.Navigation__link}>Orders</a>
        </Link>
        <Link href='/account'>
            <a className={classList.Navigation__link}>Account</a>
        </Link>
    </div>
)

export default Nav;