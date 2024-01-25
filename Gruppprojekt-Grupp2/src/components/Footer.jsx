import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../footer.css'
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"

function Footer() {
    return (
        <footer className="footer">
            <div className="socials">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaTiktok /></a>
            </div>
            <ul className="list">
                <CustomLink to="/Delivery">Leverans</CustomLink>
                <CustomLink to="/TermsAndConditions">Köpvillkor</CustomLink>
                <CustomLink to="/Returns">Byten & Returer</CustomLink>
                <CustomLink to="/Contact">Kontakt</CustomLink>
                <CustomLink to="/About">Om Super Yarn Company</CustomLink>
                <p className="copyright">Super Yarn Company</p>
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