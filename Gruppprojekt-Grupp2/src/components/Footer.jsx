import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../footer.css'

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <CustomLink to="/Delivery">Leverans</CustomLink>
                <CustomLink to="/TermsAndConditions">Köpvillkor</CustomLink>
                <CustomLink to="/Returns">Byten & Returer</CustomLink>
                <CustomLink to="/Contact">Kontakt</CustomLink>
                <CustomLink to="/About">Om Super Yarn Company</CustomLink>
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