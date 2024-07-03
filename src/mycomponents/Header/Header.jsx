
import './Header.css'

export default function Header(){
    return (
        <header className='header'>
            <div className="nav-left">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo image" />
                <span className="logotext">GeekFoods</span>
            </div>
            <div className="nav-center">
                <ul className='nav-list'>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Quote</a></li>
                    <li><a href="#">Resturents</a></li>
                    <li><a href="#">Foods</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="nav-right">
                 <button id='startbtn'>Get Started</button>
            </div>
        </header>
    )
}