import './navbar.css'

function Navbar(){
    return(
        <>
        <nav className='navbar'>
            <p>Нижний Новгород</p>
           <ul className='claslist'>
            <li>
                <a href='..'>Акции</a>
            </li>
            <li>
                <a href='..'>Как заказать</a>
            </li>
            <li>
                <a href='..'>О компании</a>
            </li>
            <li>
                <a href='..'>Доставка и Оплата</a>
            </li>
            <li>
                <a href='..'>Гарантии</a>
            </li>
             <li>
                <a href='..'>Контакты</a>
            </li>
           </ul>
           <p>8800 550-22-16</p>
           <p>Заказать звонок</p>
        </nav>
        </>
    )
}
export default Navbar