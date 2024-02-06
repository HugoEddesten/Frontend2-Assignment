import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../footer.css'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"

function Footer() {
    return (
        <footer className="footer">
            <div className="socials">
                <a href="https://instagram.com/superyarnstore" target="_blank"><FaInstagram /></a>
                <a href="https://facebook.com/superyarnstore" target="_blank"><FaFacebook /></a>
                <a href="https://twitter.com/superyarnstore" target="_blank"><FaTwitter /></a>
                <a href="https://tiktok.com/superyarnstore" target="_blank"><FaTiktok /></a>
            </div>
            <ul className="list">
                <CustomLink to="/Delivery">Leverans</CustomLink>
                <CustomLink to="/TermsAndConditions">Köpvillkor</CustomLink>
                <CustomLink to="/Returns">Byten & Returer</CustomLink>
                <CustomLink to="/Contact">Kontakt</CustomLink>
                <CustomLink to="/About">Om Super Yarn Store</CustomLink>
                <p className="copyright">Super Yarn Store</p>
            </ul>
        </footer>
    )
}

function CustomLink({ to, children,  ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Footer