import Subheader from './Subheader';
import '../styles/Header.scss';

const Header = () => 
    <>
        <header className= 'header'>
            <i className='far fa-user header__icon'></i>
            <h4 className='header__admin'>Dr. Pablo Kehyaian</h4>
            <button className='fas fa-angle-down header__button'></button>
        </header>
        <Subheader/>
    </>

export default Header;