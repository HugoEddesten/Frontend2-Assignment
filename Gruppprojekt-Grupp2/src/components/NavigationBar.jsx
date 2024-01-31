import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../navbar.css'
import { IoCart } from "react-icons/io5"

function NavigationBar() {
    return (
        <nav className='nav'>
            <Link to="/" className='logo'><img src="../src/assets/garnnystan.jpg"></img>Super Yarn Store</Link>
            <ul>
                <CustomLink to="/ProductPage">Produkter</CustomLink>
                <CustomLink to="/Contact">Kontakt</CustomLink>
                <CustomLink to="/About">Om Oss</CustomLink>
                <CustomLink to="/Cart"><IoCart className="cart-icon"/></CustomLink>
                <CustomLink to="/LogIn">Logga In</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default NavigationBar